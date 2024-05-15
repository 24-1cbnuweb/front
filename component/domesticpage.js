var dcontainer = document.getElementById("domesticContainer");
var Dpath = "component/sample.json";
var itemsPerRow = 4;
var totalItems = 100;
var currentDPage = 1;

function showDomestic(data) {
  var startDIndex = (currentDPage - 1) * totalItems;
  var endDIndex = Math.min(startDIndex + totalItems, data.length);
  dcontainer.innerHTML = "";

  for (var i = startDIndex; i < endDIndex; i++) {
    var itemIndexInRow = (i - startDIndex) % itemsPerRow; // 현재 줄에 몇 번째 아이템인지 계산

    if (itemIndexInRow === 0) {
        // 새로운 줄을 시작할 때마다 div 요소를 생성하여 아이템을 묶어줍니다.
        var divRow = document.createElement("div");
        divRow.className = "row"; // 각 줄을 나타내는 CSS 클래스 추가
        dcontainer.appendChild(divRow);
    }

    var divItem = document.createElement("div");
    var img = document.createElement("img");
    img.src = data[i].image;
    img.className = "img";
    divItem.className = "item";
    divItem.innerHTML =
      "<h3>" + data[i].name + "</h3><p>" + data[i].description + "</p>";
    divRow.appendChild(divItem); // 현재 줄에 아이템 추가
    divItem.appendChild(img);
  }
}

function loadDJSON(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", Dpath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == "200") {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
}

loadDJSON(function (data) {
  showDomestic(data);
});
