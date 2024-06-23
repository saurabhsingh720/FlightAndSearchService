- create repository
- for creating microservices
  - create a folder flightandsearch
- in the folder flightsandserach do "npm init"
- then "npm i express"
- then "npm i body-parser"
- then "npm i nodemon"

-----folder structure---------------
- src/
   index.js/
   models/
   controllers/
   middlewares/
   services/
   utiils/
   config/
   repository/
- tests/


- creating .gitignore file inside flightsandsearch
- adding node_modules/ in the gitignore
- set the path to the flightsandserach folder
- do "git init"
- do "git status"
- do " git add ."
- do "git commit -m "first commit to setup the project""
- created a repository in github
- do "git branch -M main" 
- do "git remote add origin https://github.com/saurabhsingh720/FlightAndSearchService.git"
- do "git push -u origin main"
- then all the folders is pushed to that repo in github


- install "npm i dotenv" in the root directory for making the key secure in a file
- create a file named with ".env" in the root directory
- for getting access to the file use
"require('dotenv').config()" inside the root directory js file
- for accessing the env variable use "process.env.nameofvar"   example  process.env.PORT

----install inside flightsandserach folder path
- install "npm i mysql2"
- install "npm i sequelize"
- install "npm i sequelize-cli"


- for setting up databases 
- do "npx sequelize init" in the flightsandserach folder path


- now some files get created
- add all files inside src folder
- go to config.json file and add password of databases and name of database
- then do "npx sequelize db:create" in the src path folder
- now databases get created

