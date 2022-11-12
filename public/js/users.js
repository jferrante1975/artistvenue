// window.onload = function () {
//   //Javacript of responsive navigation menu
//   const menuBtn = document.querySelector(".menu-btn");
//   const navigation = document.querySelector(".navigation");

//   menuBtn.addEventListener("click", () => {
//     menuBtn.classList.toggle("active");
//     navigation.classList.toggle("active");
//   });
// };

function searchUser() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("userSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("users-table");
  tr = table.getElementsByTagName("tr");


  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function checkPasswordMatch() {
  var password = $("#pws").val();
  var confirmPassword = $("#repassword").val();

  if (!password){
    $("#checkPws").html("");
    $("#pws").css("background-color", "#FFFFFF");
    $("#repassword").css("background-color", "#FFFFFF");
    $("#repassword").val("");
  }
  else if (password != confirmPassword){
    // $("#checkPws").html("Passwords no coinciden!");
    $("#pws").css("background-color", "#F9A28F");
    $("#repassword").css("background-color", "#F9A28F");
  }
  else{
    // $("#checkPws").html("Passwords coinciden.");
    $("#pws").css("background-color", "#DAF7A6");
    $("#repassword").css("background-color", "#DAF7A6");
  } 
}
