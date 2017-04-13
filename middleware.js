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

module.exports = middleware;