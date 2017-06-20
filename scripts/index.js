$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  var sessionCount = parseInt($("numS").html());
  var breakCount = parseInt($("numB").html());

  $("#minusS").click(function(){
    if (sessionCount > 5){
      sessionCount -= 5;
      $("#numS").html(sessionCount);
    }
  })

  $("#addS").click(function(){
    sessionCount += 5;
    $("#numS").html(sessionCount);
  })

  $("#minusB").click(function(){
    if (breakCount > 5){
      breakCount -= 5;
      $("#numB").html(breakCount);
    }
  })

  $("#addB").click(function(){
    breakCount += 5;
    $("#numB").html(breakCount);    
  })
});