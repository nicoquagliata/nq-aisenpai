const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://aisenpai:senpai.2020@aisenpai-9gkai.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(db => console.log('database connected'))
    .catch(err => console.error(err));

// Settings
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/SimpleUpload', require('./routes/simpleUpload'));
app.use('/health', require('./routes/health'));

// Static Files
app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`App listening on port ${port}!`));  