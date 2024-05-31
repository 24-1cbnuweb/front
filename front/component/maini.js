var icontainer = document.getElementById("importedContainer");
var Ipath = "component/import.json";
var itemsPerPage = 4;
var currentIPage = 1;

function showImport(data) {
  var startIIndex = (currentIPage - 1) * itemsPerPage;
  var endIIndex = Math.min(startIIndex + itemsPerPage, data.length);
  icontainer.innerHTML = "";

  for (var i = startIIndex; i < endIIndex; i++) {
    var div = document.createElement("div");
    div.className = "item";
    div.innerHTML =
      "<h3>" + data[i].name + "</h3><p>" + data[i].description + "</p>";
    icontainer.appendChild(div);
  }
}

function loadIJSON(callback) {
  $.getJSON(Ipath, function(data) {
    callback(data);
  });
}

// 이전 페이지 버튼 생성
var prevIButton = document.createElement("button");
var prevIimg = document.createElement("img");
prevIButton.className="btn";
prevIimg.src="css/black.png";
prevIimg.className="prevbtn";
prevIButton.appendChild(prevIimg);
prevIButton.onclick = prevIPage; // prevPage 함수를 클릭 이벤트 핸들러로 등록

// 다음 페이지 버튼 생성
var nextIButton = document.createElement("button");
var nextIimg = document.createElement("img");
nextIButton.className="btn";
nextIimg.src="css/black.png";
nextIimg.className="nextbtn";
nextIButton.appendChild(nextIimg);
nextIButton.onclick = nextIPage; // nextPage 함수를 클릭 이벤트 핸들러로 등록

// 버튼을 컨테이너 앞뒤에 추가
icontainer.parentNode.insertBefore(prevIButton, icontainer);
icontainer.parentNode.insertBefore(nextIButton, icontainer.nextSibling);

function prevIPage(){
  if (currentIPage > 1) {
    currentIPage--;
    loadIJSON(function (data) {
      showImport(data);
    });
  }
}

function nextIPage() {
  currentIPage++;
  loadIJSON(function (data) {
    showImport(data);
  });
}

loadIJSON(function (data) {
  showImport(data);
});