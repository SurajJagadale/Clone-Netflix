import React from 'react'
import background from "../assets/login.jpg"
import styled from 'styled-components'
const BackgroundImage = () => {
  return (
    <Contanier>
      <img src={background} alt="" />
    </Contanier>
  )
}

export default BackgroundImage
const Contanier=styled.div`
    
    img{
        heigth:50vw;
        width:210vh;
    }
`;