import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controllers/user.controller.js';

const router = express.Router()

router.post("/create", createUser)
router.put("/update", updateUser)
router.delete("/delete/:id", deleteUser)
router.get("/get", getUser)

export default router

/**
=======register:=======

Data:{
    name:"",
    email:"",
    password:""
}
email-verify-enter-> otp

res:{
    "data": {
        "id": 8,
        "name": "Rahul123",
        "email": "RahulTaak123@gmail.com",
        "password": "$2b$10$d1IETPFtRnjUH/a7xm3yge8Kk3zIIm5fVwZs48Tz72jpZcEsSPp5i",
        "updatedAt": "2024-10-23T14:04:38.388Z",
        "createdAt": "2024-10-23T14:04:38.388Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJSYWh1bFRhYWsxMjNAZ21haWwuY29tIiwiaWF0IjoxNzI5NjkyMjc4LCJleHAiOjE3Mjk2OTk0Nzh9.JLo7I3GzS-7obikbb_MCbDGNVqKTQgJA7M-KM1pHyrQ"
}

==========login:=======

Data :{
    email:"",
    password:""
}


==========Forget:=======
Data : {
    email:""
}
check otp

data: {newPassword:""}



*/