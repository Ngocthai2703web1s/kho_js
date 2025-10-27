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
  { name: 'Án Mạng Trong Vô Thức - Melinda Leigh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1-FZlXmOZBcNKDmGDjThqt6GVwk6ruBee/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-62.jpg' },
  { name: 'Hồ Sơ Tâm Lý Tội Phạm Tập 1 - Cương Tuyết Ấn', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1-fHwKS_F1qbK2m_LclwjE3uRaEOo2krN/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/Ho-So-Tam-Ly-Pham-Toi-Cuong-Tuyet-An.jpg' },
  { name: 'Hồ Sơ Tâm Lý Tội Phạm Tập 2 - Cương Tuyết Ấn', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1-MZmm5tXlHtT7c1f0CUxSjjSQKQ27Tn-/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-59.jpg' },
  { name: 'Trộm Mệnh Đôi Cá Âm Dương Tập 1 – Du Hồn Nhập Mộng', category: 'LinhDi', url: 'https://drive.google.com/file/d/103pJxPUnmsSg10biQc_VjxITxw2JmZ3p/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/doi-ca-am-duong-du-hon-nhap-mong-nhat-mai-dong-tien-han-vu-phi-dich.jpg' },
  { name: 'Trộm Mệnh Lư Hương Ngư VănTập 2 – Chu Sa Chỉ Lối', category: 'LinhDi', url: 'https://drive.google.com/file/d/10XHuhPYu6CT3kt7l0yVC40CKuM5Fj_49/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/trom-menh-nhat-mai-dong-tien.jpg' },
  { name: 'Minh Hôn Với Quỷ - Ninh Thư', category: 'LinhDi', url: 'https://drive.google.com/file/d/10fiMsCNag-MAPUrivAnO1n50n8mqekN9/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/minh-hon-voi-quy-ninh-thu.jpg' },
  { name: 'Bảo Tàng Sơn Hải - Đạo Môn Lão Cửu', category: 'LinhDi', url: 'https://drive.google.com/file/d/117mVN_h-8pV0H14pigwPGV-uJZyqeO26/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/bao-tang-son-hai-dao-mon-lao-cuu.jpg' },
  { name: 'Người Vớt Xác - Trần Thập Tam', category: 'LinhDi', url: 'https://drive.google.com/file/d/11HqzVCS2hK-VarhAfei0vPAsIFy8ceXV/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/nguoi-vot-xac-tran-thap-tam.jpg' },
  { name: '14 Ngày Đẫm Máu - Jeremy Bates', category: 'LinhDi', url: 'https://drive.google.com/file/d/11VTRuL-bnti1aNJK8nE31A83pj0nrb0d/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-9.jpg' },
  { name: 'Người Điều Khiển Mê Cung - Donato Carrisi', category: 'TrinhTham', url: 'https://drive.google.com/file/d/11lz9IEo1NLnzvTLHKxLEyLZxEmV41ziX/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/Nguoi-Dieu-Khien-Me-Cung.jpg' },
  { name: '19 Năm Mưu Sát – Tập 1 - Na Đa', category: 'TrinhTham', url: 'https://drive.google.com/file/d/128__YnQSmnZd_CtAQ0B3PFbeLpoXBzVn/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/07/19-Nam-Muu-Sat-Tap-1.jpg' },
  { name: '19 Năm Mưu Sát – Tập 2 - Na Đa', category: 'TrinhTham', url: 'https://drive.google.com/file/d/12RJjlpI9uEfy44XXdEHRyaHZGVjNfYID/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/19-Nam-Muu-Sat-Tap-2.jpg' },
  { name: 'Trái Tim Của Quỷ - Mahokaru Numata', category: 'TrinhTham', url: 'https://drive.google.com/file/d/12p5S6y9GDmfgIKMsTjrjxeSiDGixVTfq/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/Trai-Tim-Cua-Quy.jpg' },
  { name: 'Tội Ác Sau Những Bức Tranh - Jason Rekulak', category: 'TrinhTham', url: 'https://drive.google.com/file/d/131Rw_QjjRjVXSivtZyEAOVEBzQxPLslU/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/Toi-Ac-Sau-Nhung-Buc-Tranh.jpg' },
  { name: 'Những Vụ Án Kỳ Bí - Diêm Bắc Lão Cửu', category: 'TrinhTham', url: 'https://drive.google.com/file/d/13FXm65ko2tP7z4-jYil9T2kDHHC_yLPT/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/08/nhung-vu-an-ky-bi-diem-bac-lao-cuu.jpg' },
  { name: 'Người Gác Đêm 1 - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/13Q9kk4iwhHwlvjIzkCHWB28wLh4uuqdv/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tan-minh.jpg' },
  { name: 'Người Gác Đêm 2 - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/13dAZ-ngvy4pqmX83xr7osmYIt-1xJBae/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tap-2-tan-minh-trang-duong-dich.jpg' },
  { name: 'Người Gác Đêm 3 - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/13gktTTi4qCMVvgmOKNf2Yf1_AVx0DdYv/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-gac-dem-tap-3-tan-minh-nguyen-quynh-trang-dich.jpg' },
  { name: 'Người Gác Đêm 4 - Đại Kết Cục - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/13pgn5u_cm0LUpT9VHWVETW5FoYTjx-Ap/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/05/Nguoi-Gac-Dem-tap-4.jpg' },
  { name: 'Pháp y Tần Minh 1 Người Giải Mã Tử Thi - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/13Q9kk4iwhHwlvjIzkCHWB28wLh4uuqdv/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/36721769162_bd85043a29_o.jpg' },
  { name: 'Pháp y Tần Minh 2 Lời Tố Cáo Thầm Lặng - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/14CJMmkg1spj0Hv8_4EtAjmlEHzhhAv8Q/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/39352622462_80b8275e2c_o.jpg' },
  { name: 'Pháp y Tần Minh 3 Ngón Tay Thứ Mười Một - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/14Jh91HV3cnISfCrziQJjrWhx1ai7frTm/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/39352622382_01de8ec01f_o.jpg' },
  { name: 'Pháp y Tần Minh 4 Kẻ Dọn Rác - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/14R2qlqcECZ41E78FWlLeWOZD89YkvyBT/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/ke-don-rac-tan-minh.jpg' },
  { name: 'Pháp y Tần Minh 5 Người Sống Sót - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/14lgIkSEb6wH6g6IkZL10A6LEQN4amq3S/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/nguoi-song-sot-tan-minh.jpg' },
  { name: 'Pháp y Tần Minh 6 Kẻ Nhìn Trộm - Tần Minh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/14qR7YGFEdAzIdphD72njKurpm-uPmkmW/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/ke-nhin-trom-tan-minh.jpg' },
  { name: 'Trạm Tín Hiệu Số 23 - Hugh Howey', category: 'VienTuong', url: 'https://drive.google.com/file/d/154IH0DIngw40ezFGcifM1a5KrazYiw4c/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/04/Tram-Tin-Hieu-So-23.jpg' },
  { name: 'Thú Trấn Mộ - Sái Tuấn', category: 'LinhDi', url: 'https://drive.google.com/file/d/1Y5ZBrC8WmHVLo1Uwk2IatlkTsJTZXSso/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/thu-tran-mo-sai-tuan.jpg' },
  { name: 'Cái Chết Của Những Xác Sống – Tập 1 - Masaya Yamaguchi', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1uu4uA9dFsg21cZBKZM_7OLeBvLHj06fe/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cai-chet-cua-nhung-xac-song-tap-1-masaya-yamaguchi-trinh-thanh-tam-dich.jpg' },
  { name: 'Cái Chết Của Những Xác Sống – Tập 2 - Masaya Yamaguchi', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1c69v2lffrcVQIxmnTVgi6ZODq0SEI44u/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cai-chet-cua-nhung-xac-song-tap-2-masaya-yamaguchi-vo-phuong-ngan-dich.jpg' },
  { name: 'Đừng Bao Giờ Nói Dối - Freida McFadden', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1qzDDLfnM-0iU6YTYLHuTeyj67JIbumSm/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover.jpg' },
  { name: 'Núi Chuột Quét - Hô Diên Vân', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1pjxxcmFzBsVY9N16CnG6Qehxf6Tn-K2Y/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/Nui-Chuot-Quet.jpg' },
  { name: 'Hung Trạch - Tập 2 - Hô Diên Vân', category: 'LinhDi', url: 'https://drive.google.com/file/d/127wshM9-lJIQzID4zgPC_F-H58NGWuWc/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/02/hung-trach-tap-2-ho-dien-van-tu-huynh-dich.jpg' },
  { name: 'Hung Trạch - Tập 1 - Hô Diên Vân', category: 'LinhDi', url: 'https://drive.google.com/file/d/1Z-sl5xT06Wl2S8OKr0WIV_e-quK1D7Fe/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/12/hung-trach-tap-1-ho-dien-van-tu-huynh-dich.jpg' },  
  { name: 'Biến Mọi Thứ Thành Tiền - Nguyễn Anh Dũng', category: 'KinhTeTaiChinh', url: 'https://drive.google.com/file/d/1g-L7AEgCYGdnNP52I6LXenmgHoxttryQ/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2024/04/Bien-Moi-Thu-Thanh-Tien.jpg' },
  { name: 'Mô Hình Chất Lượng Dịch Vụ Trong Bán Lẻ - TS. Đào Xuân Khương', category: 'KinhTeTaiChinh', url: 'https://drive.google.com/file/d/1kRzH9cOzo99TZFZJZs6SjWZ5sKcOUAfG/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/06/mo-hinh-chat-luong-dich-vu-trong-ban-le-ts-dao-xuan-khuong.jpg' },
  { name: '#', category: 'LinhDi', url: '#', imageUrl: '#' },
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
