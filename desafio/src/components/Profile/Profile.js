import React from "react";

const Profile = ({ user }) => (
  <div className="row">
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={user.avatar_url} />

        <ul className="list-group list-group-flush">
          <div className="span-repo">
            <li className="list-group-item">
              Repositorios:
              <span className="badge badge-success">{user.public_repos}</span>
            </li>
            <li className="list-group-item">
              Seguidores:
              <span className="badge badge-primary">{user.followers}</span>
            </li>
            <li className="list-group-item">
              Seguindo:
              <span className="badge badge-info">{user.following}</span>
            </li>
          </div>
        </ul>
        <div className="card-body">
          <a
            href={user.html_url}
            target="_blank"
            className="btn btn-info btn-block"
          >
            Ver Perfil
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
