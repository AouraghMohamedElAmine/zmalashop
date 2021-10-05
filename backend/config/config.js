import  mongoose  from "mongoose";
const connectDb = async () =>{ 
 
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology : true, 
            useNewUrlParser : true , 
         })
        console.log('mongodb Connected '+connect.connection.host)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}
export default connectDb