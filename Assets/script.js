//Show date at the top of the screen
var displayDate = dayjs().format('dddd, MMMM.DD.YYYY');


$(document).ready(function () {
  $("#currentDay").append(displayDate)
})

//Register click event and store value from input class "form-control" in local storage
$(document).ready(function () {
  $(".btn").on("click", function (event) {
    event.preventDefault();

    var toDoEntry = $(this).closest("div.input-group").find("input[class~='form-control']").val();
    //var savetext = JSON.parse(localStorage.getItem(""))
    //$(toDoEntry[i]).val(savetext)
  localStorage.setItem("userEntry", JSON.stringify(toDoEntry))
  });
});

 
  //persistStorage = JSON.parse(localStorage.getItem("userEntry")) || []

  //var storedInput = $('.form-control')

  //for (let i = 0; i < storedInput.length; i++) {
    //const currentData = storedInput[i];
    //var userText = "";

    //for (let j = 0; j < toDoEntry.length; j++) {
      //const currentEntry = $(currentData).attr('data-hour');
      
      //var savedItem = toDoEntry[j];

      //if (currentEntry == savedItem.hour) {
        //userText = savedItem.text
      //}
     
    //}
    //$(currentData).val(userText)
  //}


//edit due date in time block 
var inputForms = $(".form-control");
for (let i = 0; i < inputForms.length; i++) {
  var currentHour = parseInt(dayjs().format('H'));
  var inputHour = parseInt($(inputForms[i]).attr('data-hour'));

  //console.log(currentHour)
  //console.log(inputHour)

  //compare these 2 variables
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

persistStorage()



// listen for save button clicks
//$("#save").on('click', function() {  // or whatever you called your button
  // get nearby values -look into siblings and parents relationship in jQuery
  // save in localStorage
  // Show notification that item was saved to localStorage by adding class .show
  // Timeout to remove .show class after 5 seconds
//});

//}
//saveTask()