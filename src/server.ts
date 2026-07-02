import app from "./app";
import { connectDatabase } from "./config/db.config";

const PORT = 8081;
const DB_URI = "mongodb://localhost:27017/team_14_db";

//connect database
connectDatabase(DB_URI);


//listen
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});