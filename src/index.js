import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Axios from 'axios';
import Formulario from './formulario'


class Relogio extends Component{
  constructor(props){
    super(props)
    this.state = {contador : 0}
  }
  relogin(){
    this.time = setInterval(() => this.setState({ contador : this.state.contador += 1}), 1000);
  }
  pararRelogin(){
    //npm install axios
   Axios.get('http://vps.depositcode.net:8080/todos').then(retorno => {
     //retorno do que vem, data
   })
    clearInterval(this.time)
  }
  componentDidMount(){ // executa
    this.relogin();
  }
  componentDidUpdate(){ // updates
   
  }

  componentDidUnmount(){ // finalizar

  }

  render(){
    return <>
    <button onClick={this.pararRelogin.bind(this)}>Parar</button>
            <p>Contador : {this.state.contador}</p>
          </>
  }
}

ReactDOM.render(
    <Relogio />,
  document.getElementById('root')
);

