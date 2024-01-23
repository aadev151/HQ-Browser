function chooseMethod() {
  if (document.getElementById("search").value.length >= 1) {
    var s = "";

    if (document.getElementById("google").checked) {
      s = "Google";
    } else if (document.getElementById("mailru").checked) {
      s = "Mail.Ru";
    } else if (document.getElementById("yandex").checked) {
      s = "Yandex";
    }
    document.getElementById("alright").innerHTML = 'The search will be done in ' + s + '. If you want to change this, tap <button onclick="methods()">here</button>';
  } else {
    document.getElementById("alright").innerHTML = "";
  }
}
function methods() {
  var s = "";

  if (document.getElementById("google").checked) {
    s = "Google";
  } else if (document.getElementById("mailru").checked) {
    s = "Mail.Ru";
  } else if (document.getElementById("yandex").checked) {
    s = "Yandex";
  }

  if (document.getElementById("google").hidden) {
    document.getElementById("google").hidden = false;
    document.getElementById("googleLabel").hidden = false;
    document.getElementById("mailru").hidden = false;
    document.getElementById("mailruLabel").hidden = false;
    document.getElementById("yandex").hidden = false;
    document.getElementById("yandexLabel").hidden = false;
    document.getElementById("searchSubmit").hidden = false;
    document.getElementById("alright").innerHTML = 'The search will be done in ' + s + '. To hide the list, tap <button onclick="methods()">here</button>';
  } else {
    document.getElementById("google").hidden = true;
    document.getElementById("googleLabel").hidden = true;
    document.getElementById("mailru").hidden = true;
    document.getElementById("mailruLabel").hidden = true;
    document.getElementById("yandex").hidden = true;
    document.getElementById("yandexLabel").hidden = true;
    document.getElementById("searchSubmit").hidden = true;
    document.getElementById("alright").innerHTML = 'The search will be done in ' + s + '. If you want to change this, tap <button onclick="methods()">here</button>';
  }
}