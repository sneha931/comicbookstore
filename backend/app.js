const express=require('express')
const connectDB=require('./config/db');
const comicRoutes=require('./routes/comicRoutes');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();
const app=express();

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api',comicRoutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})