import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,NameContainer } from '../style'
import { Card } from '../components/Card/Card'
import { useRequestData } from "../Hooks/useRequestData";


const UserNamesPage = () => {
  const [nomeUsuarios,isLoading,error] = useRequestData(`${BASE_URL}users`,[])
  return (
    <div>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoading && <h1>Carregando...</h1>}
        {error && <h1>Ocorreu algum erro.</h1>}
        {!isLoading && nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
    </div>
  );
}

export default  UserNamesPage;



