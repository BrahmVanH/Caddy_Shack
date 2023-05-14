// import gopher from "../../assets/img/gopher.png";
// import "../Matching/potential.css";
// import { Link } from "react-router-dom";
// // import Auth from "../../../utils/auth"
// import { gql, useQuery } from '@apollo/client';



// const GET_INTEREST = gql`
//   query
//     possibleMatches {
//       username
//       bio
//     }
// `;

// function PotentialMatch() {
//   console.log(Auth.getProfile().data._id)
//   const { loading, error, data } = useQuery(GET_INTEREST, {
//     variables: { userId: Auth.getProfile().data._id}
//   });

//   if (loading) {
//     return <div>Loading Your Matches!</div>;
//   }

//   if (error) {
//     return <div>There was an error loading your matches: {error.message}</div>;
//   }
// // Need to add buttons to like or swipe user

// return (
//     <div>
//       <div className="myCard">
//         <div className="card" style={{ width: "18rem" }}>
//           <img src={gopher} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">User Name</h5>
//             <p className="card-text">User's Bio</p>
           
//               <span className="btn btn-success myBtn">
//                 YES
//               </span>
            

//             <span className="btn btn-danger myBtn">
//               No
//             </span>
            

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PotentialMatch;
