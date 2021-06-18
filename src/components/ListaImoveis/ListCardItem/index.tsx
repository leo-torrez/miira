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
  bairro?: string
  metros?: string
  transito?: string
  razaoSocial?: string
  indSimples?: number
  tamanhoEstabelecimento?: number
}

const ListCardItem = ({
  bairro,
  rua,
  razaoSocial,
  indSimples,
  tamanhoEstabelecimento
}: ListCardItem) => (
  <S.Wrapper>
    <S.Image />
    <S.Description>
      <S.Rua>{rua}</S.Rua>
      <S.Bairro>{bairro}</S.Bairro>
      <S.InfoAdicionais>
        <S.Transito>
          <p>
            {' '}
            <strong>Razão Social:</strong> <span>{razaoSocial}</span>
          </p>
        </S.Transito>
        <S.Transito>
          <p>
            {' '}
            <strong>Tamanho do Estabelecimento:</strong>{' '}
            <span>{tamanhoEstabelecimento}</span>
          </p>
        </S.Transito>
        <S.Transito>
          <p>
            {' '}
            <strong>Ind_Simples:</strong> <span>{indSimples}</span>
          </p>
        </S.Transito>
      </S.InfoAdicionais>
      <S.Favoritar>
        <FontAwesomeIcon icon={faHeart} />
      </S.Favoritar>
    </S.Description>
  </S.Wrapper>
)

export default ListCardItem
