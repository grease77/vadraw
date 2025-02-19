// 定義 24 個獎品，每個使用不同的圖片
const prizes = [
  { id: 1, name: "獎品一", description: "這是獎品一的描述", image: "https://example.com/image1.jpg" },
  { id: 2, name: "獎品二", description: "這是獎品二的描述", image: "https://example.com/image2.jpg" },
  { id: 3, name: "獎品三", description: "這是獎品三的描述", image: "https://example.com/image3.jpg" },
  { id: 4, name: "獎品四", description: "這是獎品四的描述", image: "https://example.com/image4.jpg" },
  { id: 5, name: "獎品五", description: "這是獎品五的描述", image: "https://example.com/image5.jpg" },
  { id: 6, name: "獎品六", description: "這是獎品六的描述", image: "https://example.com/image6.jpg" },
  { id: 7, name: "獎品七", description: "這是獎品七的描述", image: "https://example.com/image7.jpg" },
  { id: 8, name: "獎品八", description: "這是獎品八的描述", image: "https://example.com/image8.jpg" },
  { id: 9, name: "獎品九", description: "這是獎品九的描述", image: "https://example.com/image9.jpg" },
  { id: 10, name: "獎品十", description: "這是獎品十的描述", image: "https://example.com/image10.jpg" },
  { id: 11, name: "獎品十一", description: "這是獎品十一的描述", image: "https://example.com/image11.jpg" },
  { id: 12, name: "獎品十二", description: "這是獎品十二的描述", image: "https://example.com/image12.jpg" },
  { id: 13, name: "獎品十三", description: "這是獎品十三的描述", image: "https://example.com/image13.jpg" },
  { id: 14, name: "獎品十四", description: "這是獎品十四的描述", image: "https://example.com/image14.jpg" },
  { id: 15, name: "獎品十五", description: "這是獎品十五的描述", image: "https://example.com/image15.jpg" },
  { id: 16, name: "獎品十六", description: "這是獎品十六的描述", image: "https://example.com/image16.jpg" },
  { id: 17, name: "獎品十七", description: "這是獎品十七的描述", image: "https://example.com/image17.jpg" },
  { id: 18, name: "獎品十八", description: "這是獎品十八的描述", image: "https://example.com/image18.jpg" },
  { id: 19, name: "獎品十九", description: "這是獎品十九的描述", image: "https://example.com/image19.jpg" },
  { id: 20, name: "獎品二十", description: "這是獎品二十的描述", image: "https://example.com/image20.jpg" },
  { id: 21, name: "獎品二十一", description: "這是獎品二十一的描述", image: "https://example.com/image21.jpg" },
  { id: 22, name: "獎品二十二", description: "這是獎品二十二的描述", image: "https://example.com/image22.jpg" },
  { id: 23, name: "獎品二十三", description: "這是獎品二十三的描述", image: "https://example.com/image23.jpg" },
  { id: 24, name: "獎品二十四", description: "這是獎品二十四的描述", image: "https://example.com/image24.jpg" },
];

// 顯示獎品的模態視窗
function openModal(prize) {
    document.getElementById('prize-image').src = prize.image;
    document.getElementById('prize-description').innerText = prize.description;
    document.getElementById('prize-modal').style.display = 'flex';

    // 標記已被點擊的矩形並禁用點擊事件
    const clickedItem = document.querySelector(`.lottery-item[data-id="${prize.id}"]`);
    clickedItem.classList.add('clicked');
    clickedItem.style.pointerEvents = 'none';
}

// 關閉模態視窗
function closeModal() {
    document.getElementById('prize-modal').style.display = 'none';
}

// 為每個矩形設定點擊事件
const items = document.querySelectorAll('.lottery-item');
items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('clicked')) return;
        const prizeId = parseInt(item.getAttribute('data-id'));
        const prize = prizes.find(p => p.id === prizeId);
        if (prize) {
            openModal(prize);
        }
    });
});