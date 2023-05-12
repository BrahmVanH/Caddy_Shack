import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { ALL_MATCHES } from '../utils/queries';

import Auth from '../utils/auth';

import gopher from "./assets/img/gopher.png";
import "./assets/css/match.css";

function Match() {

  const [allMatches, setAllMatches] = useState([{}]);

  const { loading, data } =  useQuery(ALL_MATCHES, {
    variables: { userId: Auth.getProfile().data._id }
  });
  
  useEffect(() => {
    if (data && data.allMatches) {
    setAllMatches(data.allMatches);
    }
  }, [data])
    

  if (loading) {
    return <div>Loading Your Matches!</div>;
  }

  

  

  return (
    <div className="matchCards">
      {allMatches.map((match) => (
        <div key={match.username} className="myCard">
          <div className="card" style={{width:"25rem"}}>
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
