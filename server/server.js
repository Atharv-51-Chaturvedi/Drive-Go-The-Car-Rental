import express from "express";
import "dotenv/config";
import cors from "cors";
// const mongoose = require("mongoose")
import mongoose from "mongoose";
import dns from 'node:dns'
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";



dns.setServers(['8.8.8.8','1.1.1.1'])

const app = express()
const uri = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>
    res.send("Server started!")
)

app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)


app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
  mongoose.connect(uri);
  console.log("DB CONNECTED");
});

// app.listen(PORT, ()=>console.log(`Server runnig on port ${PORT}`))