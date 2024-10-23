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