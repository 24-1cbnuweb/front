var dpcontainer = document.getElementById("DpageContainer");
var Dpath = "component/domestic.json";
var itemsPerRow = 4;
var totalItems = 1000;
var currentDPage = 1;

function showPDomestic(data) {
  var startDIndex = (currentDPage - 1) * totalItems;
  var endDIndex = Math.min(startDIndex + totalItems, data.length);
  dpcontainer.innerHTML = "";

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
    <a><del>${data[i].preprice}</del></a>
    <p style="color:orange">${data[i].discount}</p>${data[i].price}
    <a>(${data[i].perprice}원/100g)</a>
  `;
    img.src = data[i].img;
    img.className = "img";
  
    
    divRow.appendChild(divItem); // 현재 줄에 아이템 추가
    divItem.appendChild(img);
  
    
  }
}

function loadDpJSON(callback) {
  $.getJSON(Dpath, function (data) {
    callback(data);
  });
}

function loadrowpJSON(callback) {
  $.getJSON(Dpath, function (data) {
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
  showPDomestic(data);
});
