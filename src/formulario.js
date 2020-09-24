import React, { Component } from 'react';

export default class Formulario extends Component{

    constructor(props){
        super(props)

        this.state = {nome : "SEM NOME", sobrenome : "sem"}
    }

    handleFormulario = evento =>{
        evento.preventDefault();
        console.log(`${this.state.nome} ${this.state.sobrenome}`)
    }

    handleChanges = evento => {
      
        this.state[evento.target.name] = evento.target.value;
        this.setState(this.state)
    }

    render(){
        return (
            <form onSubmit={this.handleFormulario}>
            <div class="form-group">
                <label for="exampleInputEmail1">Seu nome</label>
                <input type="text" name="nome" class="form-control" onChange={this.handleChanges}/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Sobrenome</label>
                <input type="text" name="sobrenome" class="form-control" onChange={this.handleChanges}/>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        )
    }
}
