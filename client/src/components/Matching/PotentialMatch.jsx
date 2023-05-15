
import "../Matching/potential.css";
import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";
import { gql, useQuery } from '@apollo/client';
import TinderCard from 'react-tinder-card';
import { useState } from 'react';



// const GET_INTEREST = gql`
//   query
//     possibleMatches {
//       username
//       bio
//     }
// `;



function PotentialMatch() {

    const characters = [
        {
          name: 'Richard Hendricks',
          url: 'https://i.imgur.com/QsjSMCZ.png',
          gender: "male",
          genderInterest: 'female'
        },
        {
          name: 'Erlich Bachman',
          url: 'https://i.imgur.com/QsjSMCZ.png',
          gender: "male",
          genderInterest: 'female'
        },
        {
          name: 'Monica Hall',
          url: 'https://i.imgur.com/QsjSMCZ.png',
          gender: "female",
          genderInterest: 'male'
        },
        {
          name: 'Jared Dunn',
          url: 'https://i.imgur.com/QsjSMCZ.png',
          gender: "male",
          genderInterest: 'female'
        },
        {
          name: 'Sarah Chugtai',
          url: 'https://i.imgur.com/QsjSMCZ.png',
          gender: "female",
          genderInterest: 'male'
        }
      ]

    const [lastDirection, setLastDirection] = useState()
  
    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }

//   const { loading, error, data } = useQuery(GET_INTEREST
//     , {
//     variables: { userId: Auth.getProfile().data._id}}
//     );

//   if (loading) {
//     return <div>Loading Your Matches!</div>;
//   }

//   if (error) {
//     return <div>There was an error loading your matches: {error.message}</div>;
//   }
// Need to add buttons to like or swipe user

return (
        <div className="swiper-container">
          <div className="tindercard-container">
            {characters.map((character) => {
              if (character.gender === "female") {
                const femaleChar = [];
                femaleChar.push(
                  <TinderCard
                    className="swipe"
                    key={character.name}
                    onSwipe={(dir) => swiped(dir, character.name)}
                    onCardLeftScreen={() => outOfFrame(character.name)}
                  >
                    <div
                      style={{ backgroundImage: "url(" + character.url + ")" }}
                      className="tindercard"
                    >
                      <h3>{character.name}</h3>
                    </div>
                  </TinderCard>
                );
                return femaleChar;
              }
              return null; // Or any alternative fallback value if no conditions are met
            })}
          </div>
          <div className="swipe-info">
            {lastDirection && <p>You swiped {lastDirection}.</p>}
          </div>
        </div>
  );
};

export default PotentialMatch;
