import { useState } from 'react'
import dynamic from 'next/dynamic'
import * as S from './styles'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faRulerHorizontal,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListCardItem from './ListCardItem'

import IMAGE_IMOVEL from 'assets/images/imovel.jpg'
import IMAGE_IMOVEL_2 from 'assets/images/search-background.jpg'
const Map = dynamic(() => import('components/Map'), { ssr: false })

type Properties = {
  CEP: number
  CNAE: number
  CNPJ: number
  CNPJ_Raiz: number
  COD_MUN: number
  COD_UF: number
  Ind_Simples: number
  LOC: string
  LOCALIZACAO: string
  Nome_Logradouro: string
  Numero_Logradouro: number
  Razao_Social: string
  Tamanho_Estabelecimento: number
  latlng: []
}

function formatString(text: string) {
  const newText = text.replace(/\\/g, '')
  return newText.toLowerCase()
}

const renderProperties = (properties: Properties[]) => {
  const newArray = properties.map((property) => {
    return {
      ...property,
      Razao_Social: formatString(property.Razao_Social),
      LOCALIZACAO: formatString(property.LOCALIZACAO),
      Nome_Logradouro: formatString(property.Nome_Logradouro),
      LOC: formatString(property.LOC)
    }
  })

  return newArray.map((property, index) => (
    <ListCardItem
      key={`${property.CNAE}_${index}`}
      rua={`${property.Nome_Logradouro} - ${property.Numero_Logradouro}`}
      bairro={property.LOC}
      image={IMAGE_IMOVEL}
      razaoSocial={property.Razao_Social}
      tamanhoEstabelecimento={property.Tamanho_Estabelecimento}
      indSimples={property.Ind_Simples}
    />
  ))
}

const ListaImoveis = ({ properties }: any) => {
  const listProperties = renderProperties(properties)

  const [showSubMenu, setShowSubMenu] = useState(false)
  return (
    <S.Wrapper>
      <S.LeftColumn>
        <S.Filtros>
          <ul>
            <li onClick={() => setShowSubMenu(!showSubMenu)}>
              Trânsito
              {showSubMenu && <div>Filtros para categoria trânsito</div>}
            </li>
            <li onClick={() => setShowSubMenu(!showSubMenu)}>
              Renda
              {showSubMenu && <div>Filtros para categoria Renda</div>}
            </li>
            <li onClick={() => setShowSubMenu(!showSubMenu)}>
              Metros
              {showSubMenu && <div>Filtros para categoria Metros</div>}
            </li>
          </ul>
        </S.Filtros>
        <S.WrapperListItem>
          {properties && properties.length > 0 && listProperties}
        </S.WrapperListItem>
      </S.LeftColumn>
      <S.RightColumn>
        <Map />
      </S.RightColumn>
    </S.Wrapper>
  )
}

export default ListaImoveis
