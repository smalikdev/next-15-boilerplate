import Link from "next/link"
interface BreadcrumbProps {
  pageName: string
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="font-calibri text-[32px] text-title-md2 font-bold text-black dark:text-white">{pageName}</h2>
    </div>
  )
}

export default Breadcrumb
