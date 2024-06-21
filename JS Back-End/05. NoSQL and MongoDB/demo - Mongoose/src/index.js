const mongoose = require('mongoose');
const { Person } = require('./models/Person');
 
async function start() {
  const connectionString = 'mongodb://localhost:27017/testdb2';

  await mongoose.connect(connectionString);

  console.log('Database connected');

  const myPerson = await Person.findOne({ firstName: 'Marina' });
  console.log(myPerson.sayHello());
  console.log(myPerson.fullName);
 
  myPerson.firstName = 'P';
  myPerson.age = -1;

  const newPerson = new Person({
    firstName: 'D',
    lastName: 'PeshevsPesheva',
    
    height: 35,
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

  try {
    await newPerson.save();
    await myPerson.save();
  } catch(err) {
    for (const path in err.errors) {
      console.log(err.errors[path].properties);
    }
  }

  const people = await Person.find({});

  // console.log(people);

  mongoose.disconnect();
}

start();
