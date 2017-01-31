/** Add Colors Array **/
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
function newQuote()
{
  var color = Math.floor(Math.random() * colors.length);
  // Change Background
  $("html body").animate({
     backgroundColor:colors[color]
  }, 1000 );
  
  // Change Button Color
  $(".button").animate({
    backgroundColor:colors[color]
  });
  
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(data){
      var quote = '<p><i class="fa fa-quote-left"></i>'+data.quoteText+'<i class="fa fa-quote-right"></i></p><br> -<i>'+data.quoteAuthor+'</i>';
      $("#quoteBox").html(quote);
    }
  });
  /*$.getJSON("", function(a) {
  $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
    console.log(a[0].content );
}
 ); */
 console.log("fff"); 
}
$(document).ready(function(){
  
  newQuote();
  
});

$(document).on("click","#new-quote",function(){
  newQuote();
});