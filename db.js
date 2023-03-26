const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const dbUrl='mongodb+srv://prateekpatil9999:pratik@cluster0.ztbps1j.mongodb.net/test';
mongoose.connect(dbUrl, { useNewUrlParser: true }) 
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));