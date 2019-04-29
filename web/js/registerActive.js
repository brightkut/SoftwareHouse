$(document).ready(() => {
  
  $("#regisbutton").click(function(){
    console.log("clicked");
    $.ajax({ 
      url: '/test',
      type: 'GET',
      success: function(result){
        console.log("ajax success");
        

      }
      
      
    });
    
    
    
      
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
