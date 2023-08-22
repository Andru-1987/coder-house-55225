const faker = require('faker');
const userModel = require('../models/user.model')
const mongoose = require('mongoose')
const { MONGO_URL } = require('../config/config.passwords.js')


function generateUsersRecord(count) {
  const users = [];

  for (let i = 0; i < count; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const email = faker.internet.email(firstname, lastname);
    const gender = faker.random.arrayElement(['Male', 'Female']);
    const role = faker.random.arrayElement(['Admin', 'Customer']);

    users.push({ firstname, lastname, email, gender, role });
  }

  return users;
}

const numberOfUsers = 5000;
const usersRecords = generateUsersRecord(numberOfUsers);

// console.log(usersRecords)

async function main() {
  await mongoose.connect(MONGO_URL)
  // const result = await userModel.insertMany(usersRecords)

  const result = await userModel.find({ lastname: "Doe" }).explain("executionStats")

  console.log(result)

  await mongoose.disconnect()
}

main()