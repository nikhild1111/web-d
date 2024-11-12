use("CrudDb")//this will create CrudDb database
console.log(db)
//create//
db.createCollection("courses")//for create collection

//each tiem we run this new document is inserted
db.courses.insertOne({//this is for inserting a one document inside the collection
    name:"harry web dev free courses",
    price:0,
    assignment:12,
    projects:45
})

db.courses.insertMany([//in the create many we can give array of object or the document which will be inserted inside the coursess separetly from each other but within collection
    {
        name: "john full stack web development course",
        price: 0,
        assignment: 10,
        projects: 30
    },
    {
        name: "jane beginner python course",
        price: 5,
        assignment: 8,
        projects: 15
    },
    {
        name: "mike advanced JavaScript workshop",
        price: 10,
        assignment: 12,
        projects: 20
    },
    {
        name: "sara data science bootcamp",
        price: 0,
        assignment: 20,
        projects: 40
    },
    {
        name: "alex machine learning fundamentals",
        price: 15,
        assignment: 18,
        projects: 25
    },
    {
        name: "emma web design essentials",
        price: 0,
        assignment: 7,
        projects: 10
    },
    {
        name: "luke database management course",
        price: 12,
        assignment: 10,
        projects: 22
    },
    {
        name: "sophia cloud computing basics",
        price: 0,
        assignment: 14,
        projects: 18
    },
    {
        name: "oliver AI and neural networks",
        price: 20,
        assignment: 16,
        projects: 28
    },
    {
        name: "mason beginner C++ programming",
        price: 5,
        assignment: 9,
        projects: 12
    },
    {
        name: "ella software engineering fundamentals",
        price: 8,
        assignment: 11,
        projects: 15
    },
    {
        name: "noah cyber security basics",
        price: 0,
        assignment: 13,
        projects: 19
    },
    {
        name: "mia mobile app development",
        price: 10,
        assignment: 15,
        projects: 25
    },
    {
        name: "lucas big data analytics",
        price: 0,
        assignment: 12,
        projects: 22
    },
    {
        name: "grace frontend frameworks exploration",
        price: 7,
        assignment: 10,
        projects: 14
    }
]
)
//each time when we run the script the new document will be create and it will be inserted so many duplicate data will be store in datsbase as it will be save in database permently untill we delete it

//read//

//read means find and other opration 
// let a=db.courses.find({price:0})//this will give all the ducument wchich have price :0 and stor in a 
// console.log(a);//to get all the document wich price:0

// hare "a" will return cursor on which we can perform the opration
// console.log(a.count())//it will return count of no of document wich have price:0

//if we want array of document or object whoich have a price :0 then use toArray on cursor "a"
// console.log(a.toArray())


// let b=db.courses.findOne({price:0});
// console.log(b)//give the first document with price :0


//update//
db.courses.updateOne({price:0},{$set:{price:100}})//this will update the price of first document to 100 if he have price:0
// {$set:{price:1000}}//this is an automic oprator required for the updation Yes, the $set operator in MongoDB is used specifically to update or change existing fields in the original database. When you run a query with $set, MongoDB modifies the matched documents directly in the database to reflect the new values provided.


db.courses.updateMany({price:0},{$set:{price:100}})//this will update the price of all document to 100 if he have price:0
// {$set:{price:1000}}//this is an automic oprator required for the updation

//detele //each time this will run and delete one by one for if we want to delete at one time for all d use deletemany
db.courses.deleteOne({price:100})//this will delete first document which have price 100


db.courses.deleteMany({price:100})//this will delete all document which have price 100

//all the oparation we perform delet inser update the count of how many delete update is show is show on right side window


//quary and projection oprator do your self 
// -eq -e -gt 