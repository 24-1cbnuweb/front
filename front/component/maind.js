var dcontainer = document.getElementById("domesticContainer");
var Dpath = "component/domestic.json";
var itemsPerPage = 4;
var currentDPage = 1;

function showDomestic(data) {
  var startDIndex = (currentDPage - 1) * itemsPerPage;
  var endDIndex = Math.min(startDIndex + itemsPerPage, data.length);
  dcontainer.innerHTML = "";

  for (var i = startDIndex; i < endDIndex; i++) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = data[i].image;
    img.className = "img";
    div.className = "item";
    div.innerHTML = "<h3>" + data[i].name + "</h3><p>" + data[i].price + "</p>";
    div.appendChild(img);
    dcontainer.appendChild(div);
  }
}

function loadDJSON(callback) {
  $.getJSON(Dpath, function(data) {
    callback(data);
  });
}

// 이전 페이지 버튼 생성
var prevDButton = document.createElement("button");
var prevDimg = document.createElement("img");
prevDButton.className = "btn";
prevDimg.src = "css/black.png";
prevDimg.className = "prevbtn";
prevDButton.appendChild(prevDimg);
prevDButton.onclick = prevDPage;

// 다음 페이지 버튼 생성
var nextDButton = document.createElement("button");
var nextDimg = document.createElement("img");
nextDButton.className = "btn";
nextDimg.src = "css/black.png";
nextDimg.className = "nextbtn";
nextDButton.appendChild(nextDimg);
nextDButton.onclick = nextDPage;

// 버튼을 컨테이너 앞뒤에 추가
dcontainer.parentNode.insertBefore(prevDButton, dcontainer);
dcontainer.parentNode.insertBefore(nextDButton, dcontainer.nextSibling);

function prevDPage() {
  if (currentDPage > 1) {
    currentDPage--;
    loadDJSON(showDomestic);
  }
}

function nextDPage() {
  currentDPage++;
  loadDJSON(showDomestic);
}

// 초기 로드
loadDJSON(showDomestic);

