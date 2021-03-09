import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import avatar from './img/avatar.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={avatar}
          nome="Isaac" 
          descricao="Olá, eu sou o Isaac. Apaixonado por tecnologia e todo o ecossistema que a envolve, principalmente suas comunidades. Como curioso que sou, adoro passar horas tentando entender o que existe por debaixo do 'capô'. Auxilando nessa jornada atualmente estou cursando Ciẽncia da Computação e Web Full-Stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências Pessoais</h2>
        <CardGrande 
          imagem="https://www.futebolnaveia.com.br/wp-content/uploads/2021/02/blackjackonline-672x378.jpg" 
          nome="BlackJack" 
          descricao="Foi desenvolvido um versão simplifica do famoso jogo de cartas 21"
        />
        
        <CardGrande 
          imagem="https://github.com/Jose-Isaac/generator-rgb/raw/master/assets/generator-rgb.png" 
          nome="Gerador de cores RGB" 
          descricao="Nessa aplicação o usuário consegue gerar um cor de forma visual e o programa exibe instantaneamente o valor rgb referente a cor gerada." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png" 
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1615306630~hmac=7220d6ac252ca107b92e19e823681403" 
          texto="Linkedin" 
        />        
      </div>
      <div className="page-section-container">
        <h2>Endereços</h2>
        <CardPequeno texto="test@gmail.com"/>
        <CardPequeno texto="Rua test, text n:1000 PB"/>
      </div>
    </div>
  );
}

export default App;
