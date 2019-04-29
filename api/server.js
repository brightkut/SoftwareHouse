// import express
var express = require('express');
var app = express();
//import mysql 
var mysql = require('mysql');

//use file with front end --> folder web
app.use(express.static('../web'));

//port 
var PORT = process.env.PORT || 8080;


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bright356" ,
  port: 3306,
  database: "sampledatabase"

});

app.get('/test',function(req,res){
  console.log("route test");
  res.send('route tess');
  

});


app.post('/register',function(req,res){
    console.log("---------Running Route register---------");

    //connect db
    con.connect(function(err){
        if(err)throw err;

        // check username
        function checkUsername(us){
            sqlselect = "select username from all_user where username = ?";
            var values = us;
            con.query(sqlselect,[[values]], function(error,result){
  
                if (error) throw error;
                if (result.length<=0) {              
                  return false};
                return true
            });
        } 
        //add user
        function addUser(u){

            sqladd = "insert into all_user (username,email,codenumber,number,job,password,repeatpassword) values ?"
    
            //from object
            var values = [[]]
            con.query(sqladd,[values],function(error,result){
                if (error) throw error;
            });
    
    
          }
          if(checkUsername(user)){
            addUser(user);
            res.send("Register complete");
            console.log("register complete");
          
          }else{
            res.send("This username is already exist");
            console.log("this username is already exist");
          
          }


    });
    


});

//port listen
app.listen(PORT,function(){
    console.log("Server is open in port : " + PORT);
 
});