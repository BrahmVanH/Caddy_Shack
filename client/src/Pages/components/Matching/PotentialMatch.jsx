import gopher from "../../assets/img/gopher.png";
import "../Matching/potential.css";
import { Link } from "react-router-dom";
import Auth from "../../../utils/auth"


const GET_INTEREST = gql`
  query
    possibleMatches {
      username
      bio
    }
`;

function PotentialMatch() {
  console.log(Auth.getProfile().data._id)
  const { loading, error, data } = useQuery(GET_INTEREST, {
    variables: { userId: Auth.getProfile().data._id}
  });

  if (loading) {
    return <div>Loading Your Matches!</div>;
  }

  if (error) {
    return <div>There was an error loading your matches: {error.message}</div>;
  }


function PotentialMatch() {
  return (

    
<div className="matchCards">
{data.possibleMatches.map((match) => (
  <div key={match.username} className="myCard">
    <div className="card" style={{width:"25rem"}}>
      <img src={gopher} className="card-img-top" alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">{match.username}</h5>
        <p className="card-text">{match.bio}</p>
        <Link to="/">
              <span href="/" className="btn btn-success myBtn">
                Yes
              </span>
        </Link>
            <span href="/" className="btn btn-danger myBtn">

              No
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotentialMatch;
