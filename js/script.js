function encrypt() {
  var text = document.getElementById("text").value;
  var shift = parseInt(document.getElementById("shift").value);
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }

  document.getElementById("result").value = result;
}

function decrypt() {
  var text = document.getElementById("text").value;
  var shift = parseInt(document.getElementById("shift").value);
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }

  document.getElementById("result").value = result;
}

function increaseShift() {
  document.getElementById("shift").stepUp(1);
}

function decreaseShift() {
  document.getElementById("shift").stepDown(1);
}

function resetFields() {
  document.getElementById("text").value = "";
  document.getElementById("shift").value = "3";
  document.getElementById("result").value = "";
}
