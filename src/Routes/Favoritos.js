/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { useEffect, useState } from "react";
import { deleteFavoritos, getFavoritos } from "../services/favoritos";
import imagem1 from "../imgs/livro.png";
// styles
const AppContainer = styled.section`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;
const FavoritosContainer = styled.div`
  text-align: center;
  width:300px;
  font-weight: 700;
  color: white;
  cursor:pointer;
  &:hover {
       border: 1px solid white;
   }
`;
const TituloFavoritos = styled.h2`
  color: white;
  text-align: center;
`;
// styles
function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos();
    return setFavoritos(favoritosDaApi);
  }
  async function deletaFavorito(id) {
    await deleteFavoritos(id);
    await fetchFavoritos();
  }
  useEffect(() => {
    fetchFavoritos();
  }, []);
  return (
    <div>
      <TituloFavoritos>Aqui temos os seus favoritos</TituloFavoritos>
      <AppContainer>
        {favoritos.map((favorito) => (
          <FavoritosContainer onClick={()=>deletaFavorito(favorito.id)}>
            <p>{favorito.nome}</p>
            <img src={imagem1} />
          </FavoritosContainer>
        ))}
      </AppContainer>
    </div>
  );
}
export default Favoritos;
