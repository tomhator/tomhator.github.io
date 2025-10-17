// Study 데이터
const studyData = [
    {
        id: 1,
        title: "간호사 근무표 자동화",
        status: "completed",
        description: "수간호사의 경험적 지식과 AI 기반 바이브 코딩을 결합하여, 복잡한 제약 조건을 반영한 '최적화 자동화 솔루션' 프로젝트.",
        githubUrl: "https://nurse-schdule-2jyi4jag7-yusungs-projects.vercel.app/",
        technologies: ["Cursor AI", "Vibe Coding", "Next.js", "TypeScript"],
        startDate: "2025-10 (총 6일)",
        endDate: null
    },
    {
        id: 2,
        title: "Next.js 학습",
        status: "completed",
        description: "Next.js 프레임워크를 활용한 웹 개발 학습",
        githubUrl: "https://github.com/tomhator/learn-nextjs",
        technologies: ["Next.js", "React", "TypeScript"],
        startDate: "2025-06",
        endDate: "2025-06"
    },
    {
        id: 3,
        title: "당근마켓 클론 프로젝트",
        status: "in-progress",
        description: "당근마켓을 모티브로 한 중고거래 플랫폼 개발",
        githubUrl: "https://github.com/tomhator/carrot-market-reloaded",
        technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
        startDate: "2025-07",
        endDate: null
    }
];

// Study 섹션 렌더링
function renderStudySection() {
    const studyList = document.getElementById('study-list');
    if (!studyList) return;

    studyList.innerHTML = studyData.map(study => `
        <div class="study-item">
            <div class="study-header">
                <h4>${study.title}</h4>
                <span class="status ${study.status}">
                    ${study.status === 'completed' ? '완료' : '진행중'}
                </span>
            </div>
            <p class="study-desc">${study.description}</p>
            <div class="study-tech">
                <span class="tech-label">기술 스택:</span>
                <div class="tech-tags">
                    ${study.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="study-period">
                <span class="period-label">기간:</span>
                <span class="period-text">
                    ${study.startDate} ~ ${study.endDate || '진행중'}
                </span>
            </div>
            <div class="study-links">
                <a href="${study.githubUrl}" target="_blank" class="study-link">
                    <span class="material-symbols-outlined">code</span>
                    ${study.title === "간호사 근무표 자동화" ? "Visit" : "GitHub"}
                </a>
            </div>
        </div>
    `).join('');
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    renderStudySection();
});
