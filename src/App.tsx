import React from 'react';
import './App.css';
import styled from "styled-components";
import {CardStyled} from "./components/Card.styled";
import {ContainerStyled} from "./components/Container.styled";
import {ImgStyleStyled} from "./components/ImgStyle.styled";
import {Title} from "./components/Title.styled";
import {Text} from "./components/Text.styled"
import {Button1} from "./components/Button1.styled";
import {Button2} from "./components/Button2.styled";
import {TextButton1} from "./components/TextButton1.styled";
import {TextButton2} from "./components/TextButton2.styled";

function App() {
  return (
    <div className="App">
        <CardStyled>
            <ContainerStyled>
                <ImgStyleStyled></ImgStyleStyled>
                <Title>Headline</Title>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <Button1>
                    <TextButton1>See more</TextButton1>
                </Button1>
                <Button2>
                    <TextButton2>Save</TextButton2>
                </Button2>
                {/*<BoxButton>*/}
                {/*    <Button1>See more</Button1>*/}
                {/*    <Button2>Save</Button2>*/}
                {/*</BoxButton>*/}
            </ContainerStyled>
        </CardStyled>


    </div>
  );
}

export default App;

// const BoxButton = styled.div `
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 20px;
// `

// const Button1 = styled.button `
//     border: none;
//     background-color: #4E71FE;
//     width: 86px;
//     height: 30px;
//     border-radius: 5px;
//     padding: 4px 20px 6px 20px;
//     color: white;
//     font-size: 10px;
// `
//
// const Button2 = styled(Button1) `
//     border: 2px solid #4E71FE;
//     background-color: white;
//     color: #4E71FE;
// `