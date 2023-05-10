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