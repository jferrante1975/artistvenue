window.onload = function () {
  //Javacript of responsive navigation menu
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
};


var input = document.getElementById("image");
var infoArea = document.getElementById("file-upload-filename");

input.addEventListener("change", showFileName);

function showFileName(event) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = fileName;
}

function checkPasswordMatch() {
  var password = $("#pws").val();
  var confirmPassword = $("#re-pws").val();

  if (!password){
    $("#checkPws").html("");
    $("#pws").css("background-color", "#FFFFFF");
    $("#re-pws").css("background-color", "#FFFFFF");
    $("#re-pws").val("");
  }
  else if (password != confirmPassword){
    // $("#checkPws").html("Passwords no coinciden!");
    $("#pws").css("background-color", "#F9A28F");
    $("#re-pws").css("background-color", "#F9A28F");
  }
  else{
    // $("#checkPws").html("Passwords coinciden.");
    $("#pws").css("background-color", "#DAF7A6");
    $("#re-pws").css("background-color", "#DAF7A6");
  } 
}

$(document).ready(function () {
  $("#pws, #re-pws").keyup(checkPasswordMatch);
});
