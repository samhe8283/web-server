var express= require('express');
var app = express();
var PORT=3000;

var middleware = {
    requireAthentication: function(req,res,next){
        console.log('private route hit');
        next();
    },
    logger: function(req,res,next){
        var date =new Date();
        console.log('request date is '+ date +' ' + req.method + ' ' + req.originalUrl);
        next();
    }
}
app.use(middleware.logger);
//app.use(middleware.requireAthentication);
app.get('/about',middleware.requireAthentication, function(req,res){
    res.send('this is about page');
})
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
    console.log('server started on port ' + PORT);
});