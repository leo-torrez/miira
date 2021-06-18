import * as S from './styles'
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const Sidebar = () => (
  <S.Wrapper>
    <S.Logo>
      <a href="#">M</a>
    </S.Logo>

    <S.Ul>
      <S.Li>
        <Link href="/home">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </S.Li>
    </S.Ul>
    <S.User></S.User>
  </S.Wrapper>
)

export default Sidebar
