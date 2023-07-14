$(".btn1").click(function () {

  initialStage();


  let day = $("#day").val();
  let month = $("#month").val();
  let year = $("#year").val();
  let state = true;
  

  state = checkDate(day, month, year, state);

  const date = new Date();

  let currDay = date.getDate();
  let currMonth = date.getMonth() + 1;
  let currYear = date.getFullYear();

  if((year > currYear || (year == currYear && month > currMonth) || (year == currYear && month == currMonth && day > currDay) ) && state == true )
  {
         $("#error1").html("Not into the future !");
        state = wrong(1);
  }

  if(state == true)
  {
    let resultYear = currYear-year;
    let resultMonth = 0;
    let resultDay = 0;
    if(month <= currMonth)
    {
        resultMonth = currMonth - month;
    }
    else
    {
        resultYear--;
        resultMonth = currMonth + 12 - month; 
    }

    if(day <= currDay)
    {
        resultDay = currDay - day;
    }
    else 
    {
        resultMonth --;
        if(currMonth == 5 ||currMonth == 7 || currMonth == 10 || currMonth == 12)
            currDay+=30;
        else if(currMonth == 3 && currYear%4 == 0)
            currDay+=29;
        else if(currMonth == 3 && currYear%4 != 0)
            currDay+=28;
        else
            currDay+=31;

        resultDay = currDay -day;
    }

    $("#result1").html(resultYear);
    $("#result2").html(resultMonth);
    $("#result3").html(resultDay);
  }
});


function initialStage()
{
    $("#error2").addClass("hide");
    $("#error1").addClass("hide");
    $("#error3").addClass("hide");
    $("#result1").html("--");
   $("#result2").html("--");
   $("#result3").html("--");
   $(".form-control").removeClass("danger");
   $(".form-label").removeClass("danger2");
}

function checkDate(day, month, year, state)
{
    if (day === "" || day == null) {
        $("#error1").html("This field is required");
        state = wrong(1);
      }
    
      if (month === "" || month == null) {
        $("#error2").html("This field is required");
        state = wrong(2);
      }
    
      if (year === "" || year == null) {
        $("#error3").html("This field is required");
        state = wrong(3);
      }
    
      if (day > 31) {
        $("#error1").html("Must be a valid day");
        state = wrong(1);
      }
    
      if (year < 1900) {
        $("#error3").html("Not before 20th century");
        state = wrong(3);
      }
    
      if (month > 12) {
        $("#error2").html("Must be a valid month");
        state = wrong(2);
      } else {
        if (day <= 31 && year > 1900) {
          if (
            (year % 4 == 0 && day > 29 && month ==2) ||
            (year % 4 != 0 && day > 28 && month == 2) ||
            (day == 31 &&
              (month == 1 ||
                month == 3 ||
                month == 5 ||
                month == 7 ||
                month == 8 ||
                month == 10 ||
                month == 12))
          ) {
            $("#error1").html("Must be a valid date");
            state = wrong(1);
          } else {
            state = true;
          }
        }
      }

      return state;
}

function wrong(num)
{
    $("#error"+num).removeClass("hide");
    $(".form-control").addClass("danger");
    $(".form-label").addClass("danger2");
    let state = false;

    return state;
}