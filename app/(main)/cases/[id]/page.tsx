import CasesDetail_01 from "@/components/cases/casesDetail/CasesDetail_01"

interface CasesDetailPageProps {
  params: Promise<{ id: string }>
}

const CasesDetailPage = async ({ params }: CasesDetailPageProps) => {
  const { id } = await params

  return <CasesDetail_01 params={{ id }} />
}

export default CasesDetailPage
