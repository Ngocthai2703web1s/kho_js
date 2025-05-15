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
  KinhTeTaiChinh: 'Kinh Tế - Tài Chính'
};

const items = [
  { name: 'Án Mạng Trong Vô Thức - Melinda Leigh', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1-FZlXmOZBcNKDmGDjThqt6GVwk6ruBee/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-62.jpg' },
  { name: 'Hồ Sơ Tâm Lý Tội Phạm Tập 1 - Cương Tuyết Ấn', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1-fHwKS_F1qbK2m_LclwjE3uRaEOo2krN/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2023/12/Ho-So-Tam-Ly-Pham-Toi-Cuong-Tuyet-An.jpg' },
  { name: 'Hồ Sơ Tâm Lý Tội Phạm Tập 2 - Cương Tuyết Ấn', category: 'TrinhTham', url: 'https://drive.google.com/file/d/1-MZmm5tXlHtT7c1f0CUxSjjSQKQ27Tn-/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/cover-59.jpg' },
  { name: 'Trộm Mệnh Đôi Cá Âm Dương Tập 1 – Du Hồn Nhập Mộng', category: 'LinhDi', url: 'https://drive.google.com/file/d/103pJxPUnmsSg10biQc_VjxITxw2JmZ3p/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/doi-ca-am-duong-du-hon-nhap-mong-nhat-mai-dong-tien-han-vu-phi-dich.jpg' },
  { name: 'Trộm Mệnh Lư Hương Ngư VănTập 2 – Chu Sa Chỉ Lối', category: 'LinhDi', url: 'https://drive.google.com/file/d/10XHuhPYu6CT3kt7l0yVC40CKuM5Fj_49/view?usp=drive_link', imageUrl: 'https://ebookvie.com/wp-content/uploads/2025/04/trom-menh-nhat-mai-dong-tien.jpg' }
];

function renderList(listItems) {
  itemList.style.display = 'grid';
  itemList.innerHTML = '';
  listItems
    .filter(item => item.url && item.url !== '#')
    .sort((a, b) => a.name.localeCompare(b.name, 'vi'))
    .forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name}" class="item-image">
        <a href="${item.url}" class="item-name" target="_blank" rel="noopener noreferrer">${item.name}</a>
        <span class="category ${item.category}">${categoryLabels[item.category]}</span>
      `;
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
