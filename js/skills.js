const skills  = [
  {id: "00",desc: "HTML 마크업을 능숙하게 다루며, 웹 표준과 접근성을 고려한 구조적인 코드를 작성합니다. 다양한 디바이스와 브라우저 환경에 최적화된 반응형 페이지 제작 경험도 풍부합니다.",},{id: "01",desc: "CSS3를 활용해 다양한 레이아웃과 애니메이션을 구현하며, 시각적으로 완성도 높은 디자인을 제공합니다. 반응형 웹과 크로스브라우징 이슈를 해결해 일관된 사용자 경험을 보장합니다.",},{id: "02",desc: "JavaScript를 활용해 동적인 기능과 인터랙션을 구현합니다. 다양한 라이브러리를 활용하여 고객 요구를 만족시킵니다.",},{desc: "jQuery를 활용해 DOM 조작, 이벤트 처리, 그리고 애니메이션 효과를 손쉽게 구현합니다. 간결한 코드로 유지보수성을 높입니다.",  id: "03", 
  },{id: "04",desc: "Bootstrap을 활용해 반응형 레이아웃과 일관된 디자인 시스템을 구현합니다. 그리드 시스템과 다양한 컴포넌트를 활용해 개발 속도를 높입니다.",},{id: "05",desc: "MVC 모델을 기반으로한 프로젝트들에 참여한 경험이 있으며, 자사 빌더 기능 구현 및 유지보수 관리 경험이 있습니다.",},{id: "06",desc: "자사 빌더 기능을 구현하거나 고객사 홈페이지 내 데이터를 관리한 경험이 있습니다.",},{id: "07",desc: "CodeIgnaiter기반의 자사 빌더에 새로운 기능을 구현하거나 버그 픽스 작업 경험이 있습니다.",},{id: "08",desc: "디자이너로부터 전달받은 시안을 픽셀단위로 확인하여 작업하거나, 이미지를 추출합니다.",},{id: "09",desc: "디자이너로부터 전달받은 시안을 픽셀단위로 확인하여 작업하거나, 이미지를 추출합니다.",},{id: "10",desc: "자사 홈페이지 작업을 하거나 빌더 관련 작업 시 원활한 개발팀과의 협업을 위해 정해진 규칙에 따라 브랜치를 관리하며 코드 충도를 최소화했습니다.",},{id: "11",desc: "개발팀, 서비스 지원팀 등 타팀과의 협업을 통해 프로젝트 이슈와 작업 일정을 관리한 경험이 있습니다.",},{id: "12",desc: "생성된 프로젝트에 대해 담당자들과의 정보 공유를 원할하게 진행했습니다.",},{id: "13",desc: "아임웹 리셀러 계정을 이용해 고객사 홈페이지를 제작했습니다.",},{id: "14",desc: "selenium을 활용하여 웹 크롤러를 구현했습니다.",},
  {id: "15",desc: "Nunjucks를 활용하여 템플릿 엔진을 구현하였습니다.",},{id: "16",desc: "SCSS를 활용하여 스타일을 구현하였습니다. mixin, 변수, 상속 등 다양한 기능을 활용하여 코드를 재사용하고 유지보수를 용이하게 했습니다.",},
];

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('#cursor-follow');
  
  if (!cursor) {
    console.error('Element with id "cursor-follow" not found');
    return;
  }

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX + 10; // document의 x좌표값
    const mouseY = e.pageY + 10; // document의 y좌표값

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  })

  const skill_item = document.querySelectorAll("#skills .skill li");

  skill_item.forEach(item => {
    let num = item.getAttribute('data-hover');
    num = Number(num);

    item.addEventListener('mouseover', (e) => {
      cursor.classList.add("hover");
      cursor.innerHTML = `<p>${skills[num].desc}</p>`
    })
    item.addEventListener('mouseleave', (e) => {
      cursor.classList.remove("hover");
      cursor.innerHTML = `<p></p>`
    })
  })
});