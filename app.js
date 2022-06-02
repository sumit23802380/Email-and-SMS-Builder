const express =require('express');
const bodyParser = require('body-parser');

const path  = require('path');

const app = express();

const mongoConnect = require('./util/database').mongoConnect;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine' , 'ejs');
app.set('views' ,'views');

const groupRoutes = require('./routes/groups');
const createGroupRoutes = require('./routes/create-group');


app.use(createGroupRoutes.routes);
app.use(groupRoutes.routes);



mongoConnect(()=>{
    app.listen(3000);
})
// app.listen(3000,(req,res,next)=>{
//     console.log("Server started at port 3000");
// })