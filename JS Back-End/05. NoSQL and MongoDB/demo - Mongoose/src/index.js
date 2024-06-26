const mongoose = require('mongoose');
const { Person } = require('./models/Person');
 
async function start() {
  const connectionString = 'mongodb://localhost:27017/testdb2';
  await mongoose.connect(connectionString);
  console.log('Database connected');

  // Another way to create
  await Person.create({
    firstName: 'Ivan',
    lastName: 'Georgiev',
    age: 29,
    height: 172,
    hobbies: ['Hiking', 'Reading'],
    contacts: {
      tel: '+359 0898 123455',
      address: {
        city: 'Sofia',
        street: 'Polsko tcvete',
        streetNumber: 16
      }
    }
  });

  
  const people = await Person.find({});
  console.log(people);

  mongoose.disconnect();
}

start();
