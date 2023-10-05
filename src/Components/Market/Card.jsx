import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from "styled-components"



const StyledCard=styled.div`
  border-radius: var(--border-radius-lg);
  //background-color:#e5e7eb;
  background-color:#f4f3ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 1.2rem;
  text-align: center;
  
  & span{
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  & p{
    font-size:1.5rem;
    letter-spacing: .2px;
    margin-bottom: 2rem;
  }
`
const Icon=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;

  border-radius: 50%;
  width:12.8rem;
  height: 12.8rem;
  margin-bottom: 1.2rem;

  background-color: ${props=>props.backgroundColor};
  color: ${props=>props.iconColor};

  & svg{
    width:100%;
    height:100%;
    border-radius: 50%;
    color: inherit;
  }
`
const Button=styled.button`
  color: inherit;
  text-transform: uppercase;
  padding: 0.8rem 1.6rem;
  font-family: inherit;
  font-size: 1.5rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  /*
  * Created with https://www.css-gradient.com
  * Gradient link: https://www.css-gradient.com/?c1=f7cdb9&c2=ea8e72&gt=l&gd=dtl
  */
  background: #F7CDB9;
  background: linear-gradient(135deg, #F7CDB9, #EA8E72);
`


Card.propTypes = {
  name:PropTypes.string,
  description:PropTypes.string,
  style:PropTypes.object,
  icon:PropTypes.node,
};
function Card({name,description,style,icon}) {
  let IconName=icon;
  return (
    <StyledCard>
      {/* <Image src="/vite.svg"/> */}
      <Icon {...style}>
        <IconName/>
      </Icon>
      <span>{name}</span>
      <p>{description}</p>
      <NavLink to={`/product/${name}`}>
        <Button>Shop Now</Button>
      </NavLink>
    </StyledCard>
  )
}

export default Card
