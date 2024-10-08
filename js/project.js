import lists from "./list.js";

function PortfolioList(target){
    const port_wrap = document.getElementById(target);
    for(var i = 0; i < lists.length; i++){
      const workList = document.createElement(`li`);
      
      workList.setAttribute("class", "portfolio-link col");
      workList.setAttribute("data-li-id", lists[i].id);
    
      workList.innerHTML = `
        <a href="${lists[i].url}" target="_blank" class="link-box">
          <span class="image"><img src="./image/portfolio${lists[i].id}.JPG" alt="${lists[i].company}" class="img-responsive"></span>
          <span class="text">
            <span class="name">${lists[i].company}</span>
            <span class="days">참여도: ${lists[i].part}</span>
            <span class="days">작업기간: ${lists[i].days}일</span>
          </span>
        </a>
      `;
    
      port_wrap.appendChild(workList);
    }
  }
  
  
  PortfolioList("portfolio-list");