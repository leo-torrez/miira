import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  faChevronDown,
  faCoffee,
  faSearch,
  faBuilding
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'
import ListaImoveis from 'components/ListaImoveis'
import { ESTADOS } from 'json/estados/estados'
import {
  getMunicipalities,
  getSectorsByMunicipality,
  getListPropeties
} from 'services/api'
interface Search {
  showResult: boolean
}

interface States {
  uf: string
  uf_cod: string
  cod: number
  lat_lon: string
  zoom: number
}

interface Municipalities {
  cod: number
  latitude: string
  longitude: string
  nome: string
  zoom: number
}

interface Sectors {
  cnae: number
  nome: string
}

interface Form {
  state: string
  municipality: string
  sector: string
}

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

const renderStates = (states: States[]) => {
  return states.map((state: States) => (
    <option key={state.cod} value={state.cod}>
      {state.uf}
    </option>
  ))
}

const renderMuncipalities = (municipalities: Municipalities[]) => {
  return municipalities.map((municipality: Municipalities) => (
    <option key={municipality.cod} value={municipality.cod}>
      {municipality.nome}
    </option>
  ))
}

const renderSectors = (sectors: Sectors[]) => {
  return sectors.map((sector: Sectors) => (
    <option key={sector.cnae} value={sector.cnae}>
      {sector.nome}
    </option>
  ))
}

const Search = ({ showResult = true }: Search) => {
  const { register, handleSubmit } = useForm()
  const [municipalities, setMunicipalities] = useState([])
  const [sectors, setSectors] = useState([])
  const [properties, setProperties] = useState<Properties[]>([])

  const createStates = renderStates(ESTADOS)
  const createMunicipalities = renderMuncipalities(municipalities)
  const createSectors = renderSectors(sectors)

  async function LoadMunicipalities(value: string) {
    try {
      const { data } = await getMunicipalities(value)
      setMunicipalities(data.data.municipios)
    } catch (e) {
      console.log(e)
    }
  }

  async function LoadSectors(value: string) {
    try {
      const { data } = await getSectorsByMunicipality(value)
      setSectors((data && data.data) || [])
    } catch (e) {
      console.log(e)
    }
  }

  async function submit({ state, municipality, sector }: Form) {
    try {
      const { data } = await getListPropeties({ state, municipality, sector })
      if (data && data.data && data.data.length > 0) {
        setProperties(data.data)
      }
    } catch (error) {}
  }
  return (
    <>
      <S.Title>
        <span>
          <FontAwesomeIcon icon={faBuilding} />
        </span>
        Encontre o seu imóvel
      </S.Title>

      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(submit)}>
          <S.Input placeholder="Pesquise pelo endereço" />
          <S.Select
            {...register('state')}
            defaultValue={''}
            onChange={(e) => LoadMunicipalities(e.target.value)}
          >
            <option value="" selected>
              Estado
            </option>
            {createStates}
          </S.Select>
          <S.Select
            {...register('municipality')}
            onChange={(e) => LoadSectors(e.target.value)}
          >
            <option value="" selected>
              Municipio
            </option>
            {municipalities &&
              municipalities.length > 0 &&
              createMunicipalities}
          </S.Select>
          <S.Select {...register('sector')}>
            <option value="">Setor</option>
            {sectors && sectors.length > 0 && createSectors}
          </S.Select>
          <S.Button>
            <FontAwesomeIcon icon={faSearch} />
          </S.Button>
        </S.Form>
      </S.Wrapper>
      {properties && properties.length > 0 && (
        <ListaImoveis properties={properties} />
      )}
    </>
  )
}

export default Search
