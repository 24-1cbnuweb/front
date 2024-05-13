var dcontainer = document.getElementById("domesticContainer");
var Dpath = "component/sample.json";
var itemsPerPage = 4;
var currentDPage = 1;

function showDomestic(data) {
  var startDIndex = (currentDPage - 1) * itemsPerPage;
  var endDIndex = Math.min(startDIndex + itemsPerPage, data.length);
  dcontainer.innerHTML = "";

  for (var i = startDIndex; i < endDIndex; i++) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src=data[i].image;
    img.className = "img";
    div.className = "item";
    div.innerHTML =
      "<h3>" + data[i].name + "</h3><p>" + data[i].description + "</p>";
    
    dcontainer.appendChild(div);
    div.appendChild(img);
    
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

// 이전 페이지 버튼 생성
var prevDButton = document.createElement("button");
var prevDimg = document.createElement("img");
prevDButton.className="btn";
prevDimg.src="css/black.png";
prevDimg.className="prevbtn";
prevDButton.appendChild(prevDimg);
prevDButton.onclick = prevDPage; // prevPage 함수를 클릭 이벤트 핸들러로 등록

// 다음 페이지 버튼 생성
var nextDButton = document.createElement("button");
var nextDimg = document.createElement("img");
nextDButton.className="btn";
nextDimg.src="css/black.png";
nextDimg.className="nextbtn";
nextDButton.appendChild(nextDimg);
nextDButton.onclick = nextDPage; // nextPage 함수를 클릭 이벤트 핸들러로 등록

// 버튼을 컨테이너 앞뒤에 추가
dcontainer.parentNode.insertBefore(prevDButton, dcontainer);
dcontainer.parentNode.insertBefore(nextDButton, dcontainer.nextSibling);

function prevDPage(){
  if (currentDPage > 1) {
    currentDPage--;
    loadDJSON(function (data) {
      showDomestic(data);
    });
  }
}

function nextDPage() {
  currentDPage++;
  loadDJSON(function (data) {
    showDomestic(data);
  });
}

loadDJSON(function (data) {
  showDomestic(data);
});
