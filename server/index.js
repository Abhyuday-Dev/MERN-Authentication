require('dotenv').config(); 

const express = require('express');
const app = express();
const connectDB = require('./database/db');
const userRoutes =require('./routes/users')

// Connect to MongoDB
connectDB();

//middlewares
app.use(express.json());

app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next();
})

// Your other backend application setup and routes go here
//routes
app.use('/api/user',userRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
