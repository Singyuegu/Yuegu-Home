function changeLanguage(lang) {
    const data = i18n[lang];
    const container = document.getElementById('main-content');

    // 增加過場動畫
    container.classList.remove('fade-in');
    void container.offsetWidth; // 強制重繪觸發動畫
    container.classList.add('fade-in');

    // 填入文字
    document.getElementById('i18n-name').textContent = data.name;
    document.getElementById('i18n-title').textContent = data.title;
    document.getElementById('i18n-bio').textContent = data.bio;
    document.getElementById('i18n-badge').textContent = data.badge;
    document.getElementById('i18n-skillsTitle').textContent = data.skillsTitle;
    document.getElementById('i18n-expTitle').textContent = data.experienceTitle;
    document.getElementById('i18n-ctaTitle').textContent = data.ctaTitle;
    document.getElementById('i18n-ctaDesc').textContent = data.ctaDesc;

    // 渲染技能
    const skillsGrid = document.getElementById('i18n-skillsGrid');
    skillsGrid.innerHTML = data.skills.map(s => `<div class="card">${s}</div>`).join('');

    // 渲染經歷
    const timeline = document.getElementById('i18n-timeline');
    timeline.innerHTML = data.experiences.map(exp => `
        <div class="timeline-item">
            <span class="date">${exp.date}</span>
            <h3>${exp.role}</h3>
            <p class="company">${exp.company}</p>
            <p>${exp.desc}</p>
        </div>
    `).join('');

    // 更新系統語言標籤
    document.documentElement.lang = lang;

    // 觸發 Flickr 重繪
    window.dispatchEvent(new Event('resize'));
    if (window.Flickr && window.Flickr.embedr && window.Flickr.embedr.init) {
        window.Flickr.embedr.init();
    }
}

// 頁面載入後自動執行一次
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');
});