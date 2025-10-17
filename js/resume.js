// list.js가 전역 변수로 설정되므로 import 대신 전역 변수 사용
function ResumePorfolio(target){
    const port_wrap = document.getElementById(target);
    const lists = window.lists;
    
    if (!lists || lists.length === 0) {
        console.error('lists data is not available');
        return;
    }
    
    for(var i = 0; i < lists.length; i++){
      const workList = document.createElement(`div`);
      workList.setAttribute("class", "workList");

      workList.innerHTML = `
        <h6>${lists[i].company}<a href="${lists[i].url}" target="_blank" class="link-box"><span class="material-symbols-outlined">link</span></a></h6>
        <ul>
            <li>참여도: ${lists[i].part}</li>
            <li>작업기간: ${lists[i].days}일</li>
        </ul>
    `;
    
      port_wrap.appendChild(workList);
    }
}
ResumePorfolio("project-list");