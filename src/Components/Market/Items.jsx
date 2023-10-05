import styled from "styled-components"
import Card from "./Card"
import {  GiCarrot, GiGrapes, GiPineapple, GiTomato } from "react-icons/gi";


const StyledSection=styled.section`
  
  padding:2.4rem 9.6rem;

` 
const Container=styled.div`
   background-color: var(--color-grey-0);

   display: grid;
   grid-template-columns: repeat(4,1fr);
   column-gap:3.2rem;
   row-gap:2.4rem;
   padding:1.6rem;
`

const dataItems=[
  {
    id:"Tomato",
    name:"Tomato",
    description:"Great source of Vitamin C, Potassium, Folate, and Vitamin K",
    style:{
      backgroundColor:"#e35151",
      iconColor:"#b01e1e",
    },
    icon:GiTomato,
  },
  {
    id:"Grapes",
    name:"Grapes",
    description:"Rich source of Antioxidants, Boost Heart health, Prevent Cancer, etc",
    style:{
      backgroundColor:"#a95cee",
      iconColor:"#2c0f46",
    },
    icon:GiGrapes,
  },
  {
    id:"Carrot",
    name:"Carrot",
    description:"Great source of Vitamin C, Potassium, Folate, and Vitamin K",
    style:{
      backgroundColor:"#ef8e4f",
      iconColor:"#e85d04",
    },
    icon:GiCarrot,
  },
  {
    id:"PineApple",
    name:"PineApple",
    description:"Great source of Vitamin C, Potassium, Folate, and Vitamin K",
    style:{
      backgroundColor:"#ffe39c",
      iconColor:"#ffba08",
    },
    icon:GiPineapple,
  },
  
]
function Items() {
  return (
    <StyledSection>
      <Container>
        {dataItems.map(item=><Card key={item.id} name={item.name} description={item.description} style={item.style} icon={item.icon}/>)}        
      </Container>
    </StyledSection>
  )
}

export default Items
