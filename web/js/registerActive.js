$(document).ready(() => {
  
  $("#regisbutton").click(function(){
    console.log("run function regis");
    
    const userobj = {};
    userobj.username = $("#username").val();
    userobj.email = $("#email").val();
    userobj.codenumber = $("#codenumber").val();
    userobj.number = $("#phone").val();
    userobj.job = $("#job").val();
    userobj.password = $("#password").val();
    userobj.repeatpassword = $("#repeatpassword").val();

    // convet to json
    const userobj_json = JSON.stringify(userobj);
    console.log(userobj_json);
    

    // send data from front to back
    $.ajax({
        type: 'post',
        url: 'localhost:8080/register',
        data: userobj_json,
        contentType: 'application/json',
        // if api response it will run success
        success: function(result) {
          // check result object for what you returned
          console.log("success");
          console.log(userobj_json);
          console.log(result);
          
          
          
          
        },
        error: function(error) {
          // check error object or return error
        }
      });
      console.log("end");
      
    
    
    
      
  });

 
  
});

 
          


/*
function regis(){
    console.log("run function regis");
    
    const userobj = {};
    userobj.username = $("#username").val();
    userobj.email = $("#email").val();
    userobj.phone = $("#phone").val();
    userobj.job = $("job").val();
    userobj.password = $("password").val();
    userobj.repeatpassword = $("repeatpassword").val();

    // convet to json
    const userobj_json = JSON.stringify(userobj);

    $.ajax({
        type: 'post',
        url: '/register',
        data: userobj_json,
        contentType: 'application/json',
        success: function(result) {
          // check result object for what you returned
          console.log("success");
          console.log(userobj_json);
          
          
        },
        error: function(error) {
          // check error object or return error
        }
      });






}
*/
