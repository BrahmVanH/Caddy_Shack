user 
  _id
  username
  email
  password
  gender
  gender of interest
  bio
  [saidYesTo]

message
  messageSender
  messageReceiver 
  messageBody
  dateCreated


  Queries
    allUsers
    allSaidYesTo
    allMaleUsers
    allFemaleUsers
    
    
  Mutations
    addLikedUser
    RemoveLikedUser



  firstName: userFormData.firstName,
				lastName: userFormData.lastName,
				username: userFormData.username,
				password: userFormData.password,
				age: userAge,
				gender: userFormData.gender,
				genderInterest: userFormData.genderInterest,
				bio: userFormData.bio,


Messages Notes:
  option to send message only after both like each other?
  send message if you like someone?
  add likeMe
  change likedUsers to iLike

Models:
  User:
    add prototype to find matches (compared likedUsers to likedMe)

<!-- typeDefs:
  type User
    iLike: [User]
    likeMe: [User] -->
  
  <!-- type Query  
    allMatches(userId: ID!): User -->
  
  <!-- allMatches: async (parent, { userId }) => {
    const user = await User.find({ _id: userId });
    const matches = user.getMatches();

    return matches 

  } -->

  addLiked user => add functionality to add you to other users array