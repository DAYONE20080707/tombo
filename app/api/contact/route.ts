import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 環境変数を使用
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } =
  process.env;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // FormDataからフィールドを取得
    const inquiryType = (formData.get("inquiryType") as string) || "";
    const department = (formData.get("department") as string) || "";
    const lastName = formData.get("lastName") as string;
    const firstName = formData.get("firstName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    // ファイルサイズの制限（5MB）
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (file && file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "ファイルサイズは5MB以下にしてください。" },
        { status: 400 }
      );
    }

    // 必須項目のバリデーション（今回のフォーム構成に合わせる）
    const requiredFields = [
      lastName,
      firstName,
      email,
      phone,
      inquiryType,
      message,
    ];
    if (requiredFields.some((field) => !field || field.trim() === "")) {
      return NextResponse.json(
        { error: "すべての必須項目を入力してください。" },
        { status: 400 }
      );
    }

    // Nodemailer の設定（タイムアウト設定を追加）
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: EMAIL_PORT === "465", // ポート465の場合はtrue
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      connectionTimeout: 10000, // 接続タイムアウト: 10秒
      greetingTimeout: 10000, // グリーティングタイムアウト: 10秒
      socketTimeout: 10000, // ソケットタイムアウト: 10秒
    });

    // メール本文を組み立てる
    let emailBody = "";

    if (inquiryType) {
      const inquiryTypeTextMap: Record<string, string> = {
        service: "サービス・商品に関するお問い合わせ",
        price: "料金・プランに関するお問い合わせ",
        usage: "ご利用方法に関するお問い合わせ",
        other: "その他",
      };
      const inquiryTypeText = inquiryTypeTextMap[inquiryType] || inquiryType;
      emailBody += `【お問い合わせ内容】 ${inquiryTypeText}\n`;
    }

    if (department) emailBody += `所属: ${department}\n`;
    emailBody += `姓: ${lastName}\n`;
    emailBody += `名: ${firstName}\n`;
    emailBody += `メールアドレス: ${email}\n`;
    emailBody += `電話番号: ${phone}\n`;
    if (file && file.size > 0) {
      emailBody += `添付ファイル: ${file.name}\n`;
    }
    emailBody += `\n本文:\n${message}\n`;

    // ファイルの添付処理
    let attachments: any[] = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // ① 管理者宛のメール
    const adminMailOptions = {
      from: `"お問い合わせフォーム" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: "【お問い合わせ】新しいメッセージが届きました",
      text: emailBody,
      replyTo: email,
      attachments: attachments,
    };

    // ② ユーザー宛の確認メール
    let userEmailBody = `${lastName} ${firstName} 様\n\nお問い合わせありがとうございます。\n以下の内容で受け付けました。\n\n------------------\n`;
    userEmailBody += emailBody;
    userEmailBody +=
      "\n------------------\n\n担当者が確認後、ご連絡いたします。\n\nよろしくお願いいたします。";

    const userMailOptions = {
      from: `"合同会社TOMBO"`,
      to: email,
      subject: "【自動返信】お問い合わせありがとうございます。",
      text: userEmailBody,
      replyTo: EMAIL_USER,
    };

    // 2通のメールを並列送信（30秒のタイムアウト付き）
    const sendMailPromise = Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("メール送信がタイムアウトしました")), 30000)
    );

    await Promise.race([sendMailPromise, timeoutPromise]);

    return NextResponse.json(
      { message: "メールが正常に送信されました。" },
      { status: 200 }
    );
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました。" },
      { status: 500 }
    );
  }
}
