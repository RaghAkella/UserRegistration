Two APIs

1 users/register

Request parameters 

 {
"firstname":"raghu",
"lastname":"akella",
"username":"raghuakell1a",
"email":"test@email.com",
"password":"TestDB"
}

Response parameters :

{
  "message": "A verification mail has been sent to yourregistered mail."
}

2. users/login

  Request parameters

  {
    "email":"test@email.com",
    "password":"TestDB"
  }

  Response parameters
   
   {
  "user": {
    "id": "5c6cd9ff282d56334dca02e5",
    "firstname": "raghu",
    "lastname": "akella",
    "email": "test@email.com",
    "username": "raghuakell1a"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YzZjZDlmZjI4MmQ1NjMzNGRjYTAyZTUiLCJpYXQiOjE1NTA2Mzc4NDZ9.viUEmowo1ZiEkML2C-UP7u6wuGzKypUvZp0zLH5enaA"
}