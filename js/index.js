$(document).ready(function(){
$(".button").click(function(){
$("#screen").append($(this).text());
  });
  $("#clear").click(function(){
    $("#screen").html("");
  });
  $("#equals").click(function(){
  var $value = $("#screen").text().slice(0,$("#screen").text().split("").length-1);
  var $misc = $value.replace(/\÷/,"/");
  $misc = $misc.replace(/\x/,"*");
  var answer = eval($misc);
  $("#screen").append(answer);
});
});
