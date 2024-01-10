const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const path=require("path");
const app = express();

app.use(cors(
  {
    origin:["https://clone-netflix-lac-seven.vercel.app"],
    method:["POST","GET"],
    credentials:true;
  }
));
app.use(express.json());

const PORT =process.env.PORT || 5000;
mongoose
  .connect("mongodb://0.0.0.0:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);


app.use(express.static(path.join(__dirname,"./client/build")));
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
