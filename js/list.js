const port_wrap = document.getElementById("portfolio-wrap");
const lists = [
    {no: "01",name: "튠더웨이",url: "http://tunetheway.co.kr/"},
    {no: "02",name: "주식회사 허브",url: "https://www.hubltd.co.kr/"},
    {no: "03",name: "두양건축(주)",url: "http://www.dykc.co.kr/"},
    {no: "04",name: "(주)엠펙스메디칼",url: "https://empecs.com/"},
    {no: "05",name: "서울아산센트럴내과",url: "http://centralclinic.co.kr/"},
    {no: "06",name: "한양대학교 방사선 안전기술 컨퍼런스",url: "http://radiconference.hanyang.ac.kr/"},
    {no: "07",name: "(사)대한필름시공기술인협회",url: "http://katt.or.kr/"},
    {no: "08",name: "베스트로",url: "http://www.bestlo.co.kr/"},
    {no: "09",name: "(주)타임게이트",url: "https://tg-cloud.co.kr/"},
    {no: "10",name: "(주)선구건설",url: "http://sungucon.com/"},
    {no: "11",name: "쥬리필름",url: "http://zurifilm.com/"},
    {no: "12",name: "(주)리드헬스케어",url: "https://leadhealthcarekorea.com/"},
    {no: "13",name: "대경로보텍(주)",url: "http://dkrobotec.co.kr/"},
    {no: "14",name: "인하대학교 인공지능 반도체 공학 융합전공",url: "http://aise.inha.ac.kr/"},
    {no: "15",name: "밝은한의원",url: "http://brightorien.com/"},
    {no: "16",name: "㈜타이거앤드파트너스",url: "http://www.tigernpartners.com/"},
    {no: "17",name: "한국컴플라이언스평가원",url: "http://hctc.kr/"},
    {no: "18",name: "삼우에이블",url: "http://samwooworld.com/"},
    {no: "19",name: "(주)에이치디자인그룹",url: "http://hdesigngr.com/"}
];

for(var i = 0; i < lists.length; i++){
    // const link = document.createElement(`<a href="${lists[i].url}" class="portfolio-link" target="_blank"><span class="image"><img src="./image/portfolio${lists[i].no}.jpg" alt="${lists[i].name}"></span><span class="comp-name">${lists[i].name}</span></a>`); 
    const link = document.createElement(`a`);
    
    link.setAttribute("href", lists[i].url);
    link.setAttribute("class", "portfolio-link");
    link.innerHTML = `<span class="image"><img src="./image/portfolio${lists[i].no}.jpg" alt="${lists[i].name}"></span><span class="comp-name">${lists[i].name}</span>`;

    port_wrap.appendChild(link);
}