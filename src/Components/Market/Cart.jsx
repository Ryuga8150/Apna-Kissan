import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

const StyledCart=styled.div`
  display: flex;
  align-self: center;
  padding: 0.8rem;
  background-color: var(--color-grey-0);

  border-radius: var(--border-radius-sm);
  
  & svg{
    width:2.4rem;
    height:2.4rem;
  }
`
function Cart() {
  return (
    <StyledCart>
      <AiOutlineShoppingCart/>
    </StyledCart>
  )
}

export default Cart
