import dynamic from 'next/dynamic'
import * as S from './styles'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faRulerHorizontal,
  faExternalLinkAlt,
  faTrafficLight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Map = dynamic(() => import('components/Map'), { ssr: false })

interface ListCardItem {
  rua?: string
  image: string
  bairro?: string
  metros?: string
  transito?: string
  razaoSocial?: string
  indSimples?: number
  tamanhoEstabelecimento?: number
}

const ListCardItem = ({
  image,
  bairro,
  rua,
  metros,
  transito
}: ListCardItem) => (
  <S.Wrapper>
    <S.Image image={image} />
    <S.Description>
      <S.Rua>{rua}</S.Rua>
      <S.Bairro>{bairro}</S.Bairro>
      <S.InfoAdicionais>
        <S.Tamanho>
          <p> {metros}</p>
          <FontAwesomeIcon icon={faRulerHorizontal} />
        </S.Tamanho>
        <S.Transito>
          <p> {transito}</p>
          <FontAwesomeIcon icon={faTrafficLight} />
        </S.Transito>
      </S.InfoAdicionais>
      <S.Favoritar>
        <FontAwesomeIcon icon={faHeart} />
      </S.Favoritar>
    </S.Description>
  </S.Wrapper>
)

export default ListCardItem
