import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { postToken } from 'services/api'
type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
}

type SignInData = {
  email: string
  password: string
}

type Token = {
  token: string
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<Token | null>(null)

  const isAuthenticated = !!token

  useEffect(() => {
    const { 'miira-token': token } = parseCookies()
    if (!token || token == '') {
      Router.push('/login')
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    try {
      const { data } = await postToken({ email, password })
      console.log(data)
      setCookie(undefined, 'miira-token', data.token, {
        maxAge: 60 * 60 * 1 //1 hora
      })

      setToken(data.token)

      Router.push('/home')
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
