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
  { name: 'Item A', category: 'KiemHiep', url: '#' },
  { name: 'Item B', category: 'TrinhTham', url: '#' },
  { name: 'Item C', category: 'LinhDi', url: '#' },
  { name: 'Item D', category: 'XuyenKhong', url: '#' },
  { name: 'Item E', category: 'TamLyHoc', url: '#' },
  { name: 'Item F', category: 'KyNangSong', url: '#' },
  { name: 'Item G', category: 'QuanTri', url: '#' },
  { name: 'Item H', category: 'KinhTeTaiChinh', url: '#' },
  { name: 'Item A', category: 'KiemHiep', url: '#' },
  { name: 'Item B', category: 'TrinhTham', url: '#' },
  { name: 'Item C', category: 'LinhDi', url: '#' },
  { name: 'Item D', category: 'XuyenKhong', url: '#' },
  { name: 'Item E', category: 'TamLyHoc', url: '#' },
  { name: 'Item F', category: 'KyNangSong', url: '#' },
  { name: 'Item G', category: 'QuanTri', url: '#' },
  { name: 'Item H', category: 'KinhTeTaiChinh', url: '#' }
];

function renderList(listItems) {
  itemList.innerHTML = '';
  listItems
    .sort((a, b) => a.name.localeCompare(b.name, 'vi'))
    .forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
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
