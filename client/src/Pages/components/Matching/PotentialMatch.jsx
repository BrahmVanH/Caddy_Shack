import React from "react";
import { useQuery, gql } from "@apollo/client";
import gopher from "../../assets/img/gopher.png";
import "../Matching/potential.css";
import { Link } from "react-router-dom";

const GET_INTEREST = gql`
  query($genderInterest: STRING!) {
    allUsers(gender: $genderInterest) {
      username
      bio
    }
  }
`;

function PotentialMatch({ genderInterest }) {
  const { loading, error, data } = useQuery(GET_INTEREST, {variables: {genderInterest}});

  if (loading) {
    return <div>Loading Your Matchs!</div>;
  }

  if (error) {
    return <div>There was an error loading your matches: {error.message}</div>;
  }

  return (
    
<div className="matchCards">
{data.allWomen.map((match) => (
  <div key={match.username} className="myCard">
    <div className="card" style={{width:"25rem"}}>
      <img src={gopher} className="card-img-top" alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">{match.username}</h5>
        <p className="card-text">{match.bio}</p>
        <Link to="/">
              <span href="/" className="btn btn-success myBtn">
                YES
              </span>
        </Link>
            <span href="/" className="btn btn-danger myBtn">
              No
            </span>
      </div>
    </div>
  </div>
) )}
</div>
  );
}

export default PotentialMatch;
