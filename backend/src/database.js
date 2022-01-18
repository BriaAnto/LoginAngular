const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://brian:12345abcde@cluster0.jojbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true

})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));