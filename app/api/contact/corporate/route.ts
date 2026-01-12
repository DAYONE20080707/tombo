import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 環境変数を使用
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } =
  process.env;

export async function POST(req: Request) {
  try {
    const {
      company,
      lastName,
      firstName,
      department = "",
      position = "",
      email,
      phone,
      website = "",
      inquiryType = "",
      message,
    } = await req.json();

    // 必須項目のバリデーション（法人フォーム用）
    const requiredFields = [
      company,
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
        service: "サービス・製品に関するお問い合わせ",
        estimate: "見積もり・価格に関するお問い合わせ",
        partnership: "パートナーシップ・提携に関するお問い合わせ",
        recruit: "採用に関するお問い合わせ",
        other: "その他",
      };
      const inquiryTypeText = inquiryTypeTextMap[inquiryType] || inquiryType;
      emailBody += `【お問い合わせ内容】 ${inquiryTypeText}\n`;
    }

    emailBody += `会社名: ${company}\n`;
    if (department) emailBody += `部署: ${department}\n`;
    if (position) emailBody += `役職: ${position}\n`;
    emailBody += `姓: ${lastName}\n`;
    emailBody += `名: ${firstName}\n`;
    emailBody += `メールアドレス: ${email}\n`;
    emailBody += `電話番号: ${phone}\n`;
    if (website) emailBody += `会社ウェブサイトURL: ${website}\n`;
    emailBody += `\n本文:\n${message}\n`;

    // ① 管理者宛のメール
    const adminMailOptions = {
      from: `"お問い合わせフォーム（法人）" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: "【法人お問い合わせ】新しいメッセージが届きました",
      text: emailBody,
      replyTo: email,
    };

    // ② ユーザー宛の確認メール
    let userEmailBody = `${company} ${lastName} ${firstName} 様\n\nお問い合わせありがとうございます。\n以下の内容で受け付けました。\n\n------------------\n`;
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


