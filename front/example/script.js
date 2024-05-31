const buttons = document.querySelectorAll('.my-button');
const contentBoxes = document.querySelectorAll('.content-box');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 모든 버튼의 active 클래스 제거
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // 클릭한 버튼에 active 클래스 추가
    button.classList.add('active');
    
    // 모든 콘텐츠 박스의 active 클래스 제거
    contentBoxes.forEach(box => box.classList.remove('active'));
    
    // 클릭한 버튼에 해당하는 콘텐츠 박스에 active 클래스 추가
    contentBoxes[index].classList.add('active');
  });
});
