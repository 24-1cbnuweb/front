var fpcontainer = document.getElementById("FpageContainer");
var Fpath = "component/frozen.json";
var itemsPerRow = 4;
var totalItems = 1000;
var currentDPage = 1;

function showP(data) {
  var startDIndex = (currentDPage - 1) * totalItems;
  var endDIndex = Math.min(startDIndex + totalItems, data.length);
  fpcontainer.innerHTML = "";

  for (var i = startDIndex; i < endDIndex; i++) {
    var itemIndexInRow = (i - startDIndex) % itemsPerRow; // 현재 줄에 몇 번째 아이템인지 계산

    if (itemIndexInRow === 0) {
      // 새로운 줄을 시작할 때마다 div 요소를 생성하여 아이템을 묶어줍니다.
      var divRow = document.createElement("div");
      divRow.className = "row"; // 각 줄을 나타내는 CSS 클래스 추가
      dpcontainer.appendChild(divRow);
    }
    var img = document.createElement("img");
    var divItem = document.createElement("div");

    divItem.className = "item";
    divItem.innerHTML = `
    <h3>${data[i].name}</h3>
    <a href="${data[i].url}">${data[i].site}</a>
    가격 : ${data[i].preprice} (할인율 :${data[i].discount} )
    <br> → ${data[i].price}<br>
    (단위가격 : ${data[i].perprice})</p>
  `;
    img.src = data[i].img;
    img.className = "img";

    divRow.appendChild(divItem); // 현재 줄에 아이템 추가
    divItem.appendChild(img);
  }
}

function loadDpJSON(callback) {
  $.getJSON(Fpath, function (data) {
    callback(data);
  });
}

function loadrowpJSON(callback) {
  $.getJSON(Fpath, function (data) {
    // price를 숫자로 변환하여 오름차순으로 정렬
    data.sort(function (a, b) {
      var priceA = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
      var priceB = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
      return priceA - priceB;
    });
    callback(rowpdata);
  });
}

loadDpJSON(function (data) {
  showP(data);
});
