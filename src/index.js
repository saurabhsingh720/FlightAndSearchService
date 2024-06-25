const express = require("express");
const bodyParser = require("body-parser");
// const {City} = require('./models/index');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

// const CityRepository = require('./repository/city-repository');

const db = require('./models/index');
// const {City, Airport} = require('./models/index');

const setupAndStartServer = async () =>{

     //create the express object
     const app = express();

     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended: true}));
     
     app.use('/api', ApiRoutes);

     app.listen(PORT, async() => {
          console.log(`Server started at ${PORT}`);
          // console.log(process.env);
          // console.log(db.City);
          // await City.create({
          //      name: "New Delhi",
          // })

          // const repo = new CityRepository();
          // repo.createCity({name: "gkp"});
          // repo.deleteCity(1);

          // db.sequelize.sync({alter: true});
          // const city = await City.findOne({
          //      where: {
          //           id: 10
          //      }
          // });
          // const airports = await city.getAirports();
          // console.log(city, airports);

          if(process.env.SYNC_DB) {
               db.sequelize.sync({alter: true});
          }
     });
}

setupAndStartServer();
