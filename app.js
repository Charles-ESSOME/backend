const express = require('express');
const mongoose=require('mongoose');
const eventRoutes=require('./routes/eventRoute');
const bodyParser=require('body-parser');
const cors=require('cors');
const userRoutes = require('./routes/userRoute');


const app = express();

const url='mongodb+srv://LOTIN_ESSOME:charlesjutheau@test.affjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !',error));
     
    app.use(express.json());
    app.use(cors({origin:true}))

  
    app.use('/api', eventRoutes);
    app.use('/api',userRoutes);
    

module.exports = app;