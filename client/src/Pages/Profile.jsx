import { useQuery, gql } from "@apollo/client";
import gopher from "./assets/img/gopher.png";
import "./assets/css/profile.css";
import { Link } from "react-router-dom";
import Auth from "../utils/auth"


const GET_USER = gql` 
query GetUser($userId: ID!) {
  getUser(userId: $userId) {
    _id
    username
    bio
    age
    gender
    genderInterest
  }
}`



function Profile() {
  const {loading, error, data} = useQuery(GET_USER, {
    variables: { userId: Auth.getProfile().data._id}
  });

  if (loading) {
    return <div>Loading Your Profile!</div>;
  }

  if (error) {
    return <div>There was an error loading your profile: {error.message}</div>;
  }
  const { username, bio, age, gender, genderInterest } = data.getUser;
  

  return (

    
    <div>
      <div className="card profileCard">
        <img src={gopher} className="card-img-top" alt="placeholder" />
        <div className="card-body">
          <h5 className="card-title">{username} </h5>
          <p className="card-text">{bio} </p>
          <Link to="/matching" className="btn btn-primary myBtn">
            Find a Partner
          </Link>
          <Link to="/match" className="btn btn-primary myBtn">
            See Your Matches
          </Link>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Age: {age} </li>
          <li className="list-group-item">Gender: {gender} </li>
          <li className="list-group-item">Gender Interested In: {genderInterest}</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;