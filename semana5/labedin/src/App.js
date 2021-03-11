import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import avatar from './img/avatar.png'
import iconEmail from './icons/email-send.png'
import iconLocation from './icons/location.png'

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
        <CardPequeno img={iconEmail} texto="test@gmail.com"/>
        <CardPequeno img={iconLocation} texto="Rua test, text n:1000 PB"/>
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
        <h2>Stacks</h2>
        <div>
          <CardPequeno img='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/96-html5-512.png' texto="HTML5"/>
          <CardPequeno img='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png' texto="CSS3"/>
          <CardPequeno img='https://banner2.cleanpng.com/20180411/cvq/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd54ac19f7.4484983215234327887049.jpg' texto="JAVASCRIPT"/>
          <CardPequeno img='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' texto="REACT.JS"/>
        </div>
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
    </div>
  );
}

export default App;
