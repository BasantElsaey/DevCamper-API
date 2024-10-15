const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// load env vars
dotenv.config({path : './config/config.env'})

// load models
const Bootcamp = require('./models/Bootcamp')
const Course = require('./models/Course')
const User = require('./models/User')
const Review = require('./models/Review')


// connect to DB

    const connectToMongoDB = async () => {
        try {
          await mongoose.connect(process.env.MONGO_URI, {
          });
          console.log(`Connected to MongoDB database : ${mongoose.connection.host}`.yellow.underline.bold);
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
        }
    }
    connectToMongoDB();


// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/data/bootcamps.json`,'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${__dirname}/data/courses.json`,'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`,'utf-8'));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/data/reviews.json`,'utf-8'));


// Import into DB 
const importData = async () =>{
    try{
        await Bootcamp.create(bootcamps)
        await Course.create(courses)
        await User.create(users)
        await Review.create(reviews)

        console.log('Data Imported...'.green.inverse);
        process.exit();
    }catch(err){
        console.error(err);
    }
}


// Delete Data 
const deleteData = async () =>{
    try{
        await Bootcamp.deleteMany();
        await Course.deleteMany();
        await User.deleteMany();
        await Review.deleteMany();

        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    }catch(err){
        console.error(err);
    }
}

// process.argv[2] === '-i' to import , '-d' to delete 
// --> node seeder -i / node seeder -d

if(process.argv[2] === '-i'){
    importData()
}else if(process.argv[2] === '-d'){
    deleteData()
}

