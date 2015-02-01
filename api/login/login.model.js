exports.findOne = function(db, query, callback) {
    db.login.findOne(query, function(err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    });
};