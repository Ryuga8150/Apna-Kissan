import styled from "styled-components";

const Image = styled.div`
  & img {
    width: 16rem;
    height: 6.4rem;
  }
`;
function Logo() {
  return (
    <Image>
      {/* <img src="/vite.svg" alt="company logo" /> */}
      Logo
    </Image>
  );
}

export default Logo;