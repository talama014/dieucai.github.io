// Lấy các phần tử HTML liên quan
const eventLinks = document.querySelectorAll('.event-link'); // Link hoạt động
const popup = document.getElementById('popup'); // Cửa sổ pop-up
const popupTitle = document.getElementById('popup-title'); // Tiêu đề trong pop-up
const popupDetails = document.getElementById('popup-details'); // Nội dung trong pop-up
const popupImage = document.getElementById('popup-image'); // Ảnh chính trong pop-up
const closeBtn = document.querySelector('.close-btn'); // Nút đóng pop-up
const prevBtn = document.querySelector('.prev-btn'); // Nút điều hướng trái
const nextBtn = document.querySelector('.next-btn'); // Nút điều hướng phải
const popupDescription = document.getElementById('popup-description');

// Biến lưu trữ danh sách hình ảnh và chỉ mục hiện tại
let currentImages = [];
let currentIndex = 0;

// Gắn sự kiện click cho từng hoạt động
eventLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định (chuyển trang)

        // Lấy thông tin từ data attributes
        const title = link.getAttribute('data-title');
        const details = link.getAttribute('data-author');
        const images = link.getAttribute('data-images').split(',');
        const description = link.getAttribute('data-description');
        

        currentImages = images; // Lưu danh sách hình ảnh
        currentIndex = 0; // Đặt chỉ mục về hình ảnh đầu tiên

        // Hiển thị thông tin trong pop-up
        popupTitle.textContent = title;
        popupDetails.textContent = details;
        popupImage.setAttribute('src', currentImages[currentIndex]);
        popupDescription.textContent = description;

        // Hiển thị pop-up
        popup.style.display = 'flex';
    });
});

// Đóng pop-up khi nhấn vào nút đóng
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Đóng pop-up khi nhấn ra ngoài nội dung pop-up
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Xử lý nút điều hướng trái
prevBtn.addEventListener('click', () => {
    if (currentImages.length > 0) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length; // Quay vòng
        popupImage.setAttribute('src', currentImages[currentIndex]);
    }
});

// Xử lý nút điều hướng phải
nextBtn.addEventListener('click', () => {
    if (currentImages.length > 0) {
        currentIndex = (currentIndex + 1) % currentImages.length; // Quay vòng
        popupImage.setAttribute('src', currentImages[currentIndex]);
    }
});
