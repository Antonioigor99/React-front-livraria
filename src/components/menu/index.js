import OpcaoHeader from "../opcoesHEader/index.js";
import IconesHeader from "../iconesHeader/index.js";
import styled from "styled-components";

// styles
const MenuContainer = styled.menu`
  display: flex;
`
// styles
function Menu() {
  return (
    <MenuContainer>
      <OpcaoHeader />
      <IconesHeader />
    </MenuContainer>
  );
}

export default Menu;
