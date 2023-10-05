import styled from "styled-components";
import Header from "../Components/Products/Header";
import ProductList from "../Components/Products/ProductList";
import GlobalStyles from "../Styles/GlobalStyles";
import CartSummary from "../Components/Products/CartSummary";

const StyledProduct=styled.div`
  max-width:130rem;
  margin:0 auto;
  background-color: var(--color-grey-100);
  min-height:100vh;
`
const Container=styled.div`
  padding: 4.8rem 12.8rem;
  /* background-color: var(--color-grey-200); */
`
function Products() {
  return (
    <>
    <GlobalStyles/>
    <StyledProduct>
      <Header/>
      <Container>
        <ProductList/>
      </Container>
      <CartSummary/>
    </StyledProduct>
    </>
  )
}

export default Products
