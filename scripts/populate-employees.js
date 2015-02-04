var db = require('mongoskin').db('mongodb://localhost:27017/headspring?auto_reconnect', {safe:true});
var employees = db.collection('employees');

employees.remove({}, function(err, result) {
    if (err) throw err;
    if (result) console.log('Removed all employees!');

    console.log("Populating employees...");

    var done = 0;
    var max = 30000;
    for (var count = 1; count <= max; count++) {
        employees.insert({
          "picture": "avatars/dustin-wells.jpg",
          "firstName": "First Name " + count,
          "lastName": "Last Name " + count,
          "jobTitle": "Software Engineer",
          "location": "Dallas, TX",
          "email": "dummyEmail"+count+"@test.com",
          "homePhone": "111-111-1111",
          "officePhone": "222-222-2222 x"+count,
          "cellPhone": "333-333-3333"
        }, function(err, result) {
            if (err) throw err;
            if (result) {
                done++;

                if (done === max) {
                    console.log("Done!");
                    process.exit();
                }
            }
        })
    }
});