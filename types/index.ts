// 型定義
export type Cms = {
  id: string
  date?: string
  title: string
  description?: string
  content: string
  image?: {
    url: string
  }

  category?: string[]
}

// 事例の型定義
export type Work = {
  id: string
  title: string
  content: string
  date: string
  image?: {
    url: string
  }
  category: string[]
  fixed: boolean
}

export interface Download {
  id: string
  title: string
  content: string
  date: string
  image?: {
    url: string
  }
  link: string
  category: string[]
}

export interface TopContentProps {
  title: React.ReactNode
  subTitle?: React.ReactNode // オプショナルに変更
  titleEn?: string // オプショナルに変更
  imageSrc?: string
  body: string
  href: string | URL
  linkTitle?: string // オプショナルに変更
}

export interface FrameProps {
  children?: React.ReactNode
  className?: string
  id?: string // id属性を追加
  ImageSrc?: string
  ImageWidth?: number
  ImageHeight?: number
}

export interface ContentHeadlineProps extends FrameProps {
  mainTitle: React.ReactNode
  description?: React.ReactNode
  subTitle?: string
  parentDirectoryName?: string
  parentDirectoryLink?: string
  titleClassName?: string // h1用のclassName
  subTitleClassName?: string // h2用のclassName
}

export interface PageHeadlineProps extends FrameProps {
  mainTitle: React.ReactNode
  subTitle?: React.ReactNode
  enTitle?: string
  titleClassName?: string
  enTitleClassName?: string
}
export interface ButtonProps {
  children: React.ReactNode // ボタンの中身（テキストや要素など）
  className?: string // オプショナルなクラス名
  onClick?: () => void // クリックイベントハンドラー
  disabled?: boolean // disabledプロパティを追加
}

export interface TextProps {
  title: React.ReactNode
  subTitle: React.ReactNode
  number?: React.ReactNode // numberはオプショナル
  body?: React.ReactNode // bodyをオプショナルに変更
  titleElement?: React.ElementType
  subTitleElement?: React.ElementType
  numberElement?: React.ElementType
  bodyElement?: React.ElementType
}
