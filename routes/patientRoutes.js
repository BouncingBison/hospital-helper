var patientController = require('../controllers/patientController.js');

module.exports = function(app) {


    app.get('/portal', patientController.patient);

    // app.post('/nurse', );



    app.post('/portal', patientController.portal);



    // function isLoggedIn(req, res, next) {
    //     if (req.isAuthenticated())
    //         return next();

    //     res.redirect('/signin');
    // }


}