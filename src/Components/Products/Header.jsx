import {useParams } from "react-router-dom"

import SortBy from "./SortBy";
import styled from "styled-components";
import BackButton from "./BackButton";

const StyledHeader=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 2.4rem;
  background-color: #88d683;
`

const Title=styled.span`
  text-transform: uppercase;
  font-size: 2.4rem;
  color:#f6f6f6;
  font-weight: 700;
`
function Header() {
  const {productName}=useParams();
  return (
    <StyledHeader>
      <BackButton/>
      <Title>{productName}</Title>
      <SortBy options={[
          { value: "name-asc", label: "Sort by Name(A-Z)" },
          { value: "name-desc", label: "Sort by Name(Z-A)" },
          { value: "price-asc", label: "Sort by Price(low first)" },
          { value: "price-desc", label: "Sort by Price(high first)" },
          { value: "freshness-asc", label: "Sort by Freshness(low first)" },
          { value: "freshness-desc", label: "Sort by Freshness(high first)" },
        ]}/>
    </StyledHeader>
  )
}

export default Header
