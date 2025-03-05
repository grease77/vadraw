const prizes = [
  { id: 1,  name: "Dyson 造型捲髮器",   description: "桃紅色 (價值14,600)",   image: "https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8159704/1/638683990731070000?v=1", heartText: "13獎",imageWidth: 320,imageOffsetX:15,imageOffsetY:-5},
  { id: 2,  name: "iPhone 16 (2名)",   description: "白色256G (價值33,400)",   image: "https://s.eslite.com/b2b/newItem/2024/09/10/1581_175843130_704_1.jpg", heartText: "03獎",imageWidth:350,imageOffsetX:11,imageOffsetY:15},
  { id: 3,  name: "Dyson Airstrait 吹風直髮器 (2名)",   description: "粉霧玫瑰色 (價值16,600)",   image: "https://dysonshop.blob.core.windows.net/products/dyson-airstrait-hair-straightener-ceramic-pink-refurbished/gallery/1.jpg", heartText: "11獎",imageWidth:535,imageOffsetX:11,imageOffsetY:10 },
  { id: 4,  name: "Philips 自動研磨美式咖啡機",   description: "",   image: "https://i2.momoshop.com.tw/1739964635/goodsimg/0012/797/459/12797459_OR.webp", heartText: "19獎",imageWidth:370,imageOffsetX:10,imageOffsetY:18 },
  { id: 5,  name: "LV Rosalie 零錢包",   description: "(價值13,900)",   image: "https://tw.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rosalie-coin-purse--M62361_PM1_Side%20view.png?wid=1090&hei=1090", heartText: "15獎",imageWidth:550,imageOffsetX:15,imageOffsetY:-100},
  { id: 6,  name: "現金 6000元 (10名)",   description: "",   image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "25獎",imageWidth:400,imageOffsetX:16 },
  { id: 7,  name: "郵政現金禮券 12,000元",   description: "",   image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "16獎",imageWidth:400,imageOffsetX:16 },
  { id: 8,  name: "LG 抗菌循環扇空氣清淨機 (2名)",   description: "(價值24,900)",   image: "https://www.lg.com/content/dam/channel/wcms/tw/images/small-appliances/as601dpt0_att_eatt_tw_c/gallery/large02.jpg", heartText: "5獎",imageWidth:475,imageOffsetY:10,imageOffsetX:14 },
  { id: 9,  name: "富士 instax mini 12 拍立得 (2名)",   description: "粉彩藍色",   image: "https://img.pchome.com.tw/cs/items/DGADJHA900G7MJL/000001_1695007597.jpg", heartText: "33獎",imageWidth:280,imageOffsetY:15,imageOffsetX:15},
  { id: 10, name: "Sodastream GAIA 氣泡水機 (2名)",   description: "白色款",   image: "https://online.carrefour.com.tw/on/demandware.static/-/Sites-carrefour-tw-m-inner/default/dw42a1bb5a/images/large/41217022002-P1.jpg", heartText: "28獎",imageWidth:330,imageOffsetY:18,imageOffsetX:10 },
  { id: 11, name: "新光三越禮券 5000元 (2名)", description: "", image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "27獎",imageWidth:400,imageOffsetX:16 },
  { id: 12, name: "AirPods Pro 2 (2名)", description: "", image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724041669458", heartText: "23獎",imageOffsetY:18,imageOffsetX:10},
  { id: 13, name: "CHANEL 綠漾潤澤禮盒", description: "", image: "https://img.ltn.com.tw/Upload/style/page/2018/09/13/180913-8568-7-7WVmc.jpg", heartText: "26獎",imageWidth:464,imageOffsetY:8,imageOffsetX:10 },
  { id: 14, name: "現金 3600元 (10名)", description: "", image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "31獎",imageWidth:400,imageOffsetX:16 },
  { id: 15, name: "medisana 四合一按摩椅", description: "", image: "https://img3.momoshop.com.tw/expertimg/0012/267/002/mobile/MC815_02.jpg?t=1735611356129", heartText: "20獎",imageWidth:350,imageOffsetY:19,imageOffsetX:10},
  { id: 16, name: "iPad Air (2名)", description: "11吋 128G 太空灰色 (價值19,900)", image: "https://img.everrich.com/img/p/2/1/6/2/1/4/216214-large_retina.jpg", heartText: "9獎",imageWidth:325,imageOffsetY:25,imageOffsetX:10 },
  { id: 17, name: "Aesop盥洗禮盒", description: "", image: "https://www.aesop.com/u1nb1km7t5q7/5W1EUSXTTbMMgc0VFDUZWj/830f8cc5edd8ff74de722d845589f918/Aesop_Kits_Resurrection_Duet_Web_Front_A_Large_1800x1093px.png", heartText: "34獎",imageWidth:460,imageOffsetY:35,imageOffsetX:10 },
  { id: 18, name: "LE LABO 慢活香氛組", description: "", image: "https://mcgrocer.com/cdn/shop/products/le-labo-santal-33-eau-de-parfum-travel-tube-refill-kit_14866193_24657863_2048.jpg?v=1685638100", heartText: "24獎",imageWidth:350,imageOffsetY:-15,imageOffsetX:10 },
  { id: 19, name: "Dior 30 Montaigne 雙面皮帶", description: "(價值21,500)", image: "https://assets.christiandior.com/is/image/diorprod/B0446UWGAM911_E03?$default_GHC_1080$&crop=216,1114,1391,484&bfc=on&qlt=85", heartText: "6獎",imageWidth:475,imageOffsetY:13.7,imageOffsetX:5},
  { id: 20, name: "現金 20,000元", description: "", image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "8獎",imageWidth:400,imageOffsetX:16 },
  { id: 21, name: "新光三越禮券 4000元", description: "", image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "30獎",imageWidth:400,imageOffsetX:16 },
  { id: 22, name: "A咖翻轉美腿機Pro", description: "(價值20,800)", image: "https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/7895171/0/638764108276900000?v=1", heartText: "7獎",imageWidth:430,imageOffsetY:13.7,imageOffsetX:10 },
  { id: 23, name: "躺平療癒香氛組", description: "", image: "https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/467247976_967413482084866_3324440644940904179_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nBCzpblLwyAQ7kNvgH1SHJw&_nc_oc=Adjx0biDgjTwqUvnpis_RAdhK7Aa8NOCZ-8_fxrJa6YbBfaiw74zGyQlJeYFbXorktA&_nc_zt=23&_nc_ht=scontent.ftpe7-4.fna&_nc_gid=Ac2kCc79ve3-eIamLTuy-Sg&oh=00_AYAZVL3vuucbr6JXF4dm9OjbF69ynboNKYWAB5Axh_PCSQ&oe=67CAF007", heartText: "32獎",imageWidth:467,imageOffsetX:10 },
  { id: 24, name: "璞之妍 鉑金泡泡菲秀/水飛梭 課程 (3名)", description: "課程2擇1(共2堂) (價值18,000)", image: "https://www.essenangelo.com/wp-content/uploads/2024/12/%E9%89%91%E9%87%91%E6%B3%A1%E6%B3%A1%E8%8F%B2%E7%A7%80%EF%BC%BF%E5%8E%9F%E7%90%863-1536x951.jpg", heartText: "10獎" ,imageWidth:539,imageOffsetX:10,imageOffsetY:11},
  { id: 25, name: "Apple Watch", description: "玫瑰金 S10 GPS 46mm (價值14,500)", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/s10-case-connectivity-select-202409-aluminum-rosegold-46mm-gps?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=UDJ1VS9FUFJGaFNVWEwxcXJuZWI4QlJpUHQ0Y3cxeE9PdlBuaEtTZ1Jqb3ZRZXBYRGhNTFVDNm5yV1lYMEFmRlZCc1pMaXd0SkpRNGM5d3hKUjB2UTYwK0cxWUdIa21YbjRRTXhHbjV6QWE4VzdPRjFweXV0dDJSWTFJd1Q3Y0NuZDRyYWZ3VHh1S2IzN0tmYUxOR1lDQUpqOEp2UVpGWDVFT0FiNXJqOU0w", heartText: "14獎",imageWidth:500 },
  { id: 26, name: "SONY XM5 無線降噪耳罩式耳機", description: "玫瑰灰 (價值11,900)", image: "https://store.sony.com.tw/resource/file/product_files/WH-1000XM5-P/48_f4ed13641.jpg", heartText: "17獎",imageWidth:350,imageOffsetY:15 },
  { id: 27, name: "德國百靈電動刮鬍刀", description: "Series 9 pro+ (價值33,500)", image: "https://media.etmall.com.tw/nximg/007417/7417556/7417556-2_xxl.jpg?t=20995543391", heartText: "4獎",imageWidth:290,imageOffsetX:10,imageOffsetY:20 },
  { id: 28, name: "MarshallActon III 藍牙音響", description: "奶油白 (價值11,900)", image: "https://img.pchome.com.tw/cs/items/DCBU05A900HIJOW/l000002_1730944373.jpg?width=640", heartText: "18獎",imageWidth:400,imageOffsetX:10},
  { id: 29, name: "遠東百貨禮券 2000元", description: "", image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "35獎",imageWidth:400,imageOffsetX:16 },
  { id: 30, name: "BALMUDA The Toaster蒸氣烤麵包機", description: "奶茶限定色", image: "https://shop.balmuda.com.tw/data/image/product/bc/c2/bd/b7/993d2cb95b9df6e565b44ef.jpg?v=1741011870", heartText: "22獎",imageWidth:500,imageOffsetX:10,imageOffsetY:15 },
  { id: 31, name: "CELINE Besace牛皮革手袋", description: "(價值47,500)", image: "https://www.celine.com/on/demandware.static/-/Sites-masterCatalog/default/dwc0dfee37/images/large/196702BZJ.04LU_2_FALL21_v2.jpg?im=Resize=(480);AspectCrop=(1,1),xPosition=.5,yPosition=.5", heartText: "2獎",imageWidth:507,imageOffsetX:10,imageOffsetY:15 },
  { id: 32, name: "Steamery Cirrus2 手持蒸氣掛燙機", description: "粉色", image: "https://bta.scene7.com/is/image/brownthomas/2000191792_03", heartText: "29獎",imageWidth:500,imageOffsetX:10,imageOffsetY:18 },
  { id: 33, name: "現金 16,000元", description: "", image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "12獎",imageWidth:400,imageOffsetX:16 },
  { id: 34, name: "郵政現金禮券 8000元 (4名)", description: "", image: "https://fs2.vacanza.tw/upload/ftp/ProductPic/v_2025pjparty/icon_money.jpg", heartText: "21獎" ,imageWidth:400,imageOffsetX:16},
];

const container = document.querySelector('.lottery-container');
for (let i = 1; i <= 34; i++) {
  const item = document.createElement('div');
  item.classList.add('lottery-item');
  item.dataset.id = i;
  container.appendChild(item);
}

const cardPositions = [
  { top: 0.212, left: 0.034},
  { top: 0.212, left: 0.11 },
  { top: 0.212, left: 0.1875},
  { top: 0.212, left: 0.265 },
  { top: 0.212, left: 0.342},
  { top: 0.212, left: 0.42 },
  { top: 0.212, left: 0.496 },
  { top: 0.212, left: 0.573},
  { top: 0.212, left: 0.65},
  { top: 0.212, left: 0.727 },
  { top: 0.212, left: 0.803},
  { top: 0.212, left: 0.88},
  { top: 0.452, left: 0.034 },
  { top: 0.452, left: 0.11 },
  { top: 0.452, left: 0.1875 },
  { top: 0.452, left: 0.265 },
  { top: 0.452, left: 0.342 },
  { top: 0.452, left: 0.42 },
  { top: 0.452, left: 0.496 },
  { top: 0.452, left: 0.573 },
  { top: 0.452, left: 0.65 },
  { top: 0.452, left: 0.727 },
  { top: 0.452, left: 0.803 },
  { top: 0.452, left: 0.88 },
  { top: 0.692, left: 0.11 },
  { top: 0.692, left: 0.1875 },
  { top: 0.692, left: 0.265 },
  { top: 0.692, left: 0.342 },
  { top: 0.692, left: 0.42 },
  { top: 0.692, left: 0.496 },
  { top: 0.692, left: 0.573 },
  { top: 0.692, left: 0.65 },
  { top: 0.692, left: 0.727 },
  { top: 0.692, left: 0.803 },
];

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

window.addEventListener('resize', placeCards);
window.addEventListener('load', placeCards);

function openModal(prize) {
  document.getElementById('prize-name').innerText = prize.name;
  document.getElementById('prize-image').src = prize.image;
  document.getElementById('prize-description').innerText = prize.description;
  document.getElementById('heart-text').innerText = prize.heartText;
  document.getElementById('prize-modal').style.display = 'flex';
     const prizeImage = document.getElementById('prize-image');
  prizeImage.src = prize.image;

  if (prize.imageWidth) {
    prizeImage.style.width = prize.imageWidth + 'px';
    prizeImage.style.height = 'auto';
  } else {
    prizeImage.style.width = '300px'; 
    prizeImage.style.height = 'auto';
  }
  let offsetX = prize.imageOffsetX || 0;
  let offsetY = prize.imageOffsetY || 0;

  prizeImage.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;

  document.getElementById('prize-modal').style.display = 'flex';

  const clickedItem = document.querySelector(`.lottery-item[data-id="${prize.id}"]`);
  if (clickedItem) {
    clickedItem.classList.add('clicked');
    clickedItem.style.pointerEvents = 'none';
  }
}

function closeModal() {
  document.getElementById('prize-modal').style.display = 'none';
}

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