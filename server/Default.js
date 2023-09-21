import News from './models/new-schema.js';
import data from './constants/data.js';
const DefaultData= async ()=>{
    try{
     await News.insertMany(data);
     console.log("data exported successfullly");
    }
    catch(error)
    {
        console.log(error);
    }
}

export default DefaultData;