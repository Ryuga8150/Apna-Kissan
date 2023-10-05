import PropTypes from "prop-types";
import styled from "styled-components";


const StyledButton=styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  gap:0.6rem;

  text-transform: uppercase;
  padding: 0.8rem 1.6rem;
  font-family: inherit;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: #fff;
  
`;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

function Button({ children, onClick}) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;