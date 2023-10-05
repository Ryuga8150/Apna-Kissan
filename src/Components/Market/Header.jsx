import styled from "styled-components"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Cart from "./Cart"

const StyledHeader=styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;

  padding:1.2rem 1.6rem;
`

function Header() {
  return (
    <StyledHeader>
      <Logo/>
      <SearchBar/>
      <Cart/>
    </StyledHeader>
  )
}

export default Header
