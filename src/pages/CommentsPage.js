import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,PostContainer } from '../style'
import { Card } from '../components/Card/Card'
import { useRequestData } from "../Hooks/useRequestData";


const  CommentsPage = () => {
  const [postagens,isLoading,error] = useRequestData(`${BASE_URL}comments`,[])
  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>
      {isLoading && <h1>Carregando...</h1>}
      {error && <h1>Ocorreu algum erro.</h1>}
      {!isLoading && postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default CommentsPage;



