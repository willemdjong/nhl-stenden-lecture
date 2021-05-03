import Link from 'next/link'

import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: #fff;
  height: 8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: capitalize;
  color: #333;
`

const Header: React.VFC = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <HeaderTitle>My blog</HeaderTitle>
      </Link>
    </HeaderContainer>
  )
}

export default Header
