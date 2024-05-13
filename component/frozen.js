var fcontainer = document.getElementById("frozenContainer");
var Fpath = "component/frozen.json";
var itemsPerPage = 4;
var currentFPage = 1;

function showFrozen(data) {
  var startFIndex = (currentFPage - 1) * itemsPerPage;
  var endFIndex = Math.min(startFIndex + itemsPerPage, data.length);
  fcontainer.innerHTML = "";

  for (var i = startFIndex; i < endFIndex; i++) {
    var div = document.createElement("div");
    div.className = "item";
    div.innerHTML =
      "<h3>" + data[i].name + "</h3><p>" + data[i].description + "</p>";
    fcontainer.appendChild(div);
  }
}

function loadFJSON(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", Fpath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == "200") {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
}

// 이전 페이지 버튼 생성
var prevFButton = document.createElement("button");
var prevFimg = document.createElement("img");
prevFButton.className="btn";
prevFimg.src="css/black.png";
prevFimg.className="prevbtn";
prevFButton.appendChild(prevFimg);
prevFButton.onclick = prevFPage; // prevPage 함수를 클릭 이벤트 핸들러로 등록

// 다음 페이지 버튼 생성
var nextFButton = document.createElement("button");
var nextFimg = document.createElement("img");
nextFButton.className="btn";
nextFimg.src="css/black.png";
nextFimg.className="nextbtn";
nextFButton.appendChild(nextFimg);
nextFButton.onclick = nextFPage; // nextPage 함수를 클릭 이벤트 핸들러로 등록

// 버튼을 컨테이너 앞뒤에 추가
fcontainer.parentNode.insertBefore(prevFButton, fcontainer);
fcontainer.parentNode.insertBefore(nextFButton, fcontainer.nextSibling);

function prevFPage() {
  if (currentFPage > 1) {
    currentFPage--;
    loadFJSON(function (data) {
      showFrozen(data);
    });
  }
}

function nextFPage() {
  currentFPage++;
  loadFJSON(function (data) {
    showFrozen(data);
  });
}

loadFJSON(function (data) {
  showFrozen(data);
});
