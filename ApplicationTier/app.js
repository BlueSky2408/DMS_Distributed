require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const connectDB = require('./config/db');
const routerDocs = require('./routes/documents-route');
const routerUsers = require('./routes/users-route');

app.use(express.static(__dirname + '/../PresentationTier/react-ui'))
app.use(express.json());
app.use(cors());

//Connect to DB
connectDB();

app.use('/', require('./routes/main'));
app.use('/api/documents', routerDocs);
app.use('/api/users', routerUsers);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});