import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import Navbar from './Navbar'

import Profile from './Profile'

class App extends Component {
  constructor(){
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "ae030cca50a42d7d37fe",
        cliente_secret: "354b04833091e243b4980c4772dc3e07e55a9e80",
        count: 0,
        sort: "created: asc"
    },
    user: [],
    repos: []
    }
  }
  getUser = (e) => {
    const user = e.target.value;
    const {url, client_id, cliente_secret, count, sort } = this.state.github;
    axios
          .get(`${url}/${user}?client_id=${client_id}&client_secret=${cliente_secret}`
          )
          .then(({ data }) => this.setState({ user: data}));


  }
  render(){
    const { user } = this.state;
    
    return  (
    <div className="App">
     <Navbar/>
     <div className="container">
       <div className="card card-body">
         <h1>Pesquisar Usuário do GitHub!</h1>
         <p className="lead">Digite um nome para encontrar usuário ou repositorio</p>
         <input onChange={this.getUser} id="search" type="text" className="form-control" required></input>
       </div>
       { user.length !== 0 ? <Profile user={user}/> : null}
     </div>
    </div>
  );
}
}
export default App;
