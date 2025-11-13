import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { JwtPayload } from "jsonwebtoken";


const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws,request) {
 const url = request.url;//ws
 if(!url){
  return;
 } 
  const queryParams = new URLSearchParams(url.split('?')[1] );
  const token = queryParams.get("token") ||""; 

  const decoded = jwt.verify(token, JWT_SECRET);
   if(!decoded || !(decoded as JwtPayload).userId){
    ws.close();
    return;
   }

  
  ws.on("message", function message(data) {
    ws.send("pong");
  });
});
 


// whenever a user is connecting , get the url , query paramters and the  token query parameter , deciode that token , make sure if the token is valid or not , if valid allow the connection else close the connection.. 