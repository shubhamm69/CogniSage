import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
mongoose.connect('mongodb+srv://kanu0311:kanu0311@cognisage.2lw0j1q.mongodb.net/user-database?retryWrites=true&w=majority&appName=cogniSage').then(
    ()=>{
        console.log("connected to mongodb");
    }
).catch((err)=>{
    console.log("not connected");
})
const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log('server listening on port 3000')
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
