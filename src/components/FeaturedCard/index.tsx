import * as S from './styles'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faRulerHorizontal,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface FeaturedCard {
  rua: string
  image: string
  bairro: string
  metros: string
}

const FeaturedCard = ({ rua, bairro, image, metros }: FeaturedCard) => (
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
      </S.InfoAdicionais>
      <S.Favoritar>
        <FontAwesomeIcon icon={faHeart} />
      </S.Favoritar>
    </S.Description>

    <S.Detalhes>
      <a>
        Detalhes <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    </S.Detalhes>
  </S.Wrapper>
)

export default FeaturedCard
