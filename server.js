const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./userCtrl.js');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/api/users', userCtrl.readAll);
app.get('/api/users/:id', userCtrl.findUserById);
app.get('/api/admins', userCtrl.getAdmins);
app.get('/api/nonadmins', userCtrl.getNonAdmins);
app.post('api/users', userCtrl.createUser);


// app.listen(PORT, function(){
//   console.log('Listening on port: ', PORT);
// })
