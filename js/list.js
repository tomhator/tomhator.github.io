const port_wrap = document.getElementById("portfolio-list");

const lists  = [
  {id: "00", company: "대영공업", part: "100%", days: 6, url: "http://daeyoungind.com/"},
  {id: "01", company: "튠더웨이", part: "100%", days: 7, url: "http://tunetheway.co.kr/"},
  {id: "02", company: "주식회사 허브", part: "100%", days: 5, url: "https://www.hubltd.co.kr/"},
  {id: "03", company: "두양건축(주)", part: "100%", days: 5, url: "https://www.dykc.co.kr/"},
  {id: "04", company: "(주)엠펙스메디칼", part: "100%", days: 12, url: "https://empecs.com/"},
  {id: "05", company: "서울아산센트럴내과", part: "100%", days: 4, url: "http://centralclinic.co.kr/"},
  {id: "06", company: "코벤트리대학교 한국공식입학지원처", part: "100%", days: 7, url: "http://coventrykorea.com/"},
  {id: "07", company: "주식회사 제이에스디자인", part: "100%", days: 3, url: "http://jsdesign0101.com/"},
  {id: "08", company: "리드헬스케어", part: "100%", days: 5, url: "https://leadhealthcarekorea.com/"},
  {id: "09", company: "밝은한의원", part: "100%", days: 7, url: "http://brightorien.com/"},
  {id: "10", company: "타이거앤드파트너스", part: "100%", days: 5, url: "http://www.tigernpartners.com/"},
  {id: "11", company: "대경로보텍", part: "100%", days: 5, url: "http://dkrobotec.co.kr/"},
  {id: "12", company: "선구건설", part: "100%", days: 3, url: "http://sungucon.com/"},
  {id: "13", company: "타임게이트", part: "100%", days: 4, url: "https://tg-cloud.co.kr/"},
  {id: "14", company: "에스이테크", part: "100%", days: 3, url: "http://sungwonfa.com/"},
  {id: "15", company: "준푸드앤드컬처", part: "100%", days: 3, url: "https://joonfnc.com/"}
];

for(var i = 0; i < lists.length; i++){
  // const link = document.createElement(`<a href="${lists[i].url}" class="portfolio-link" target="_blank"><span class="image"><img src="./image/portfolio${lists[i].no}.jpg" alt="${lists[i].name}"></span><span class="comp-name">${lists[i].name}</span></a>`); 
  const workList = document.createElement(`li`);
  
  workList.setAttribute("class", "portfolio-link col");
  workList.setAttribute("data-li-id", lists[i].id);

  workList.innerHTML = `
    <a href="${lists[i].url}" target="_blank" class="link-box">
      <span class="image"><img src="./image/portfolio${lists[i].id}.jpg" alt="${lists[i].company}" class="img-responsive"></span>
      <span class="text">
        <span class="name">${lists[i].company}</span>
        <span class="days">참여도: ${lists[i].part}</span>
        <span class="days">작업일: ${lists[i].days}일</span>
      </span>
    </a>
  `;

  port_wrap.appendChild(workList);
}