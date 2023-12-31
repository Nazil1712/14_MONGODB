
// ## Complex Expression
/* db.sales.find({$expr : {$gt: [{$multiply:['$quantity','$price']},'$targetPrice'] }})

db.sales.find({$expr : {$gt: [{$multiply:['$quantity','$price']},'$targetPrice'] }}).sort({_id:1}) */



// ## Elements Opearator
// 1) exists
// db.products.find({price : {$exists : true}})

// 2) type 
// db.products.find({price: {$type: 'number'}}).count()
// db.products.find({name: {$type: 'string'}}).count()
// db.products.find({name: {$type: 2}}).count()
// https://www.mongodb.com/docs/manual/reference/bson-types/

// 3) size
// db.comments.find({'comments':{$size:4}}) 



// ## Projection

// 1) To include only "comments" field
// db.comments.find({comments : {$size:2}}, {comments:1})

// 2)
// db.comments.find({comments : {$size:2}}, {comments:1, _id:0})
// _id is default field in DataBase

// 3)
/* Not allowed because we can't say ki bhai is ko include kar le insko mat kar
We can either say ki 
"In chizo ko include kar lo" 
ya 
"In chizo ko exclude kar lo" 
_id:0 is exception case beacuse it is not crerated by user!
*/
// db.comments.find({comments : {$size:2}}, {comments:1, title:0, _id:0})



// ## Embedded Documents
// 1) db.comments.find({'comments.user':'Charlie'},{comments:1, _id:0})
// 2) db.comments.find({'metadata.views':{$gt:1200}})
// 3) db.comments.find({'comments.user':'Henry', 'metadata.likes':{$gt:50}})
// 4) db.comments.find({'comments.user':'Alice', 'comments.user':'Vinod'})
// 5) db.comments.find({'comments.user':'Vinod', 'comments.text':'Thanks for sharing.'})


// ## $all VS $elemMatch
// 1) db.comments.find({'comments.user':{$all:['Alice','Vinod']}})

// 1)db.comments.find({'comments':{$elemMatch : {'user':'Vinod','text':'Thanks for sharing.'}}})