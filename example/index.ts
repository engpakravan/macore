import App from "../src/components/app";
import {NextFunction, Request, Response} from "express";
import {Request_Methods} from "../src/types/interfaces";
import User from './model'

const app = new App(3000 , "localhost" , null , null , null , true)

app.route("/" , Request_Methods.GET , async (req:Request , res:Response , next:NextFunction) => {
    const users = await User.find({})
    console.log(users)
    res.send("Hi")
})

app.route("/new" , Request_Methods.GET , async (req:Request , res:Response , next:NextFunction) => {
    console.log(await User.create({
        name :"Ali" ,
        lastName : "pakravan" ,
        phoneNumber : "123"
    }))

    res.send("Ok")
})

app.listen()