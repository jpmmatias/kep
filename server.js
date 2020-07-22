const express = require('express');
const app = express();
const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.json({msg: 'Wellcome to the Kep API'}));

app.use('/api/users', users);
app.use('/api/contacts', contacts);
app.use('/api/auth', auth);

app.listen(PORT, () => console.log(`Listining at port ${PORT}`));
