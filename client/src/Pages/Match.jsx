import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { ALL_MATCHES, GET_ME } from '../utils/queries';

import Auth from '../utils/auth';

import gopher from "./assets/img/gopher.png";
import "./assets/css/match.css";

function Match() {

  const [allMatches, setAllMatches] = useState(null);
     
    const { data } = useQuery(ALL_MATCHES, {
      variables: { userId: Auth.getProfile().data._id },
    });

    const allMatchIds = data.matchIds;
    
  
    useEffect(() => {
      getMatches(allMatchIds);
    }, allMatchIds);
  

  const getMatches = (createMatches) => {
    for (const id of allMatchIds) {
      const { data } = useQuery(GET_ME, {
        variables: { userId: id },
      });
      const matchedUserData = data.user._id;
      setAllMatches({ ...allMatches, matchedUserData});
    }
  };

  
  
   
  
  // if (loading) {
  //   return <div>Loading Your Matches!</div>;
  // }

  // if (error) {
  //   return <div>There was an error loading your matches: {error.message}</div>;
  // }

  

  return (
    <div className="matchCards">
      {data.allMatches.map((match) => (
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
