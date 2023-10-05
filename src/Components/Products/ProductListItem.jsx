import { useParams } from "react-router-dom"
import styled from "styled-components"

const StyledItem=styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  column-gap:2.4rem;
  padding: 1.6rem 0.8rem;

  border-bottom: solid 1px var(--color-grey-200);
`
const Image=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & img{
    width:20rem;
    height:16rem;
  }
`;

const Details=styled.div`
  display: flex;
  flex-direction: column;
  gap:2.4rem;
  align-self: center;
  /* background-color: var(--color-grey-200); */
`;

const FlexContainer=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3{
    font-size: 3rem;
  }
`;

const Button=styled.button`
  text-transform: uppercase;
  padding: 0.8rem 1.6rem;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: #6ee2ad;
  border: none;
  border-radius: 5px;
  margin-right:2.4rem;
  cursor: pointer;
`;
const GridContainer=styled.div`
  display: grid;
  grid-template-columns:repeat(5,1fr);
`;
const GridItem=styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:1rem;

  & span:first-child{
    font-size: 1.6rem;
    color:var(--color-grey-400);
  }
  
  & span:last-child{
    font-size: 1.8rem;
    color:var(--color-grey-900);
    font-weight: 600;
  }
`;

const Profile=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:auto;
  
  
  border-radius: 50%;
  overflow: hidden;
  width:5.4rem;
  height:5.4rem;

  & img{
    width:100%;
    height:100%;
  }
`

function ProductListItem() {
  const {productName}=useParams();
  return (
    <StyledItem>
      <Image>
        <img src="/tomato-1.jpg" alt={productName}/>
      </Image>
      <Details>
        <FlexContainer>
          <h3>Tomato</h3>
          <Button>Add</Button>
        </FlexContainer>
        <GridContainer>
          <GridItem>
            <span>Weight</span>
            <span>1 kg</span>
          </GridItem>
          <GridItem>
            <span>Price</span>
            <span>$25.00</span>
          </GridItem>
          <GridItem>
            <span>Freshness</span>
            <span>85%</span>
          </GridItem>
          <GridItem>
            <span>Purchases</span>
            <span>500+</span>
          </GridItem>
          <div>
            <Profile>
              <img src="/farmer-1.jpg" alt="Farmer"/>
            </Profile>
          </div>
        </GridContainer>
      </Details>
    </StyledItem>
  )
}

export default ProductListItem
