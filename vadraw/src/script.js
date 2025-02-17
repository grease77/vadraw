// 獎項資料
const prizes = [
    { id: 1, name: "獎品一", description: "SONY BRAVIA 32吋電視", image: "https://store.sony.com.tw/resource/file/product_files/KD-32W830L/01_471ea5826.jpg" },
    { id: 2, name: "獎品二", description: "這是第二個獎品", image: "https://via.placeholder.com/200x150?text=Prize+2" },
    { id: 3, name: "獎品三", description: "這是第三個獎品", image: "https://via.placeholder.com/200x150?text=Prize+3" },
    { id: 4, name: "獎品四", description: "這是第四個獎品", image: "https://via.placeholder.com/200x150?text=Prize+4" },
    { id: 5, name: "獎品五", description: "這是第五個獎品", image: "https://via.placeholder.com/200x150?text=Prize+5" },
];

// 顯示獎品的模態視窗
function openModal(prize) {
    const modal = document.getElementById('prize-modal');
    document.getElementById('prize-image').src = prize.image;
    document.getElementById('prize-description').innerText = prize.description;
    document.getElementById('prize-modal').style.display = 'flex';
    const clickedItem = document.querySelector(`.lottery-item[data-id="${prize.id}"]`);
    clickedItem.classList.add('clicked');
    clickedItem.style.pointerEvents = 'none';  // 禁用已選取的矩形的點擊事件
}

// 關閉模態視窗
function closeModal() {
    document.getElementById('prize-modal').style.display = 'none';
}

// 監聽每個矩形的點擊事件
const items = document.querySelectorAll('.lottery-item');
items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('clicked')) {
            return;  // 如果已經點擊過，則不再處理
        }
        const prizeId = item.getAttribute('data-id');
        const prize = prizes.find(p => p.id == prizeId);
        openModal(prize);
    });
});

