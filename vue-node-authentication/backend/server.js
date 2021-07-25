const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const messages = [
  { user: 'Jim', text: 'hello' },
  { user: 'Jim', text: 'hi' },
  { user: 'Jim', text: 'its working' },
];
const users = [{ userName: 'Jim', password: '1' }];

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.get('/messages/:id', (req, res) => {
  console.log(req.params);
  console.log('id: ', req.params.id);
  res.send(messages[req.params.id]);
});

app.post('/messages', (req, res) => {
  // let msg = req.body;
  // console.log(msg);

  const token = req.header('Authorization');
  const userId = jwt.decode(token, '123');
  const user = users[userId];
  let msg = { user: user.userName, text: req.body.message };
  messages.push(msg);
  res.json(msg);
  // console.log(messages);
});

app.post('/register', (req, res) => {
  let registerData = req.body;
  console.log(registerData);
  let newIndex = users.push(registerData); //return the new length of the array
  let userId = newIndex - 1;

  let token = jwt.sign(userId, '123');

  res.json(token);
});

app.post('/login', (req, res) => {
  let loginData = req.body;
  let userId = users.findIndex((user) => user.userName == loginData.userName);
  
  if(userId === -1){
    return res.status(401).send({message: 'name or password is invalid'});
  }
  
  if(user[userId].password !== loginData.password){
    return res.status(401).send({message: 'name or password is invalid'});
  }

  let token = jwt.sign(userId, '123');
  res.json(token);
});

app.listen(port, () => console.log('app running'));
