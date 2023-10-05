import styled from "styled-components"
import ProductListItem from "./ProductListItem"

const StyledProductList=styled.div`
  background-color:#ffffff;
  height:70vh;
  overflow-y: scroll;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap:2.4rem;
`
function ProductList() {
  return (
    <StyledProductList>
      <ProductListItem/>
      <ProductListItem/>
      <ProductListItem/>
    </StyledProductList>
  )
}

export default ProductList
