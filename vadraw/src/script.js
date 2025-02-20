// (A) 獎品資料，可自行替換網址或內容
const prizes = [
  { id: 1, name: "獎品一",   description: "這是獎品一的描述",   image: "https://example.com/image1.jpg" },
  { id: 2, name: "獎品二",   description: "這是獎品二的描述",   image: "https://example.com/image2.jpg" },
  { id: 3, name: "獎品三",   description: "這是獎品三的描述",   image: "https://example.com/image3.jpg" },
  { id: 4, name: "獎品四",   description: "這是獎品四的描述",   image: "https://example.com/image4.jpg" },
  { id: 5, name: "獎品五",   description: "這是獎品五的描述",   image: "https://example.com/image5.jpg" },
  { id: 6, name: "獎品六",   description: "這是獎品六的描述",   image: "https://example.com/image6.jpg" },
  { id: 7, name: "獎品七",   description: "這是獎品七的描述",   image: "https://example.com/image7.jpg" },
  { id: 8, name: "獎品八",   description: "這是獎品八的描述",   image: "https://example.com/image8.jpg" },
  { id: 9, name: "獎品九",   description: "這是獎品九的描述",   image: "https://example.com/image9.jpg" },
  { id: 10, name: "獎品十",  description: "這是獎品十的描述",  image: "https://example.com/image10.jpg" },
  { id: 11, name: "獎品十一",description: "這是獎品十一的描述",image: "https://example.com/image11.jpg" },
  { id: 12, name: "獎品十二",description: "這是獎品十二的描述",image: "https://example.com/image12.jpg" },
  { id: 13, name: "獎品十三",description: "這是獎品十三的描述",image: "https://example.com/image13.jpg" },
  { id: 14, name: "獎品十四",description: "這是獎品十四的描述",image: "https://example.com/image14.jpg" },
  { id: 15, name: "獎品十五",description: "這是獎品十五的描述",image: "https://example.com/image15.jpg" },
  { id: 16, name: "獎品十六",description: "這是獎品十六的描述",image: "https://example.com/image16.jpg" },
  { id: 17, name: "獎品十七",description: "這是獎品十七的描述",image: "https://example.com/image17.jpg" },
  { id: 18, name: "獎品十八",description: "這是獎品十八的描述",image: "https://example.com/image18.jpg" },
  { id: 19, name: "獎品十九",description: "這是獎品十九的描述",image: "https://example.com/image19.jpg" },
  { id: 20, name: "獎品二十",description: "這是獎品二十的描述",image: "https://example.com/image20.jpg" },
  { id: 21, name: "獎品二十一",description: "這是獎品二十一的描述",image: "https://example.com/image21.jpg" },
  { id: 22, name: "獎品二十二",description: "這是獎品二十二的描述",image: "https://example.com/image22.jpg" },
  { id: 23, name: "獎品二十三",description: "這是獎品二十三的描述",image: "https://example.com/image23.jpg" },
  { id: 24, name: "獎品二十四",description: "這是獎品二十四的描述",image: "https://example.com/image24.jpg" },
];

// (B) 生成 24 張卡牌 (固定尺寸)
const container = document.querySelector('.lottery-container');
for (let i = 1; i <= 24; i++) {
  const item = document.createElement('div');
  item.classList.add('lottery-item');
  item.dataset.id = i;
  container.appendChild(item);
}

/* 
  (C) 每張卡牌在背景圖的對應位置(百分比)
  top、left 都是 0~1 之間的小數，表示相對於背景圖(寬、高)的比例位置。
  請根據你的背景圖上數字實際位置來調整。
*/
const cardPositions = [
   { top: 0.205, left: 0.14 },
  { top: 0.205, left: 0.225 },
  { top: 0.205, left: 0.309 },
  { top: 0.205, left: 0.394 },
  { top: 0.205, left: 0.477 },
  { top: 0.205, left: 0.561 },
  { top: 0.205, left: 0.645 },
  { top: 0.205, left: 0.73 },
  { top: 0.445, left: 0.14 },
  { top: 0.445, left: 0.225 },
  { top: 0.445, left: 0.309 },
  { top: 0.445, left: 0.394 },
  { top: 0.445, left: 0.477 },
  { top: 0.445, left: 0.561},
  { top: 0.445, left: 0.645 },
  { top: 0.445, left: 0.73 },
  { top: 0.682, left: 0.14 },
  { top: 0.682, left: 0.225 },
  { top: 0.682, left: 0.309 },
  { top: 0.682, left: 0.394 },
  { top: 0.682, left: 0.477 },
  { top: 0.682, left: 0.561 },
  { top: 0.682, left: 0.645 },
  { top: 0.682, left: 0.73 },

];

// (D) 動態計算卡牌位置，對準背景圖
function placeCards() {
  const bg = document.querySelector('.lottery-background');
  const items = document.querySelectorAll('.lottery-item');
  const bgRect = bg.getBoundingClientRect();        // 背景圖真實位置
  const containerRect = container.getBoundingClientRect(); // 容器位置

  items.forEach((card, i) => {
    const pos = cardPositions[i];
    if (!pos) return;

    // 以背景圖的左上角為 (0,0)，計算卡牌絕對位置 (px)
    const cardLeft = bgRect.left - containerRect.left + bgRect.width * pos.left;
    const cardTop  = bgRect.top  - containerRect.top  + bgRect.height * pos.top;

    card.style.left = cardLeft + 'px';
    card.style.top  = cardTop  + 'px';
  });
}

// (E) 視窗縮放或載入時，重新定位卡牌
window.addEventListener('resize', placeCards);
window.addEventListener('load', placeCards);

// (F) Modal 彈窗邏輯
function openModal(prize) {
  document.getElementById('prize-image').src = prize.image;
  document.getElementById('prize-description').innerText = prize.description;
  document.getElementById('prize-modal').style.display = 'flex';

  // 標記已被點擊的卡牌並禁用點擊
  const clickedItem = document.querySelector(`.lottery-item[data-id="${prize.id}"]`);
  clickedItem.classList.add('clicked');
  clickedItem.style.pointerEvents = 'none';
}

function closeModal() {
  document.getElementById('prize-modal').style.display = 'none';
}

// (G) 卡牌點擊事件：打開對應獎品彈窗
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