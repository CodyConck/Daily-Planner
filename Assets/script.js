//Show date at the top of the screen
var displayDate = dayjs().format('dddd, MMMM.DD.YYYY');


$(document).ready(function () {
  $("#currentDay").append(displayDate)
})

//Register click event and store value from input class "form-control" in local storage
$(document).ready(function () {
  $(".btn").on("click", function (event) {
    event.preventDefault();

    var toDoEntry = $(this).closest("div.input-group").find("input[class~='form-control']").val()

    localStorage.setItem("userEntry", JSON.stringify(toDoEntry));
    
    //I was not able to get the user entry to reload on page refresh, code below was my attempt
     var textPersist = JSON.parse(localStorage.getItem("userEntry"))
      
      if(textPersist != null){
        textPersist = $("userEntry").val();
      }
      else $(textPersist).val() = 0;
      console.log(textPersist)
    })
});

//edit due date in time block 
var inputForms = $(".form-control");
for (let i = 0; i < inputForms.length; i++) {
  var currentHour = parseInt(dayjs().format('H'));
  var inputHour = parseInt($(inputForms[i]).attr('data-hour'));

  //compare the 2 variables
  if (currentHour > inputHour) {

    //add class past, present, future
    $(inputForms[i]).addClass("past")
  }
  else if (currentHour === inputHour) {
    $(inputForms[i]).addClass("present")
    $(inputForms[i]).removeClass("past")
  }
  else {
    $(inputForms[i]).addClass("future")
    $(inputForms[i]).removeClass("past")
    $(inputForms[i]).removeClass("present")
  }
}
