
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sideOne = parseInt($("input#side1").val());
    var sideTwo = parseInt($("input#side2").val());
    var sideThree = parseInt($("input#side3").val());


    if(sideOne && sideTwo && sideThree){



      if(sideOne + sideTwo <= sideThree || sideOne + sideThree <= sideTwo || sideTwo + sideThree <= sideOne){
        alert("This is not a traingle");
      }else{


        if(sideOne===sideTwo && sideOne===sideThree){
          $("#equil").show();
        } else if (sideOne===sideTwo||sideOne===sideThree||sideTwo===sideThree){
          alert("works");
          $("#isos").show();
        } else if(sideOne!=sideTwo && sideOne!=sideThree){
          $("#scal").show();
        }

      }
    } else{
      alert("Please fill out all the fields!")
    }



    event.preventDefault();
  });
});
