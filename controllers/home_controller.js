
module.exports.home = function(req,res){
    console.log('hanju');
    return res.render('home.ejs',{
        title:"HOME"
    });
}
