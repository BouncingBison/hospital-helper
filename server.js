//Models
var db = require("./app/models");

//Routes
// var authRoute = require('./app/routes/auth.js')(app, passport);
var apiRoutes = require('./app/routes/api.js')(app, passport);
var patientRoutes = require('./app/routes/patientRoutes.js')(app, passport);

//load passport strategies
// require('./app/config/passport/passport.js')(passport, db.user);


const PORT = process.env.PORT; 
//Sync Database
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {}).catch(function (err) {
        console.log(err, "Error: Database sync");
    });
});