const mongoose = require('mongoose')

 const connectDB = async () => {
   const response = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true 
    })
    
   console.log("MongoDB Connected: "+response.connection.host)

}

module.exports = connectDB