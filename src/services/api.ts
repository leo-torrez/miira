import axios from 'axios'
import { parseCookies } from 'nookies'

type Authenticated = {
  email: string
  password: string
}

type Value = {
  value: string
}

interface Form {
  state: string;
  municipality: string;
  sector: string;
}
export const postToken = ({ email, password }: Authenticated) => {
  return axios.post(`https://miiraapi.azurewebsites.net/api/login/`, {
    email,
    password
  })
}

export const getMunicipalities = (value: string) => {
  const header = createHeader()
  console.log(header)
  return axios.get(
    `https://miiraapi.azurewebsites.net/api/municipios/estado/${value}/`,
    header
  )
}

export const getSectorsByMunicipality = (value: string) => {
  const newValue = value.slice(0, -1);
  const header = createHeader()
  return axios.get(
    `https://miiraapi.azurewebsites.net/api/setores/municipio/${newValue}/`,
    header
  )
}

export const getListPropeties = ({state, municipality, sector}: Form) => {
  const newCodMunicipality = municipality.slice(0, -1);
  const header = createHeader()
  return axios.get(
    `https://miiraapi.azurewebsites.net/api/places/estado/${state}/municipio/${newCodMunicipality}/cnae/${sector}/`,
    header
  )
}

const createHeader = () => {
  const { 'miira-token': token } = parseCookies()
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}
