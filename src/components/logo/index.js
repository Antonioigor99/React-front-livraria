import logo from '../../imgs/logo.svg'
import styled from 'styled-components';

// styles
const LogoContainer = styled.image`
  display: flex;
  align-items: center;
  font-size: 30px;
`

const LogoImgContainer = styled.img`
  margin-right: 10px;
`
// styles
function Logo() {
  return (
    <LogoContainer>
      <LogoImgContainer src={logo} alt="Logo"/>
      <p>
        <strong>Alura </strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;