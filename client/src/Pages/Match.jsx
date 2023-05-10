import React from "react";
import { useQuery, gql } from "@apollo/client";
import gopher from "./assets/img/gopher.png";
import "./assets/css/match.css";

const GET_MATCHES = gql`
  query {
    allMatches {
      username
      bio
    }
  }
`;

function Match() {
  const { loading, error, data } = useQuery(GET_MATCHES);

  if (loading) {
    return <div>Loading Your Matchs!</div>;
  }

  if (error) {
    return <div>There was an error loading your matches: {error.message}</div>;
  }

  

  return (
    <div>
      {data.allMatches.map((match) => (
        <div key={match.username} className="myCard">
          <div className="card" style={{width:"18:rem"}}>
            <img src={gopher} className="card-img-top" alt="placeholder" />
            <div className="card-body">
              <h5 className="card-title">{match.username}</h5>
              <p className="card-text">{match.bio}</p>
              <a href="/message" className="btn btn-primary">
                Message User
              </a>
            </div>
          </div>
        </div>
      ) )}
    </div>
  );
}

export default Match;
