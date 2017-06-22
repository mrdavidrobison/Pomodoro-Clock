$(document).ready(function(){

  var buzzer = $("#buzzer")[0];
  var countS = parseInt($("#numS").html());
  var countB = parseInt($("#numB").html());

  // $("#reset").hide();

  $("#minusS").click(function(){
    if (countS > 5) {
      countS -= 5;
    };
    $("#numS").html(countS);
  })

  $("#addS").click(function(){
    countS += 5;
    $("#numS").html(countS);
  })

  $("#minusB").click(function(){
    if (countB > 5){
      countB -= 5;
    }
    $("#numB").html(countB);
  })

  $("#addB").click(function(){
    countB += 5;
    $("#numB").html(countB);
  })

  $("#start").click(function(){
    var counter = setInterval(timer, 1000);
    countS *= 60;
    function timer(){
      $("#addS, #minusS, #numS, #titleS, #addB, #minusB, #numB, #titleB, #start, #reset").hide();
      $("#numS, #timeType").show();
      $("#timeType").html("Session Time: ");      
      countS -= 1;
      if (countS === 0){
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#numS").hide();
      }
      if (countS % 60 >= 10) {
        $("#numS").html(Math.floor(countS / 60) + ":" + countS % 60);
      } else {
        $("#numS").html(Math.floor(countS / 60) + ":" + "0" + countS % 60);
      }  
      function breakTimer() {
        $("#timeType").html("Break Time: ");
        $("#numB").show();
        breakTime *= 60;
        $("#timeType").show();
        breakTime -= 1;
        if (breakTime === 0) {
          clearInterval(startBreak);
          buzzer.play();
          $("#reset").show();
          $("#numB, #timeType").hide();
        }
        if (breakTime % 60 >= 10) {
          $("#numB").html(
            Math.floor(breakTime / 60) + ":" + breakTime % 60
          );
        } else {
          $("#numB").html(
            Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60
          );
        }
      }
    }
  });

  $("#reset").click(function(){
    
    count=25;
    breakTime=25;

    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
    $("#reset, #timeType").hide();

  });
})