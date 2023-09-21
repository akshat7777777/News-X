import mongoose from "mongoose";
const Connection = async (username,password) => {
    try {
      const DB_URL=`mongodb+srv://akshatkr11:newsxdatabase@news-x.ha5nz6l.mongodb.net/News-X`;
      await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
      });
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Error while connecting to the database:', error);
    }
  };
  
  export default Connection;
  