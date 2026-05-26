
import { Link } from "react-router-dom";
import Logo from "../logo";
import Menu from "../menu";
import styled from 'styled-components';

// styles
const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    padding: 0 2rem;
`
// styles
function Header(){
    return(
        <HeaderContainer>
        <Link to="/">
        <Logo />
        </Link>
        <Menu />
      </HeaderContainer>
    )
}
export default Header;