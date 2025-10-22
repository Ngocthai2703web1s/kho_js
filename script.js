  // script.js
const container = document.getElementById('list-lh');
const searchInput = container.querySelector('#search-lh');
const categoryFilter = container.querySelector('#category-filter-lh');
const itemList = container.querySelector('#itemList_LH');

// Mapping display names
const categoryLabels = {
  KiemHiep: 'Tiên Hiệp',
  TrinhTham: 'Trinh Thám',
  LinhDi: 'Linh Dị',
  XuyenKhong: 'Xuyên Không',
  TamLyHoc: 'Tâm Lý Học',
  KyNangSong: 'Kỹ Năng Sống',
  QuanTri: 'Quản Trị',
  KinhTeTaiChinh: 'Kinh Tế - Tài Chính',
  VienTuong: 'Viễn Tưởng'
};

const items = [
  { name: 'Án Mạng Trong Vô Thức - Melinda Leigh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1AdAzrI002vnTTcOwkAT4xw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-62.jpg' },
  { name: 'Hồ Sơ Tâm Lý Tội Phạm Tập 1 - Cương Tuyết Ấn', category: 'TrinhTham', url: 'https://1024terabox.com/s/1Js8a_NorDGytQJ37_ePKLQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/Ho-So-Tam-Ly-Pham-Toi-Cuong-Tuyet-An.jpg' },
  { name: 'Hồ Sơ Tâm Lý Tội Phạm Tập 2 - Cương Tuyết Ấn', category: 'TrinhTham', url: 'https://1024terabox.com/s/1dRjOKHlQmi63JFTHcOI6wg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-59.jpg' },
  { name: 'Trộm Mệnh Đôi Cá Âm Dương Tập 1 – Du Hồn Nhập Mộng', category: 'LinhDi', url: 'https://1024terabox.com/s/1lkf4Kvi_qWIUH6s2ZiK57Q', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/doi-ca-am-duong-du-hon-nhap-mong-nhat-mai-dong-tien-han-vu-phi-dich.jpg' },
  { name: 'Trộm Mệnh Lư Hương Ngư VănTập 2 – Chu Sa Chỉ Lối', category: 'LinhDi', url: 'https://1024terabox.com/s/1WSdOfvTrQMnvroe-YNPp3Q', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/trom-menh-nhat-mai-dong-tien.jpg' },
  { name: 'Minh Hôn Với Quỷ - Ninh Thư', category: 'LinhDi', url: 'https://1024terabox.com/s/1Km-QpIbD-dNA2Xo5CtYaHg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/minh-hon-voi-quy-ninh-thu.jpg' },
  { name: 'Bảo Tàng Sơn Hải - Đạo Môn Lão Cửu', category: 'LinhDi', url: 'https://1024terabox.com/s/1UL4kOwXu6GZLzuL6ZvD8AA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/bao-tang-son-hai-dao-mon-lao-cuu.jpg' },
  { name: 'Người Vớt Xác - Trần Thập Tam', category: 'LinhDi', url: 'https://1024terabox.com/s/1wCNAUT6e6uS5GRB1zpys_A', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/nguoi-vot-xac-tran-thap-tam.jpg' },
  { name: '14 Ngày Đẫm Máu - Jeremy Bates', category: 'LinhDi', url: 'https://1024terabox.com/s/1k0urfHrmgrdNTPB1yl2E1w', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-9.jpg' },
  { name: 'Người Điều Khiển Mê Cung - Donato Carrisi', category: 'TrinhTham', url: 'https://1024terabox.com/s/1wm75ScPGFK0MHk17Sdi1kg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/Nguoi-Dieu-Khien-Me-Cung.jpg' },
  { name: '19 Năm Mưu Sát – Tập 1 - Na Đa', category: 'TrinhTham', url: 'https://1024terabox.com/s/1r2QZM-6Ndf320EmobbBW7Q', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/07/19-Nam-Muu-Sat-Tap-1.jpg' },
  { name: '19 Năm Mưu Sát – Tập 2 - Na Đa', category: 'TrinhTham', url: 'https://1024terabox.com/s/118_UN6dO4NpG7NChU8V1eA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/19-Nam-Muu-Sat-Tap-2.jpg' },
  { name: 'Trái Tim Của Quỷ - Mahokaru Numata', category: 'TrinhTham', url: 'https://1024terabox.com/s/1TLdkTuJWV4jSOLT0TblCBQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/Trai-Tim-Cua-Quy.jpg' },
  { name: 'Tội Ác Sau Những Bức Tranh - Jason Rekulak', category: 'TrinhTham', url: 'https://1024terabox.com/s/1__Jq6roYqwkxrB_CoaLeug', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/Toi-Ac-Sau-Nhung-Buc-Tranh.jpg' },
  { name: 'Những Vụ Án Kỳ Bí - Diêm Bắc Lão Cửu', category: 'TrinhTham', url: 'https://1024terabox.com/s/1kpbwC6zBHuGIsGPT_1b8OQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/nhung-vu-an-ky-bi-diem-bac-lao-cuu.jpg' },
  { name: 'Người Gác Đêm 1 - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1m7qBAhrR89yQkr0sHnCGCQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tan-minh.jpg' },
  { name: 'Người Gác Đêm 2 - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1EpkKvfwBgZfV--9sGOndtA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tap-2-tan-minh-trang-duong-dich.jpg' },
  { name: 'Người Gác Đêm 3 - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1jt0DMX7FmkDPbkYfhLeNRA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tap-3-tan-minh-nguyen-quynh-trang-dich.jpg' },
  { name: 'Người Gác Đêm 4 - Đại Kết Cục - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1T6seFUdTIFm9xxmEtEyWdA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/05/Nguoi-Gac-Dem-tap-4.jpg' },
  { name: 'Pháp y Tần Minh 1 Người Giải Mã Tử Thi - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/15kwNNqB_epR1TDiiM2z6mg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/36721769162_bd85043a29_o.jpg' },
  { name: 'Pháp y Tần Minh 2 Lời Tố Cáo Thầm Lặng - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1elyFjiNyGBWGYXsv8OvvZA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/39352622462_80b8275e2c_o.jpg' },
  { name: 'Pháp y Tần Minh 3 Ngón Tay Thứ Mười Một - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1XLnOpDucF12ETGEOGtCZgg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/39352622382_01de8ec01f_o.jpg' },
  { name: 'Pháp y Tần Minh 4 Kẻ Dọn Rác - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1rEnX1RHzdCgq9dsMBFUacg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/ke-don-rac-tan-minh.jpg' },
  { name: 'Pháp y Tần Minh 5 Người Sống Sót - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1prBSSnXOMTDT1yh_Y3njtA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-song-sot-tan-minh.jpg' },
  { name: 'Pháp y Tần Minh 6 Kẻ Nhìn Trộm - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1byLnYJDvNnU3gG4rXAwS2A', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/ke-nhin-trom-tan-minh.jpg' },
  { name: 'Trạm Tín Hiệu Số 23 - Hugh Howey', category: 'VienTuong', url: 'https://1024terabox.com/s/1IuE467rFdfJrHok4pFJ73Q', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/04/Tram-Tin-Hieu-So-23.jpg' },
  { name: 'Thú Trấn Mộ - Sái Tuấn', category: 'LinhDi', url: 'https://1024terabox.com/s/1Gv3qUZQfMCcf9TEXW6QMcA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/thu-tran-mo-sai-tuan.jpg' },
  { name: 'Cái Chết Của Những Xác Sống – Tập 1 - Masaya Yamaguchi', category: 'TrinhTham', url: 'https://1024terabox.com/s/1p430bTNVCKuueqkb2IlM8w', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cai-chet-cua-nhung-xac-song-tap-1-masaya-yamaguchi-trinh-thanh-tam-dich.jpg' },
  { name: 'Cái Chết Của Những Xác Sống – Tập 2 - Masaya Yamaguchi', category: 'TrinhTham', url: 'https://1024terabox.com/s/1lOy7w82xgMjSXPCao25puA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cai-chet-cua-nhung-xac-song-tap-2-masaya-yamaguchi-vo-phuong-ngan-dich.jpg' },
  { name: 'Đừng Bao Giờ Nói Dối - Freida McFadden', category: 'TrinhTham', url: 'https://1024terabox.com/s/1Ee1h_D2fR0jskbc7u8xZuQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover.jpg' },
  { name: 'Núi Chuột Quét - Hô Diên Vân', category: 'TrinhTham', url: 'https://1024terabox.com/s/1Co049_BgTsryMLjoOxI_lA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/Nui-Chuot-Quet.jpg' },
  { name: 'Hung Trạch - Tập 2 - Hô Diên Vân', category: 'LinhDi', url: 'https://1024terabox.com/s/1c5LoLL6KIweQ8gDGT2CcMw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/hung-trach-tap-2-ho-dien-van-tu-huynh-dich.jpg' },
  { name: 'Hung Trạch - Tập 1 - Hô Diên Vân', category: 'LinhDi', url: 'https://1024terabox.com/s/1w81sZV5QYpVQ_liPtHSQ_g', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/hung-trach-tap-1-ho-dien-van-tu-huynh-dich.jpg' },  
  { name: 'Biến Mọi Thứ Thành Tiền - Nguyễn Anh Dũng', category: 'KinhTeTaiChinh', url: 'https://1024terabox.com/s/1j2dda_gshYew4A9F0d994A', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/04/Bien-Moi-Thu-Thanh-Tien.jpg' },
  { name: 'Mô Hình Chất Lượng Dịch Vụ Trong Bán Lẻ - TS. Đào Xuân Khương', category: 'KinhTeTaiChinh', url: 'https://1024terabox.com/s/1TimeqQEiJ6CDxuz8DtB9wg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/06/mo-hinh-chat-luong-dich-vu-trong-ban-le-ts-dao-xuan-khuong.jpg' },
  { name: '#', category: 'LinhDi', url: '#', imageUrl: '#' },
  { name: '#', category: 'LinhDi', url: '#', imageUrl: '#' }
];

function renderList(listItems) {
  itemList.style.display = 'grid';
  itemList.innerHTML = '';
  listItems
    .filter(item => item.url && item.url !== '#')
    .sort((a, b) => a.name.localeCompare(b.name, 'vi'))
    .forEach(item => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.className = 'item-name';
      link.textContent = item.name;
      link.onclick = () => window.open(item.url, '_blank');

      const img = document.createElement('img');
      img.src = item.imageUrl;
      img.alt = item.name;
      img.className = 'item-image';

      const cat = document.createElement('span');
      cat.className = `category ${item.category}`;
      cat.textContent = categoryLabels[item.category];

      li.appendChild(img);
      li.appendChild(link);
      li.appendChild(cat);
      itemList.appendChild(li);
    });
}

function filterAndRender() {
  const keyword = searchInput.value.toLowerCase();
  const sel = categoryFilter.value;
  let filtered = items;
  if (sel !== 'all') filtered = filtered.filter(i => i.category === sel);
  if (keyword) filtered = filtered.filter(i =>
    i.name.toLowerCase().includes(keyword) ||
    categoryLabels[i.category].toLowerCase().includes(keyword)
  );
  renderList(filtered);
}

searchInput.addEventListener('input', filterAndRender);
categoryFilter.addEventListener('change', filterAndRender);
filterAndRender();
