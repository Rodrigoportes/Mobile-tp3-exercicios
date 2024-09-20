import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Card from './Card'; 
import Button from './Button';
import CardModule from './CardModule'; 
import TextoEstilizado from './TextoEstilizado';


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Card>
        <h2>Confira Já as ofertas!</h2>
        <p>Um mundo de preços baixos, não perca essa oportunidade, tudo que você precisa para seu aquário está aqui!</p>
        <Button text="AquaMar" />
      </Card>
      <CardModule /> 
      <Footer />
      <TextoEstilizado />
    </div>
  );
}

export default App;
