// components/ui/main/module/Breadcrumb.tsx

import Link from "next/link"
import { ChevronRight } from "react-feather"

interface BreadcrumbProps {
  mainTitle: React.ReactNode
  parentDirectoryName?: string
  parentDirectoryLink?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  mainTitle,
  parentDirectoryName,
  parentDirectoryLink,
}) => {
  return (
    <div className="text-xs md:text-sm text-white mb-3 flex items-center space-x-1 flex-wrap">
      <Link href="/">トップページ</Link>
      <ChevronRight className="w-4 h-4" />
      {parentDirectoryName && parentDirectoryLink && (
        <>
          <Link href={parentDirectoryLink}>{parentDirectoryName}</Link>
          <ChevronRight className="w-4 h-4" />
        </>
      )}
      <div>{mainTitle}</div>
    </div>
  )
}

export default Breadcrumb
