import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <StyledImg></StyledImg>
      <Title>Headline</Title>
      <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
        <BoxButton>
            <Button1>See more</Button1>
            <Button2>Save</Button2>
        </BoxButton>

    </div>
  );
}

export default App;

const Card = styled.div`

`

const Container = styled.div`

`

const StyledImg = styled.img`

`

const Title = styled.h1`

`

const Text = styled.p `

`

const BoxButton = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Button1 = styled.button `
    border: none;
    background-color: #4E71FE;
    width: 86px;
    height: 30px;
    border-radius: 5px;
    padding: 4px 20px 6px 20px;
    color: white;
    font-size: 10px;
`

const Button2 = styled(Button1) `
    border: 2px solid #4E71FE;
    background-color: white;
    color: #4E71FE;
`