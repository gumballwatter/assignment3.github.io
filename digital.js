'use strict'
// Biến thay đổi title 
let title = document.querySelector('h1');

// Khi click vào link nằm trong project-CV, sẽ đưa đến trang web digital chứa tất cả thông tin project-CV
if (document.location.href.includes('project-cv')) {
    title.innerHTML = 'Project Charter - CV WEBS'
    let all = document.querySelectorAll('.cv');
    all.forEach(element => {
        element.style.display = 'grid';
    });
}
// Khi click vào link nằm trong project-pets, sẽ đưa đến trang web digital chứa tất cả thông tin project-pets
else if (document.location.href.includes('project-pets')) {
    title.innerHTML = 'Project Charter - Pets WEBS'
    let all = document.querySelectorAll('.pets');
    all.forEach(element => {
        element.style.display = 'grid';
    });
}
// Khi click vào link nằm trong project-news, sẽ đưa đến trang web digital chứa tất cả thông tin project-news
else if (document.location.href.includes('project-news')) {
    title.innerHTML = 'Project Charter - News WEBS'
    let all = document.querySelectorAll('.news');
    all.forEach(element => {
        element.style.display = 'grid';
    });
}