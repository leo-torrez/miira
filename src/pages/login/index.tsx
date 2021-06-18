import dynamic from 'next/dynamic'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContainerFull } from 'components/ContainerFull'
import {
  ContainerLogin,
  BoxLogin,
  BoxLoginLeft,
  BoxLoginRight,
  LoginTitle,
  Form,
  Input,
  Label,
  Button
} from 'components/ContainerLogin'
import { AuthContext } from 'contexts/AuthContext'

interface LoginForm {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  async function handleSignIn(data: LoginForm) {
    try {
      setLoading(true)
      await signIn(data)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <ContainerFull>
      <ContainerLogin>
        <BoxLogin>
          <BoxLoginLeft>
            <LoginTitle>Ei, você está no Miira ;)</LoginTitle>
            <Form onSubmit={handleSubmit(handleSignIn)}>
              <Label>
                Informe o seu e-mail
                <Input
                  {...register('email')}
                  placeholder="E-mail"
                  name="email"
                  value="gustavorsampaio@gmail.com"
                />
              </Label>
              <Label>
                Informe a sua senha
                <Input
                  {...register('password')}
                  placeholder="Senha"
                  type="password"
                  name="password"
                  value="gsampaio82"
                />
              </Label>

              <Button type="submit" disabled={loading}>
                {!loading ? 'Entrar no Miira' : 'Entrando...'}
              </Button>
            </Form>
          </BoxLoginLeft>
          <BoxLoginRight>
            <h1>Bem vindo ao Miira!</h1>
            <p>Você não possui uma conta no Mira?</p>
          </BoxLoginRight>
        </BoxLogin>
      </ContainerLogin>
    </ContainerFull>
  )
}
