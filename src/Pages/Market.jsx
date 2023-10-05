import styled from "styled-components"
import Header from "../Components/Market/Header"
import GlobalStyles from "../Styles/GlobalStyles"
import Slider from "../Components/Market/Slider"
import Items from "../Components/Market/Items"

const Container=styled.div`
  max-width:130rem;
  margin: 0 auto;
  background-color: var(--color-grey-200);
  //background-color: #cfd2cd;
  //background-color: #f8f9fa;
  //background-color: #f4f3ee;
  min-height:100vh;
`
function Market() {
  return (
    <>
    <GlobalStyles/>
    <Container>
      <Header/>
      <Slider/>
      <Items/> 
    </Container>
    </>
  )
}

export default Market
