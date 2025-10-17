// Import removed for file:// protocol compatibility

function PortfolioList(target, listsData){
    const port_wrap = document.getElementById(target);
    if (!port_wrap) {
        console.error(`Element with id "${target}" not found`);
        return;
    }
    
    if (!listsData || listsData.length === 0) {
        console.error('No portfolio data available');
        return;
    }
    
    for(var i = 0; i < listsData.length; i++){
      const workList = document.createElement(`li`);
      
      workList.setAttribute("class", "portfolio-link col");
      workList.setAttribute("data-li-id", listsData[i].id);
    
      workList.innerHTML = `
        <a href="${listsData[i].url}" target="_blank" class="link-box">
          <span class="image"><img src="./image/portfolio${listsData[i].id}.JPG" alt="${listsData[i].company}" class="img-responsive"></span>
          <span class="text">
            <span class="name">${listsData[i].company}</span>
            <span class="days">참여도: ${listsData[i].part}</span>
            <span class="days">작업기간: ${listsData[i].days}일</span>
          </span>
        </a>
      `;
    
      port_wrap.appendChild(workList);
    }
  }
  
// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // lists 변수가 정의되었는지 확인 (약간의 지연을 두고 재시도)
    function tryLoadPortfolio() {
        if (typeof window.lists !== 'undefined' && window.lists && window.lists.length > 0) {
            PortfolioList("portfolio-list", window.lists);
        } else {
            console.log('lists not ready, retrying...');
            setTimeout(tryLoadPortfolio, 100);
        }
    }
    
    tryLoadPortfolio();
});