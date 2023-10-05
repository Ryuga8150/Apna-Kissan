import styled from "styled-components"

const StyledSlider=styled.section`
  padding: 4.8rem 12.8rem 2.4rem 12.8rem;
`
const Container=styled.div`
  height:24rem;
  width:100%;

  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-0);
  background-image: url(/banner.jpg);
  background-position: center;
  background-size: cover;


`
function Slider() {
  return (
    <StyledSlider>
      <Container></Container>
    </StyledSlider>
  )
}

export default Slider
