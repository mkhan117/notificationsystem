var Db = require('./dboperations');
var Notifications = require('./notifications');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
});

router.route('/notifications').get((request, response) => {
    Db.getNotifications().then((data) => {
        response.json(data);        
    })
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Notifications API is running at ' + port);

