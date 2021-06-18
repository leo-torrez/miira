import * as S from './styles'
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FeaturedCard from 'components/FeaturedCard'
import IMAGE_IMOVEL from 'assets/images/imovel.jpg'
import IMAGE_IMOVEL_2 from 'assets/images/search-background.jpg'
const Featured = () => (
  <S.Wrapper>
    <S.WrapperTitle>
      <S.Title>Imóveis em destaques de</S.Title>
      <S.Select>
        <option value="">Selecione</option>
        <option value="" selected>
          Recife
        </option>
        <option value="">São Paulo</option>
      </S.Select>
    </S.WrapperTitle>
    <S.WrapperList>
      <FeaturedCard
        rua="Rua Samuel Pinto"
        bairro="Boa Vista"
        image={IMAGE_IMOVEL}
        metros="120 m²"
      />
      <FeaturedCard
        rua="Av. João de Barros"
        bairro="Boa Vista"
        image={IMAGE_IMOVEL_2}
        metros="80 m²"
      />
      <FeaturedCard
        rua="Av. Boa Viagem"
        bairro="Boa Viagem"
        image={IMAGE_IMOVEL}
        metros="80 m²"
      />
      <FeaturedCard
        rua="Av. Domingos Ferreira"
        bairro="Boa Viagem"
        image={IMAGE_IMOVEL_2}
        metros="80 m²"
      />
    </S.WrapperList>
  </S.Wrapper>
)

export default Featured
