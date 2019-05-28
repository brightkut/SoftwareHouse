// import express
var express = require('express');
var app = express();
//import mysql 
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

//use file with front end --> folder web
//app.use(express.static('../web'));

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
    res.send("finsih post");
    // json print obj
    console.log(req.body);

    var u  = req.body;
    var state = "";
    

    //connect db
    con.connect(function(err){
        if(err)throw err;
        console.log("connect db already");

        function checkUsername(u,callback){
          sqlselect = "select username from all_user where username = ?";
          var values = u.username;

          
          con.query(sqlselect,[[values]], function(error,result){

              if (error) throw error;
              var range = result.length;
              console.log(range);
              
              if(range==0){
                console.log('number: '+ range);
                return callback(true);
                
                
              }
              else{
                return callback(false);
              }
             
             
              
              
              
          });
      
        } 

        checkUsername(u,function(result){
          console.log(result);
          
          if(result){
            sqladd = "insert into all_user (username,email,codenumber,number,job,password,repeatpassword) values ?";

            var values = [[u.username,u.email,u.codenumber,u.number,u.job,u.password,u.repeatpassword]]
            con.query(sqladd,[values],function(error,result){
                if (error) throw error;
            });
            console.log("add user complete");
            state = "pass";
            
          
            

          }
          else{
            console.log("username already exist");
            
            state = "notpass";
            
          }
          

        });

        console.log(state);
        
        
       
       
        
        
    
    
         


    });
    


});

//port listen
app.listen(PORT,function(){
    console.log("Server is open in port : " + PORT);
 
});