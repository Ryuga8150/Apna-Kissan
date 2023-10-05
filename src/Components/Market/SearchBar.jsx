import styled from "styled-components"
import { BsSearch } from "react-icons/bs"

const StyledSearch=styled.div`
  border: 1px solid var(--color-grey-100);
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  display: flex;
  
`

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  /* border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0); */
  
  font-weight: 500;
  border:none;
  //box-shadow: var(--shadow-sm);
  margin-right: 5px;
  border-right: solid 1px var(--color-grey-300);
  padding-right: 2px;
`;

const Input = styled.input`
font-size: 1.4rem;
  /* border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm); */
  border:none;
  //box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
`;

const Icon=styled.div`
display: flex;
align-self: center;
padding: 0.8rem;
  & svg{
    width:1.8rem;
    height:100%;
  }
`
function SearchBar() {
  return (
    <StyledSearch>
      <StyledSelect value="all" >
        <option value="all">All Categories</option>
        <option value="vegetables">Vegetables</option>
        <option value="fruits">Fruits</option>
      </StyledSelect>
      <Input type="text" placeholder={"Search in Market"}/>
    <Icon>
      <BsSearch/>
    </Icon>
    </StyledSearch>
  )
}

export default SearchBar;
