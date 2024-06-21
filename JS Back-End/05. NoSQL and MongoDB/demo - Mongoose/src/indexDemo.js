const mongoose = require('mongoose');
const { Person } = require('./models/Person');
 
async function start() {
  const connectionString = 'mongodb://localhost:27017/testdb2';

  await mongoose.connect(connectionString);

  console.log('Database connected');

  // const myPerson = new Person({
  //   name: 'Stoyan',
  //   age: 52,
  //   hobbies: ['Hand knitting'],
  //   contacts: {
  //     tel: '+359 0895 303235',
  //     email: 'maria@abv.bg',
  //     address: {
  //       city: 'Sofia',
  //       street: 'Pirotska',
  //       streetNumber: 20
  //     }
  //   }
  // });

  // await myPerson.save();

  const myPerson = await Person.findOne({ firstName: 'Marina' });
  // myPerson.name = 'Marina';
  // await myPerson.save();
  console.log(myPerson.sayHello());
  console.log(myPerson.fullName);

  myPerson.fullName = 'Marina Delcheva';
  await myPerson.save();
  console.log(myPerson.fullName);

  // const personStoyan = await Person.findOne({ name: 'Stoyan' });
  // personStoyan.contacts.tel = '+359 0887 102030';
  // personStoyan.contacts.email = 'stoyan@abv.bg';
  // await personStoyan.save();

  const people = await Person.find({});

  console.log(people);

  // // можем директно да променяме обекта, който сме получили от базата, но трябва да го сейвнем
  // people[0].hobbies.push('hiking');
  // await people[0].save();

  // console.log(people);

  mongoose.disconnect;
}

start();
