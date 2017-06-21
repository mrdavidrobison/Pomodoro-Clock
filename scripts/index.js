$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  var sessionCount = parseInt($("numS").html());
  var breakCount = parseInt($("numB").html());

$("#reset").hide();
  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    count *= 60;
    function timer() {
      //Hide variables
      $(
        "#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2"
      ).hide();
      $("#timeType").show();
      $("#timeType").html("Session Time: ");
      count -= 1;
      if (count === 0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
      }
      if (count % 60 >= 10) {
        $("#num").html(Math.floor(count / 60) + ":" + count % 60);
      } else {
        $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
      }

      function breakTimer() {
        $("#timeType").html("Break Time: ");
        $("#breakNum").show();
        breakTime *= 60;
        $("#timeType").show();
        breakTime -= 1;
        if (breakTime === 0) {
          clearInterval(startBreak);
          buzzer.play();
          $("#reset").show();
          $("#breakNum, #timeType").hide();
        }
        if (breakTime % 60 >= 10) {
          $("#breakNum").html(
            Math.floor(breakTime / 60) + ":" + breakTime % 60
          );
        } else {
          $("#breakNum").html(
            Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60
          );
        }
      }
    }
  });

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