import styled from "styled-components"

const StyledCartSummary=styled.div`
  background-color: yellow;
  padding: 1.2rem 2.4rem;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container=styled.div`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  gap:5.2rem;
`
function CartSummary() {
  return (
    <StyledCartSummary>
      <Container>
        <span>$75.00</span>
        <span>View Cart(03) &rarr;</span>
      </Container>
    </StyledCartSummary>
  )
}

export default CartSummary
