var express= require('express');
var app = express();
var PORT= process.env.PORT || 3000;
var middleware= require('./middleware')

app.use(middleware.logger);
//app.use(middleware.requireAthentication);
app.get('/about',middleware.requireAthentication, function(req,res){
    res.send('this is about page');
})
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
    console.log('server started on port ' + PORT);
});