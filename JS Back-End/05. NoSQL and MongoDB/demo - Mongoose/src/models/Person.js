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
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
    minLength: [2, 'Last name must be between 2 and 10 symbol long!'],
    maxLength: [10, 'Last name must be between 2 and 10 symbol long!'],
  },
  age: {
	  type: Number,
    required: true,
	  min: 0,
	  max: 199
	},
  height: {
    type: Number,
    // {VALUE} е специално, предефинирано пропърти, което връща подадената от потребителя стойност
    min: [40, 'Height may not be under 40sm (current value is {VALUE})'],
	  max: 299
  },
  hobbies: {
    type: [String],
    enum: {
      values: ['Hiking', 'Skiing', 'Biking'],
      message: 'Unacceptable hobby'
    }
  },
  contacts: contactInfoSchema
});

// НЕ трябва да е ламбда функция!!!
personSchema.path('firstName').validate(function(value) {   
  return value.length >= 2 && value.length <= 10;
}, 'First name must be between 2 and 10 symbol long!' );

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
