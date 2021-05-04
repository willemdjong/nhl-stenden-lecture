import Header from './header'

import styled from 'styled-components'

const LayoutContainer = styled.div`
  padding: 1rem;
  max-width: 600px;
  margin: auto;
`


interface LayoutProps {
  children: any
}

const Layout: React.VFC<LayoutProps> = ({children}) => {
  return (
    <LayoutContainer>
      <Header />
      <main className="Container">{children}</main>
    </LayoutContainer>
  )
}

export default Layout
