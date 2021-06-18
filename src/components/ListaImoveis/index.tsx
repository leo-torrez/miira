import { useState } from 'react'
import dynamic from 'next/dynamic'
import * as S from './styles'
import ListCardItem from './ListCardItem'
import { ESTADOS } from 'json/estados/estados'

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
      razaoSocial={property.Razao_Social}
      tamanhoEstabelecimento={property.Tamanho_Estabelecimento}
      indSimples={property.Ind_Simples}
    />
  ))
}

const getInfoStateSelected = (state: any) => {
  return ESTADOS.filter((estado) => state == estado.cod).map((estado) => {
    return {
      cod: estado.cod,
      uf: estado.uf,
      uf_cod: estado.uf_cod,
      latitude: JSON.parse(estado.lat_lon)[0],
      longitude: JSON.parse(estado.lat_lon)[1],
      zoom: estado.zoom
    }
  })[0]
}

const ListaImoveis = ({ properties, state }: any) => {
  const listProperties = renderProperties(properties)
  const state_latitude_longitude = getInfoStateSelected(state)

  const [showSubMenu, setShowSubMenu] = useState(false)
  return (
    <S.Wrapper>
      <S.LeftColumn>
        {/* <S.Filtros>
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
        </S.Filtros> */}
        <S.WrapperListItem>
          {properties && properties.length > 0 && listProperties}
        </S.WrapperListItem>
      </S.LeftColumn>
      <S.RightColumn>
        <Map
          state={state_latitude_longitude}
          places={[
            {
              id: '01',
              location: {
                latitude: -23.58585,
                longitude: -46.67313
              },
              name: 'São Paulo',
              slug: 'sp'
            }
          ]}
        />
      </S.RightColumn>
    </S.Wrapper>
  )
}

export default ListaImoveis
