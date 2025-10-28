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
  VienTuong: 'Viễn Tưởng',
  TieuThuyet: 'Tiểu Thuyết'
};

const items = [
  { name: 'Án Mạng Trong Vô Thức - Melinda Leigh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1zz-qJbwv8AvLDsC5VzNssQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-62.jpg' },
  { name: 'Hồ Sơ Tâm Lý Tội Phạm Tập 1 - Cương Tuyết Ấn', category: 'TrinhTham', url: 'https://1024terabox.com/s/1dgdzAtKm1ZH1EM7g-HA8lg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/Ho-So-Tam-Ly-Pham-Toi-Cuong-Tuyet-An.jpg' },
  { name: 'Hồ Sơ Tâm Lý Tội Phạm Tập 2 - Cương Tuyết Ấn', category: 'TrinhTham', url: 'https://1024terabox.com/s/1rmboqhXsJl2IUgr1c2GH2g', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-59.jpg' },
  { name: 'Trộm Mệnh Đôi Cá Âm Dương Tập 1 – Du Hồn Nhập Mộng', category: 'LinhDi', url: 'https://1024terabox.com/s/1cLLcAXmtvIpuJ0TOzo-ZkA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/doi-ca-am-duong-du-hon-nhap-mong-nhat-mai-dong-tien-han-vu-phi-dich.jpg' },
  { name: 'Trộm Mệnh Lư Hương Ngư VănTập 2 – Chu Sa Chỉ Lối', category: 'LinhDi', url: 'https://1024terabox.com/s/156eAILnwGuksorsjNREi0A', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/trom-menh-nhat-mai-dong-tien.jpg' },
  { name: 'Minh Hôn Với Quỷ - Ninh Thư', category: 'LinhDi', url: 'https://1024terabox.com/s/1PeiAsHDg30K_Gx9b-G4zbQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/minh-hon-voi-quy-ninh-thu.jpg' },
  { name: 'Bảo Tàng Sơn Hải - Đạo Môn Lão Cửu', category: 'LinhDi', url: 'https://1024terabox.com/s/13x_TDkVE0TNzkXdR97nteg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/bao-tang-son-hai-dao-mon-lao-cuu.jpg' },
  { name: 'Người Vớt Xác - Trần Thập Tam', category: 'LinhDi', url: 'https://1024terabox.com/s/1g71ai1GKXwXmJoirf_XAPw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/nguoi-vot-xac-tran-thap-tam.jpg' },
  { name: '14 Ngày Đẫm Máu - Jeremy Bates', category: 'LinhDi', url: 'https://1024terabox.com/s/1d1laV3ucnbm7h9eFffsQ4g', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-9.jpg' },
  { name: 'Người Điều Khiển Mê Cung - Donato Carrisi', category: 'TrinhTham', url: 'https://1024terabox.com/s/1A2sUrbsP_SkB2Ne0XD-gIQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/Nguoi-Dieu-Khien-Me-Cung.jpg' },
  { name: '19 Năm Mưu Sát – Tập 1 - Na Đa', category: 'TrinhTham', url: 'https://1024terabox.com/s/1xY5chUwjrpAm29f7ljuJig', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/07/19-Nam-Muu-Sat-Tap-1.jpg' },
  { name: '19 Năm Mưu Sát – Tập 2 - Na Đa', category: 'TrinhTham', url: 'https://1024terabox.com/s/1Ou_MauiWdwQR1pH7hKOI5A', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/19-Nam-Muu-Sat-Tap-2.jpg' },
  { name: 'Trái Tim Của Quỷ - Mahokaru Numata', category: 'TrinhTham', url: 'https://1024terabox.com/s/1C7wHa8eDUf38JX2jleFqvA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/Trai-Tim-Cua-Quy.jpg' },
  { name: 'Tội Ác Sau Những Bức Tranh - Jason Rekulak', category: 'TrinhTham', url: 'https://1024terabox.com/s/1lKMmI1r4Dkjh94uMptRxMQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/Toi-Ac-Sau-Nhung-Buc-Tranh.jpg' },
  { name: 'Những Vụ Án Kỳ Bí - Diêm Bắc Lão Cửu', category: 'TrinhTham', url: 'https://1024terabox.com/s/1hye09wEs3nIpE3CdUjbM3w', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/nhung-vu-an-ky-bi-diem-bac-lao-cuu.jpg' },
  { name: 'Người Gác Đêm 1 - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1nnzyrJfYE3ReRu8zPqr9nw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tan-minh.jpg' },
  { name: 'Người Gác Đêm 2 - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1DLmdM4C_1uj8gJTpeRX2bw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tap-2-tan-minh-trang-duong-dich.jpg' },
  { name: 'Người Gác Đêm 3 - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1Uz3o_e0VKAg4qEnE-KhwFg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tap-3-tan-minh-nguyen-quynh-trang-dich.jpg' },
  { name: 'Người Gác Đêm 4 - Đại Kết Cục - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1JGiPWlAV_znPNhGy90X-Cw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/05/Nguoi-Gac-Dem-tap-4.jpg' },
  { name: 'Pháp y Tần Minh 1 Người Giải Mã Tử Thi - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1Z7WVo3hcuj4SqPk-ke9aTA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/36721769162_bd85043a29_o.jpg' },
  { name: 'Pháp y Tần Minh 2 Lời Tố Cáo Thầm Lặng - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1xiSs9aPzfgKi5Bs_fKNSiA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/39352622462_80b8275e2c_o.jpg' },
  { name: 'Pháp y Tần Minh 3 Ngón Tay Thứ Mười Một - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/10aXUhHH0hzQC11GHUCa1QQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/39352622382_01de8ec01f_o.jpg' },
  { name: 'Pháp y Tần Minh 4 Kẻ Dọn Rác - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/1YoKKcGEV0KCNDw2NkfOfJg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/ke-don-rac-tan-minh.jpg' },
  { name: 'Pháp y Tần Minh 5 Người Sống Sót - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/16YRlHnyQ7C4EwcAPN_mWBw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-song-sot-tan-minh.jpg' },
  { name: 'Pháp y Tần Minh 6 Kẻ Nhìn Trộm - Tần Minh', category: 'TrinhTham', url: 'https://1024terabox.com/s/18Hdxsm7kKBzGLia8lkdClw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/ke-nhin-trom-tan-minh.jpg' },
  { name: 'Trạm Tín Hiệu Số 23 - Hugh Howey', category: 'VienTuong', url: 'https://1024terabox.com/s/1DnO8aro_HJoPntnkmukiJg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/04/Tram-Tin-Hieu-So-23.jpg' },
  { name: 'Thú Trấn Mộ - Sái Tuấn', category: 'LinhDi', url: 'https://1024terabox.com/s/1bM78WbRq5qRbVhYRaP0gmA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/thu-tran-mo-sai-tuan.jpg' },
  { name: 'Cái Chết Của Những Xác Sống – Tập 1 - Masaya Yamaguchi', category: 'TrinhTham', url: 'https://1024terabox.com/s/14yqJ-rwiOoIAOpcaHjirCw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cai-chet-cua-nhung-xac-song-tap-1-masaya-yamaguchi-trinh-thanh-tam-dich.jpg' },
  { name: 'Cái Chết Của Những Xác Sống – Tập 2 - Masaya Yamaguchi', category: 'TrinhTham', url: 'https://1024terabox.com/s/1E4TnP9C0kbeXXAYgQ4-oKg', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cai-chet-cua-nhung-xac-song-tap-2-masaya-yamaguchi-vo-phuong-ngan-dich.jpg' },
  { name: 'Đừng Bao Giờ Nói Dối - Freida McFadden', category: 'TrinhTham', url: 'https://1024terabox.com/s/1TWp6ziCNxx4v4L1llmpTNQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover.jpg' },
  { name: 'Núi Chuột Quét - Hô Diên Vân', category: 'TrinhTham', url: 'https://1024terabox.com/s/1_4LI27uTMXhR7KOd4JgRqQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/Nui-Chuot-Quet.jpg' },
  { name: 'Hung Trạch - Tập 2 - Hô Diên Vân', category: 'LinhDi', url: 'https://1024terabox.com/s/1_6RoO-A5TGyksa6SyIiEbQ', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/hung-trach-tap-2-ho-dien-van-tu-huynh-dich.jpg' },
  { name: 'Hung Trạch - Tập 1 - Hô Diên Vân', category: 'LinhDi', url: 'https://1024terabox.com/s/1k7ZD0OFK4YcMVROlw-aDZA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/hung-trach-tap-1-ho-dien-van-tu-huynh-dich.jpg' },  
  { name: 'Biến Mọi Thứ Thành Tiền - Nguyễn Anh Dũng', category: 'KinhTeTaiChinh', url: 'https://1024terabox.com/s/1Ozm03bpSAuecTonXm9LLPw', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/04/Bien-Moi-Thu-Thanh-Tien.jpg' },
  { name: 'Mô Hình Chất Lượng Dịch Vụ Trong Bán Lẻ - TS. Đào Xuân Khương', category: 'KinhTeTaiChinh', url: 'https://1024terabox.com/s/1Bj5rTRwzMBF0ownMcVqdag', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/06/mo-hinh-chat-luong-dich-vu-trong-ban-le-ts-dao-xuan-khuong.jpg' },
  { name: 'Nhà Có Bảy Đầu Hồi - Nathaniel Hawthorne', category: 'TieuThuyet', url: 'https://1024terabox.com/s/1mtG4CA1ZanqLAVAQyLUVfA', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/10/nha-co-bay-dau-hoi-nathaniel-hawthorne-26-nguyen-thi-hanh-dich.jpg' },
  { name: '#', category: 'LinhDi', url: '#', imageUrl: '#' }
];

function renderList(listItems) {
  itemList.style.display = 'grid';
  itemList.innerHTML = '';
  
  const validItems = listItems
    .filter(item => item.url && item.url !== '#' && item.name && item.name !== '#')
    .sort((a, b) => a.name.localeCompare(b.name, 'vi'));

  if (validItems.length === 0) {
    const noResults = document.createElement('li');
    noResults.className = 'no-results';
    noResults.textContent = 'Không tìm thấy kết quả phù hợp.';
    itemList.appendChild(noResults);
    return;
  }

  validItems.forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.className = 'item-name';
    link.textContent = item.name;
    link.onclick = () => window.open(item.url, '_blank');

    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.name;
    img.className = 'item-image';
    // Thêm xử lý lỗi ảnh
    img.onerror = function() {
      this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDIwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
    };

    const cat = document.createElement('span');
    cat.className = `category ${item.category}`;
    cat.textContent = categoryLabels[item.category] || 'Khác';

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
  
  if (sel !== 'all') {
    filtered = filtered.filter(i => i.category === sel);
  }
  
  if (keyword) {
    filtered = filtered.filter(i =>
      i.name.toLowerCase().includes(keyword) ||
      (categoryLabels[i.category] && categoryLabels[i.category].toLowerCase().includes(keyword))
    );
  }
  
  renderList(filtered);
}

searchInput.addEventListener('input', filterAndRender);
categoryFilter.addEventListener('change', filterAndRender);

// Khởi tạo danh sách
filterAndRender();
