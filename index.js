const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const path = require('path');


//database config
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://aisenpai:senpai.2020@aisenpai-9gkai.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(db => console.log('database connected'))
    .catch(err => console.error(err));

// Settings
const port = process.env.PORT || 3000;

// Static Files
app.use(express.static(__dirname + '/public'));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes

app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/upload.html'));
});

app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/SimpleUpload', require('./routes/simpleUpload'));
app.use('/health', require('./routes/health'));


app.listen(port, () => console.log(`App listening on port ${port}!`));