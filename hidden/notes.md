## General outline

# Server Side

# user

    _id
    username
    email
    password
    gender
    gender of interest
    bio
    [saidYesTo]

# message

    messageSender
    messageReceiver
    messageBody
    dateCreated

# Queries

    allUsers
    allSaidYesTo
    allMaleUsers
    allFemaleUsers



# Mutations

    addLikedUser
    RemoveLikedUser
    createUser
    loginUser

# Client Side

# Queries

    GET_USERS
      allUsers()
    GET_ALL_MEN
      allMen()
    GET_ALL_WOMEN
      allWomen()

# Mutations

    CREATE_USER
      createUser()
    LOGIN_USER
      loginUser()
    ADD_LIKED_USER
      addLikedUser()
    REMOVE_LIKED_USER
      removeLikedUser()
