window.onload = function () {
    //Javacript of responsive navigation menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
  
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });
  };
  
  // function populate(s, s1) {
  //   var s = document.getElementById(s);
  //   var s1 = document.getElementById(s1);
  //   s1.innerHTML = "";
  //   if (s.value == "usa") {
  //     var arr = [
  //       "|Selecciona la ciudad",
  //       "boston|Boston",
  //       "houston|Houston",
  //       "miami|Miami",
  //       "stafford|Stafford",
  //     ];
  //   } else if (s.value == "argentina") {
  //     var arr = [
  //       "|Selecciona la ciudad",
  //       "buenos aires|Buenos Aires",
  //       "cordoba|Cordoba",
  //       "Corrientes|Corrientes",
  //       "rosario|Rosario",
  //     ];
  //   } else if (s.value == "peru") {
  //     var arr = [
  //       "|Selecciona la ciudad",
  //       "arequipa|Arequipa",
  //       "ayacucho|Ayacucho",
  //       "lima|Lima",
  //       "trujillo|Trujillo",
  //     ];
  //   }
  //   for (var option in arr) {
  //     var pair = arr[option].split("|");
  //     var new_op = document.createElement("option");
  //     new_op.value = pair[0];
  //     new_op.innerHTML = pair[1];
  //     s1.options.add(new_op);
  //   }
  // }
  
  
  var input = document.getElementById("image");
  var infoArea = document.getElementById("file-upload-filename");
  
  input.addEventListener("change", showFileName);
  
  function showFileName(event) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoArea.textContent = fileName;
  }
  