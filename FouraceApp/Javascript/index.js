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

function sendmail()
{
      alert('hi')
 
}
function downclick()
{
     $("#downarrow").hide();
     $("#uparrow").show();
}
function upclick()
{
     $("#uparrow").hide(); 
    $("#downarrow").show();
}
	
	

$( document ).bind( 'mobileinit', function(){
  $.mobile.loader.prototype.options.text = "loading";
  $.mobile.loader.prototype.options.textVisible = false;
  $.mobile.loader.prototype.options.theme = "a";
  $.mobile.loader.prototype.options.html = "";
});
