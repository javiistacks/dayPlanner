var today = moment().format("dddd MMMM Do, YYYY");
var timeAsOfNow = moment().format("HH");
var toDo = ["07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

//Setting current Date in Jumbotron
$("#currentDay").text(today);

//Setting color based on time
function timeHighlight() {
  for (var i = 0; i < toDo.length; i++) {
    if (toDo[i] < timeAsOfNow) {
      $("." + toDo[i]).addClass("past");
    }
    if (toDo[i] === timeAsOfNow) {
      $("." + toDo[i]).addClass("present");
    }
    if (toDo[i] > timeAsOfNow) {
      $("." + toDo[i]).addClass("future");
    }
  }
}
timeHighlight();

//Saving ToDo list to local storage on click f(x)
//Row for 7:00 AM
$(".b07").on("click", function () {
  var lsContent = $(".07").val();
  localStorage.setItem("07:00", lsContent);
});
//Row for 8:00 AM
$(".b08").on("click", function () {
  var lsContent = $(".08").val();
  localStorage.setItem("08:00", lsContent);
});
//Row for 9:00 AM
$(".b09").on("click", function () {
  var lsContent = $(".09").val();
  localStorage.setItem("09:00", lsContent);
});
//Row for 10:00 AM
$(".b10").on("click", function () {
  var lsContent = $(".10").val();
  localStorage.setItem("10:00", lsContent);
});
//Row for 11:00 AM
$(".b11").on("click", function () {
  var lsContent = $(".11").val();
  localStorage.setItem("11:00", lsContent);
});
//Row for 12:00 PM
$(".b12").on("click", function () {
  var lsContent = $(".12").val();
  localStorage.setItem("12:00", lsContent);
});
//Row for 1:00 PM
$(".b13").on("click", function () {
  var lsContent = $(".13").val();
  localStorage.setItem("13:00", lsContent);
});
//Row for 2:00 PM
$(".b14").on("click", function () {
  var lsContent = $(".14").val();
  localStorage.setItem("14:00", lsContent);
});
//Row for 3:00 PM
$(".b15").on("click", function () {
  var lsContent = $(".15").val();
  localStorage.setItem("15:00", lsContent);
});
//Row for 4:00 PM
$(".b16").on("click", function () {
  var lsContent = $(".16").val();
  localStorage.setItem("16:00", lsContent);
});
//Row for 5:00 PM
$(".b17").on("click", function () {
  var lsContent = $(".17").val();
  localStorage.setItem("17:00", lsContent);
});
//Row for 6:00 PM
$(".b18").on("click", function () {
  var lsContent = $(".18").val();
  localStorage.setItem("18:00", lsContent);
});

// Getting ToDo list from local storage
$(".07").val(localStorage.getItem("07:00"));
$(".08").val(localStorage.getItem("08:00"));
$(".09").val(localStorage.getItem("09:00"));
$(".10").val(localStorage.getItem("10:00"));
$(".11").val(localStorage.getItem("11:00"));
$(".12").val(localStorage.getItem("12:00"));
$(".13").val(localStorage.getItem("13:00"));
$(".14").val(localStorage.getItem("14:00"));
$(".15").val(localStorage.getItem("15:00"));
$(".16").val(localStorage.getItem("16:00"));
$(".17").val(localStorage.getItem("17:00"));
$(".18").val(localStorage.getItem("18:00"));

//Clearing entire calendar with one button
$(".clearBtn").on("click", function () {
  localStorage.clear();
  location.reload();
});