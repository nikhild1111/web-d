
// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany(
  [
    {
      "name": "javascript2",
      "price": 300000,
      "instructor": "harry"
    },
    {
      "name": "pythonBasics",
      "price": 250000,
      "instructor": "alice"
    },
    {
      "name": "dataStructures",
      "price": 400000,
      "instructor": "bob"
    },
    {
      "name": "webDevelopment",
      "price": 350000,
      "instructor": "jane"
    },
    {
      "name": "machineLearning",
      "price": 450000,
      "instructor": "mike"
    },
    {
      "name": "cloudComputing",
      "price": 500000,
      "instructor": "susan"
    },
    {
      "name": "cyberSecurity",
      "price": 370000,
      "instructor": "dave"
    },
    {
      "name": "deepLearning",
      "price": 550000,
      "instructor": "lisa"
    },
    {
      "name": "databaseManagement",
      "price": 320000,
      "instructor": "chris"
    },
    {
      "name": "bigDataAnalytics",
      "price": 600000,
      "instructor": "emma"
    },
    {
      "name": "artificialIntelligence",
      "price": 580000,
      "instructor": "john"
    },
    {
      "name": "blockchain",
      "price": 420000,
      "instructor": "oliver"
    },
    {
      "name": "softwareTesting",
      "price": 280000,
      "instructor": "rachel"
    },
    {
      "name": "networkingEssentials",
      "price": 310000,
      "instructor": "patrick"
    },
    {
      "name": "operatingSystems",
      "price": 330000,
      "instructor": "nancy"
    }
  ]
  
);



// Print a message to the output window.
console.log(`Done Data insert`);
