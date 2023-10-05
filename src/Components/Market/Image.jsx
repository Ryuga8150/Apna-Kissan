import PropTypes from 'prop-types';
import styled from "styled-components"

const StyledImage=styled.div`
  padding: 0.8rem;
  background-color: red;
  border-radius: 50%;
  width:12.8rem;
  height: 12.8rem;
  margin-bottom: 1.2rem;
  & img{
    width:100%;
    height:100%;
    border-radius: 50%;
  }
`


Image.propTypes = {
 src:PropTypes.string,
};
function Image({src}) {
  return (
    <StyledImage>
      <img src={src} alt="item"/>
    </StyledImage>
  )
}

export default Image
