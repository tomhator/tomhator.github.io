// 연락처 복사
function copy(text) {
  // 복사
  navigator.clipboard.writeText(text);

  // 복사완료에 대해 Alert으로 띄우기
  alert("복사되었습니다.");
}

// 네비게이션 메뉴 관련
// 메뉴 열기
function menuOpen(){
  const body = document.body;
  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menu-btn");

  if(menu.classList.contains('active')){
      body.classList.remove('modal-open');
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
  }else{
      body.classList.add('modal-open');
      menuBtn.classList.add('active');
      menu.classList.add('active');
  };
}

// 메뉴 이동
function menuScroll(e){
  const body = document.body;
  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menu-btn");

  const moveTo = e.getAttribute("data-moveTo");
  const el = document.querySelector(`#${moveTo}`);

  body.classList.remove('modal-open');
  menuBtn.classList.remove('active');
  menu.classList.remove('active');


  window.scrollTo({
      top: el.offsetTop + 60,
      behavior: "smooth",
  });
};