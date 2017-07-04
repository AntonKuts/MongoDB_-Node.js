var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://Anton4:11111@ds149122.mlab.com:49122/persons", function (err, db) {

if(err) throw err;

db.collection('ass', function (err, collection) {

  // ------------ Добавление ------------
  // collection.insert({ name: 'Serg', age: 23, iin: 889977, sex: 'male' })

  // ------------ Удаление ------------
  // collection.remove({ name : "Ivan" }, function(err, result) {
  //  if(err) throw err;
  //  console.log('Document Removed Successfully');
  //  });

// ------------ Изменение названия коллекции ------------
  // collection.rename("ass", function(err, newColl) {
  //   if(err) throw err;
  //   console.log(newColl);
  // });

// ------------Статистика коллекции ------------
  // collection.stats(function(err, stats) {
  //   if(err) throw err;
  //   console.log(stats);
  // });

// ----------- Поиск ------------------
  // collection.find({sex:"female"}).toArray(function(err, items) {
  //   if(err) throw err;
  //   console.log(items);
  // });

// ----------- Изменения ------------------
  //  collection.update({id: 1}, { $set: { firstName: 'James', lastName: 'Gosling'} }, {w:1},
  //  function(err, result){
  //  if(err) throw err;
  //  console.log('Document Updated Successfully');
  //  });

// ----------- Вывод масива ------------------
  //  collection.find().toArray(function(err, items) {
  //  if(err) throw err;
  //  console.log(items);
  //  });

// ----------- Вывод иникальных данных ------------------
  // collection.distinct('name', function(err, result) {
  // if(err) throw err;
  // console.log(result);
  // });

// ----------- Количество записей ------------------
  // collection.count(function (err, count) {
  // if (err) throw err;
  // console.log('Total Rows: ' + count);
  // });
});
});
