var bottone = $("#bottone");
var menu = $(".hamburger-menu");
var chiudi = $(".close");

bottone.click(function(){
  menu.addClass("active");
});

chiudi.click(function(){
  menu.removeClass("active");
})
