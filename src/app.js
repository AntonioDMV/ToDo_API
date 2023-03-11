const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');


initModels();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 7000;

db.authenticate()
    .then(() => {
        console.log('Base de datos conectada')
    })
    .catch((error) =>
        console.log(error)
    );

 db.sync( {alter: true} )
    .then(() =>
    console.log('Base de datos sync')
    )
    .catch((error) => console.log(error) );


app.use(userRoutes);    
app.use(todosRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});