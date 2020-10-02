import React, { Component, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Repo from "./components/Repo/Repo";
import { StyledDefault } from "./assets/styles/Global";

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "ae030cca50a42d7d37fe",
        client_secret: "354b04833091e243b4980c4772dc3e07e55a9e80",
        sort: "created: asc",
      },
      user: [],
      repos: [],
      search: "",
    };
    //const [user, setUser] = useState([]);
    //const [repos, setRepos] = useState([]);
    //const [axiosTimeOut, setAxiosTimeOut] = useState ([null]);
  }

  getUser = (e) => {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;

    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));

    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  };

  renderProfile = () => {
    const { user, repos } = this.state;
    return (
      <div className="row">
        <div className="col-md-4">
          <Profile user={user} />
        </div>
        <div className="col-md-8">
          {repos.map((repo) => (
            <Repo repo={repo} key={repo.name} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { user, repos } = this.state;
    return (
      <StyledDefault>
        <div>
          <Navbar />
          <div className="container">
            <div className="search card card-body mb-3">
              <h1>
                Desafio utilizando api do gitHub para buscar usuario e listar o
                seus repositorios
              </h1>
              <p className="lead">
                Digite um nome para encontrar usuários e repositórios
              </p>
              <input
                onChange={this.getUser}
                className="form-control"
                placeholder="Digite o nome de um usuário..."
                required
              />
            </div>
            {user.length !== 0 ? this.renderProfile() : null}
          </div>
        </div>
      </StyledDefault>
    );
  }
}

export default App;
