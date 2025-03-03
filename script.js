const prizes = [
  { id: 1,  name: "IPHONE 16 PRO MAX",   description: "256G (價值44,900)",   image: "https://i4.momoshop.com.tw/1734110195/goodsimg/0013/241/676/13241676_O_m.webp", heartText: "01獎" },
  { id: 2,  name: "獎品二",   description: "這是獎品二的描述",   image: "https://example.com/image2.jpg", heartText: "H2" },
  { id: 3,  name: "獎品三",   description: "這是獎品三的描述",   image: "https://example.com/image3.jpg", heartText: "H3" },
  { id: 4,  name: "獎品四",   description: "這是獎品四的描述",   image: "https://example.com/image4.jpg", heartText: "H4" },
  { id: 5,  name: "獎品五",   description: "這是獎品五的描述",   image: "https://example.com/image5.jpg", heartText: "H5" },
  { id: 6,  name: "獎品六",   description: "這是獎品六的描述",   image: "https://example.com/image6.jpg", heartText: "H6" },
  { id: 7,  name: "獎品七",   description: "這是獎品七的描述",   image: "https://example.com/image7.jpg", heartText: "H7" },
  { id: 8,  name: "獎品八",   description: "這是獎品八的描述",   image: "https://example.com/image8.jpg", heartText: "H8" },
  { id: 9,  name: "獎品九",   description: "這是獎品九的描述",   image: "https://example.com/image9.jpg", heartText: "H9" },
  { id: 10, name: "獎品十",   description: "這是獎品十的描述",   image: "https://example.com/image10.jpg", heartText: "H10" },
  { id: 11, name: "獎品十一", description: "這是獎品十一的描述", image: "https://example.com/image11.jpg", heartText: "H11" },
  { id: 12, name: "獎品十二", description: "這是獎品十二的描述", image: "https://example.com/image12.jpg", heartText: "H12" },
  { id: 13, name: "獎品十三", description: "這是獎品十三的描述", image: "https://example.com/image13.jpg", heartText: "H13" },
  { id: 14, name: "獎品十四", description: "這是獎品十四的描述", image: "https://example.com/image14.jpg", heartText: "H14" },
  { id: 15, name: "獎品十五", description: "這是獎品十五的描述", image: "https://example.com/image15.jpg", heartText: "H15" },
  { id: 16, name: "獎品十六", description: "這是獎品十六的描述", image: "https://example.com/image16.jpg", heartText: "H16" },
  { id: 17, name: "獎品十七", description: "這是獎品十七的描述", image: "https://example.com/image17.jpg", heartText: "H17" },
  { id: 18, name: "獎品十八", description: "這是獎品十八的描述", image: "https://example.com/image18.jpg", heartText: "H18" },
  { id: 19, name: "獎品十九", description: "這是獎品十九的描述", image: "https://example.com/image19.jpg", heartText: "H19" },
  { id: 20, name: "獎品二十", description: "這是獎品二十的描述", image: "https://example.com/image20.jpg", heartText: "H20" },
  { id: 21, name: "獎品二十一", description: "這是獎品二十一的描述", image: "https://example.com/image21.jpg", heartText: "H21" },
  { id: 22, name: "獎品二十二", description: "這是獎品二十二的描述", image: "https://example.com/image22.jpg", heartText: "H22" },
  { id: 23, name: "獎品二十三", description: "這是獎品二十三的描述", image: "https://example.com/image23.jpg", heartText: "H23" },
  { id: 24, name: "獎品二十四", description: "這是獎品二十四的描述", image: "https://example.com/image24.jpg", heartText: "24獎" },
  { id: 25, name: "獎品二十五", description: "這是獎品二十五的描述", image: "https://example.com/image24.jpg", heartText: "25獎" },
  { id: 26, name: "獎品二十六", description: "這是獎品二十六的描述", image: "https://example.com/image24.jpg", heartText: "26獎" },
  { id: 27, name: "獎品二十七", description: "這是獎品二十七的描述", image: "https://example.com/image24.jpg", heartText: "27獎" },
  { id: 28, name: "獎品二十八", description: "這是獎品二十八的描述", image: "https://example.com/image24.jpg", heartText: "28獎" },
  { id: 29, name: "獎品二十九", description: "這是獎品二十九的描述", image: "https://example.com/image24.jpg", heartText: "29獎" },
  { id: 30, name: "獎品三十", description: "這是獎品三十的描述", image: "https://example.com/image24.jpg", heartText: "30獎" },
  { id: 31, name: "獎品三十一", description: "這是獎品三十一的描述", image: "https://example.com/image24.jpg", heartText: "31獎" },
  { id: 32, name: "獎品三十二", description: "這是獎品三十二的描述", image: "https://example.com/image24.jpg", heartText: "32獎" },
  { id: 33, name: "獎品三十三", description: "這是獎品三十三的描述", image: "https://example.com/image24.jpg", heartText: "33獎" },
  { id: 34, name: "獎品三十四", description: "這是獎品三十四的描述", image: "https://example.com/image24.jpg", heartText: "34獎" },
];

// (B) 生成 24 張卡牌
const container = document.querySelector('.lottery-container');
for (let i = 1; i <= 34; i++) {
  const item = document.createElement('div');
  item.classList.add('lottery-item');
  item.dataset.id = i;
  container.appendChild(item);
}

// (C) 卡牌在背景圖上對應的位置 (以百分比表示，請根據背景圖實際位置微調)
const cardPositions = [
    { top: 0.205, left: 0.034},
  { top: 0.205, left: 0.11 },
  { top: 0.205, left: 0.1875},
  { top: 0.205, left: 0.265 },
  { top: 0.205, left: 0.342},
  { top: 0.205, left: 0.42 },
  { top: 0.205, left: 0.496 },
  { top: 0.205, left: 0.573},
  { top: 0.205, left: 0.65},
  { top: 0.205, left: 0.727 },
  { top: 0.205, left: 0.803},
  { top: 0.205, left: 0.88},
  { top: 0.445, left: 0.034 },
  { top: 0.445, left: 0.11 },
  { top: 0.445, left: 0.1875 },
  { top: 0.445, left: 0.265 },
  { top: 0.445, left: 0.342 },
  { top: 0.445, left: 0.42 },
  { top: 0.445, left: 0.496 },
  { top: 0.445, left: 0.573 },
  { top: 0.445, left: 0.65 },
  { top: 0.445, left: 0.727 },
  { top: 0.445, left: 0.803 },
  { top: 0.445, left: 0.88 },
  { top: 0.682, left: 0.11 },
  { top: 0.682, left: 0.1875 },
  { top: 0.682, left: 0.265 },
  { top: 0.682, left: 0.342 },
  { top: 0.682, left: 0.42 },
  { top: 0.682, left: 0.496 },
  { top: 0.682, left: 0.573 },
  { top: 0.682, left: 0.65 },
  { top: 0.682, left: 0.727 },
  { top: 0.682, left: 0.803 },
];

// (D) 動態計算並定位卡牌的位置
function placeCards() {
  const bg = document.querySelector('.lottery-background');
  const items = document.querySelectorAll('.lottery-item');
  const bgRect = bg.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  items.forEach((card, i) => {
    const pos = cardPositions[i];
    if (!pos) return;
    const cardLeft = bgRect.left - containerRect.left + bgRect.width * pos.left;
    const cardTop  = bgRect.top  - containerRect.top  + bgRect.height * pos.top;
    card.style.left = cardLeft + 'px';
    card.style.top  = cardTop  + 'px';
  });
}

// (E) 畫面縮放或載入時重新定位卡牌
window.addEventListener('resize', placeCards);
window.addEventListener('load', placeCards);

// (F) Modal 彈窗邏輯

// 開啟 Modal 並動態更新獎品名稱、圖片及敘述
function openModal(prize) {
  document.getElementById('prize-name').innerText = prize.name;
  document.getElementById('prize-image').src = prize.image;
  document.getElementById('prize-description').innerText = prize.description;
  document.getElementById('heart-text').innerText = prize.heartText;
  document.getElementById('prize-modal').style.display = 'flex';

  // 標記已點擊過的卡牌，並禁用再點擊
  const clickedItem = document.querySelector(`.lottery-item[data-id="${prize.id}"]`);
  if (clickedItem) {
    clickedItem.classList.add('clicked');
    clickedItem.style.pointerEvents = 'none';
  }
}

// 關閉 Modal
function closeModal() {
  document.getElementById('prize-modal').style.display = 'none';
}

// (G) 卡牌點擊事件 - 依據點擊的卡牌動態載入對應獎品資料
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.lottery-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('clicked')) return;
      const prizeId = parseInt(item.dataset.id, 10);
      const prize = prizes.find(p => p.id === prizeId);
      if (prize) {
        openModal(prize);
      }
    });
  });
});