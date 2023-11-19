// ## explain() 
// 1) db.products.find({price:{$gt:100}}).explain()
// 2) db.products.find({price:{$gt:100}}).explain('executionStats')



// ## indexes
/* 1) db.products.find({name:'Air Fryer'}).explain('executionStats')

// ==>> Before Creation of Index
// executionSuccess: true,
// nReturned: 3,
// executionTimeMillis: 7,
// totalKeysExamined: 0,
// totalDocsExamined: 10355, 
*/


// ## managing Indexes
// 1) db.products.getIndexes()

// 2) db.products.createIndex({name:1})

// ==>> After creation of Index
// executionSuccess: true,
// nReturned: 3,
// executionTimeMillis: 1,
// totalKeysExamined: 3,
// totalDocsExamined: 3,


// 3) db.products.dropIndex({name:1})
// 3.2) db.products.dropIndex("name_1")



// ## Where index shouldn't be used ? 

// ==> Before Applying indexes
// db.products.find({price: {$gt:100}}).explain('executionStats')
// executionSuccess: true,
// nReturned: 9216,
// executionTimeMillis: 6,
// totalKeysExamined: 0,
// totalDocsExamined: 10355,



// ==> After applying indexes
// executionSuccess: true,
// nReturned: 9216,
// executionTimeMillis: 21,
// totalKeysExamined: 9216,
// totalDocsExamined: 9216,


// WHY?
/* 
-> Here Although after applying indexes we have examined less no of docs but see the executionTime!

-> Beacause when we know that the ouput of Query will contain Large number of documents then we should acoid using indexes!

-> Indexes work well when we want small number of documents from large numbere of documents
*/