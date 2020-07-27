const express = require('express');
const app = express();
const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');
const connectDB = require('./config/db');
const path = require('path');

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({extended: false}));

app.use('/api/users', users);
app.use('/api/contacts', contacts);
app.use('/api/auth', auth);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

app.listen(PORT, () => console.log(`Listining at port ${PORT}`));
