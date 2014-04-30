function facebook()
{
  var ref = window.open(encodeURI('https://www.facebook.com'), '_blank', 'location=yes');
}
 
function google()
{
   
    var ref = window.open(encodeURI('https://www.google.com'), '_blank', 'location=yes');  
    
  }

function twitter()
{
    
  var ref = window.open(encodeURI('https://www.twitter.com'), '_blank', 'location=yes');  
    
}

function youtube()
{
    
  var ref = window.open(encodeURI('https://www.youtube.com'), '_blank', 'location=yes');  
    
}




 function contentclick()
    {
         
  
        $("#description").show();
        $("#content").hide();
    }
function descriptionclick()
{
    
    $("#content").show();
     $("#description").hide();
}


function upclick()
{
     $("#uparrow").hide(); 
    $("#downarrow").show();
}




    
