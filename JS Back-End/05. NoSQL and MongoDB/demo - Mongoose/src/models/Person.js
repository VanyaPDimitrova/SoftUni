const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
  streetNumber: Number
});

const contactInfoSchema = new mongoose.Schema({
  tel: String,
  email: String,
  address: addressSchema
});

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  hobbies: [String],
  contacts: contactInfoSchema
});

/*
  Adding methods - важно е да не е arrow function, т.к. тя няма собствен контекст, 
  а ние искаме контекста да е текущата инстанция. Т.е. текущия Person.
*/ 
personSchema.methods.sayHello = function() {  
  return `${this.firstName} say: Hello!`
}

/*
  Creating computed(virtual) properties
*/
personSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
}).set(function(value) {
  const [firstName, lastName] = value.split(' ');

  this.firstName = firstName;
  this.lastName = lastName;
})

/* 
  model - фактори функция, като параметри приема име_на_модела и схема.
  Връща референция на модела. Нещо, к. е от тип модел. 
  От този модел могат дасе правят заявки.
*/ 
const Person = mongoose.model('Person', personSchema);

module.exports = { Person };
