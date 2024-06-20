const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

async function start() {
  // create connection string
  const connectionString = 'mongodb://localhost:27017';
  // create client
  const client = new MongoClient(connectionString, {
    // useUnifiedTopology: true, - DEPRECATED
  });

  // вътрешно ще се върже, ще направи връзките. Не връща резултат, с който е нужно да правим нещо. Връща себе си. Т.е. на края казва return this; От тук на нататък инстанцията, която сме направили е вързана и можем към нея да изпълняваме команди.
  await client.connect();

  // избираме текуща база данни, което ни връща дръща към тази база данни
  const db = client.db('testdb');
  // в базата данни избираме колекция, което ни връща дръжка към колекцията
  const people = db.collection('people');

  // Вече в колекцията можем да изпълняваме заявки
  // people.insertOne({ 'name': 'Ivan' });
  // find връща query - това е подготвената заявка, без да сме я изпратили. За да я изпратим трябва да подадем т.н. терминатор. Защото на тази заявка можем да навържем други неща след нея.(както при масивите с точка добавяме мапинг операции).
  const cursor = people.find({});
  // тук вече добавяме тирминатор и така оформената заявка се изпраща. През операционната система към Mongo сървиса, който върви. 
  // Връща резултатите.
  const result = await cursor.toArray();

  console.log(result);
}

start();

