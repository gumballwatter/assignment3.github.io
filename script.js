'use script'
// biến nội dung thông tin cá nhân
const sectionContent = document.querySelector('.section-content')

// Biến input email và nút submit
const submitEmail = document.querySelector('.submit-email');
const submitButton = document.getElementById('btn-submit')

// Biến khi nhập sai dạng email
const errorEmail = document.getElementById('error-email');

// Hàm xử lý ẩn thông tin cá nhân
const handleSubmit = function () {
    
    // lấy giá trị input và chuyển sang chữ thường
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();
    
    // Biến check email có đúng dạng không
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Dùng match để kiểm tra email dựa vào biến regex
    const checkmail = emailValue.match(regex) 
    
    // hàm if-else, nếu đúng email thì sẽ hiện thông tin, nếu sai sẽ hiện thông báo nhập lại
    if (checkmail) {
        sectionContent.classList.remove('hidden');
        submitEmail.classList.add('hidden')
    }
    else {
        errorEmail.innerHTML='Vui lòng nhập đúng định dạng email'
    }
}
// Ấn vào nút submit sẽ chạy hàm trên
submitButton.addEventListener('click',handleSubmit)

// Biến nội dung cần ẩn
const infoText = document.querySelectorAll('.info-text')
infoText.forEach(element => {
    element.classList.add('hidden')
});
// Chọn nút view more và view less
const viewMoreBtn = document.querySelectorAll('.view-more');
const viewLessBtn = document.querySelectorAll('.view-less')
viewLessBtn.forEach(element => {
    element.classList.add('hidden')
});
// Chọn khối cần ẩn thông tin
const gridInside = document.querySelectorAll('.grid-inside');

// Vòng lặp for để có thể chọn được từng phần tử mong muốn
for (let i = 0; i < viewMoreBtn.length; i++){
    // ẩn tất cả nội dung ban đầu
    viewMoreBtn[i].classList.add('hidden');

    // Khi di chuột vào sẽ hiện ra View More
function handleMouseOverViewMore() {
        viewMoreBtn[i].classList.remove('hidden')
    }
    // Khi di chuột ra View More biến mất
function handleMouseOutViewMore() {
        viewMoreBtn[i].classList.add('hidden')
    }

    // Sau khi click View More, di chuột vào hiện ra View Less
function handleMouseOverViewLess() {
    viewLessBtn[i].classList.remove('hidden')
}
// Sau khi click View More, di chuột ra View Less biến mất
function handleMouseOutViewLess() {
        viewLessBtn[i].classList.add('hidden')
    }

    // Hàm xử lý khi Click View More
function handleViewMore() {
    infoText[i].classList.remove('hidden');
    gridInside[i].addEventListener('mouseover', handleMouseOutViewMore)
    gridInside[i].addEventListener('mouseover', handleMouseOverViewLess)
    gridInside[i].addEventListener('mouseout', handleMouseOutViewLess)
    }
    
    // Hàm xử lý khi click vào View Less
function handleViewLess() {
    infoText[i].classList.add('hidden');
    gridInside[i].removeEventListener('mouseover', handleMouseOutViewMore)
    gridInside[i].removeEventListener('mouseover', handleMouseOverViewLess)
    gridInside[i].addEventListener('mouseover', handleMouseOverViewMore)
    gridInside[i].addEventListener('mouseout', handleMouseOutViewMore)
    }
    
    // Điều kiện ban đầu khi di chuột ra vào vào
    gridInside[i].addEventListener('mouseover', handleMouseOverViewMore)
    gridInside[i].addEventListener('mouseout', handleMouseOutViewMore)

    // Lệnh thực hiện khi click chuột vào view more và view less
    viewMoreBtn[i].addEventListener('click', handleViewMore)
    viewLessBtn[i].addEventListener('click',handleViewLess)
    };