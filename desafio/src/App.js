import React, { Component } from 'react';

import './App.css';

import Navbar from './Navbar'

class App extends Component {
  constructor(){
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "ae030cca50a42d7d37fe",
        cliente_secret: "354b04833091e243b4980c4772dc3e07e55a9e80",
        count: 7,
        sort: "created: asc"
    },
    user: [],
    repos: []
    }
  }
  getUser = (e) => {
    console.log("oi")
  }
  render(){
   
    return  (
    <div className="App">
     <Navbar/>
     <div className="container">
       <div className="card card-body">
         <h1>Pesquisar Usuário do GitHub</h1>
         <p className="lead">Digite um nome para encontrar usuário ou repositorio</p>
         <input onChange={this.getUser} id="search" type="text" className="form-control" required></input>
       </div>
     </div>
    </div>
  );
}
}
export default App;
