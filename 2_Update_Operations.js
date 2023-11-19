// ## UpdateOne() and UpdateMany()
// 1)  db.products.updateOne({_id: ObjectId("64c2363be32f4a51b19b9271")},{$set:{price:25}})

// 2)  db.products.updateOne({name : 'Designer Handbag'}, {$set : {isFeatured:false}})




// ## removing and renaming fieldName
// 1) db.products.updateMany({price : 120 }, {$unset : {isFeatured : 1}})
// 2) db.products.updateMany({price:120}, {$rename : {isFeature : "isFeatured"}})


// ## Updating Arrays & Embedded Documents
// 1) db.comments.updateOne({_id:5}, {$push :{comments: {user:'Nazil2', text:'Prepare for death'}}})
// 2) db.comments.updateOne({_id:5}, {$pop:{'comments':1}})
// 3) db.comments.updateOne({_id:5, 'comments.user':'Jack'}, {$set:{'comments.$.text':'Me to Jack hu!'}})

