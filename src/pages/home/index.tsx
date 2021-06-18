import dynamic from 'next/dynamic'
import { Container } from 'components/Container'
import { ContainerFull } from 'components/ContainerFull'
import Search from 'components/Search'
import Sidebar from 'components/Sidebar'
import Featured from 'components/Featured'
import ImoveisFavoritos from 'components/ImoveisFavoritos'

const Map = dynamic(() => import('components/Map'), { ssr: false })
export default function Home() {
  return (
    <ContainerFull>
      <Sidebar />

      <Container>
        <Search showResult={false} />
        <Featured />
        <ImoveisFavoritos />
      </Container>
    </ContainerFull>
  )
}
