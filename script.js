function changeLanguage(lang) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.remove('active'));

    const target = document.getElementById(lang + '-content');
    if (target) {
        target.classList.add('active');
        // 同時更改網頁語系標籤（有利於 SEO）
        document.documentElement.lang = lang;
    }
}