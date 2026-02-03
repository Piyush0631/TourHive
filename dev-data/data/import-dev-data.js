const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('./../../models/tourModel');
dotenv.config({ path: './config.env' });

const DB = process.env.database.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successfull');
  });
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);
// importing data into database
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
// delete all data from collection
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
