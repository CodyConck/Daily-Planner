//Show date at the top of the screen
var displayDate = new Date().toLocaleDateString(undefined, {weekday: "long", year: "numeric", month: "long", day: "numeric"})

$(document).ready(function(){
  $("#currentDay").append(displayDate)
})

//function saveTask() {

//click to save to local storage
$(".btn").on("click", function(event){
  event.preventDefault();

  //localStorage.setItem("userTask", value)

  console.log(event)

  $(document).ready(function(){
    $(".btn").on("click", function () {
       
        var toDoEntry = $(this).closest("div.input-group").find("input[class='form-control']").val();
       
       localStorage.setItem("userEntry", JSON.stringify(toDoEntry))

       console.log(toDoEntry)
    });
});

  //var toDoEntry = $(".form-control").val();
  //define entry var above
  //entry.push(toDoEntry)
  //define saveTask function above
  //saveTask(entry)
  //retrieving usertask entry from local storage
  //localStorage.getItem("userTask", JSON.stringify(entry));
});

// listen for save button clicks
//$("#save").on('click', function() {  // or whatever you called your button
  // get nearby values -look into siblings and parents relationship in jQuery
  // save in localStorage
  // Show notification that item was saved to localStorage by adding class .show
  // Timeout to remove .show class after 5 seconds
//});

//}
//saveTask()