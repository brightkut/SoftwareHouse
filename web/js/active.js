
        
        $(document).ready(function(){
            butget();
            butno();
       
          });
        function butget(){
              $("#getstart").click(function(){
              
              $("#yes").toggleClass("toggled");
              $("#no").toggleClass("toggled");
              $("#getstart").toggleClass("toggled");
              $("#nhead").text("Are you Sure ?");
    
            });
        }
    
        function butno(){
              $("#no").click(function(){
              $("#yes").toggleClass("toggled");
              $("#no").toggleClass("toggled");
              $("#getstart").toggleClass("toggled");
              $("#nhead").text("Code For Your Life");
    
            });
        }