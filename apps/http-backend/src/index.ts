import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SignInSchema, CreateRoomSchema } from "@repo/common/types";

 const app = express();

 app.post("/signup", (req, res) => {
  //dbb call
  const data = CreateUserSchema.safeParse(req.body);
 if(!data.success){
    return res.status(400).json({message: "Invalid data"});
 }
  res.json ({ 
    userId: 1,
    message: "User signed up successfully" });


 });

app.post("/signin", (req, res) => {

  const userId = 1;
  try {
    const token = jwt.sign({ userId }, JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).send("Error generating token");
  }
});


 app.post("/room",middleware,  (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if(!data.success) {
    res.json({
      message: "Incorrect inputs"
    })
    return;
  }
  res.json ({
    roomId: 1,
    name: "Conference Room",
    
  })


 });
 
 app.listen(3000, () => { 
    console.log("HTTP backend is running on http://localhost:3000");
 });    

