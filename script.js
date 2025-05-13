// script.js
const items = [
    { name: "Apple", category: "Fruit", url: "#" },
    { name: "Banana", category: "Fruit", url: "#" },
    { name: "Cherry", category: "Fruit", url: "#" },
    { name: "Carrot", category: "Vegetable", url: "#" },
    { name: "Lettuce", category: "Vegetable", url: "#" },
    { name: "Tomato", category: "Vegetable", url: "#" },
    { name: "Milk", category: "Dairy", url: "#" },
    { name: "Cheese", category: "Dairy", url: "#" },
    { name: "Yogurt", category: "Dairy", url: "#" },
    { name: "Bread", category: "Bakery", url: "#" },
    { name: "Croissant", category: "Bakery", url: "#" },
    { name: "Bagel", category: "Bakery", url: "#" },
    { name: "Water", category: "Beverage", url: "#" },
    { name: "Coffee", category: "Beverage", url: "#" },
    { name: "Tea", category: "Beverage", url: "#" },
    { name: "Chicken", category: "Meat", url: "#" },
    { name: "Beef", category: "Meat", url: "#" },
    { name: "Pork", category: "Meat", url: "#" },
    { name: "Chips", category: "Snacks", url: "#" },
    { name: "Cookies", category: "Snacks", url: "#" },
    { name: "Nuts", category: "Snacks", url: "#" },
    { name: "Ice Cream", category: "Frozen", url: "#" },
    { name: "Frozen Pizza", category: "Frozen", url: "#" },
    { name: "Frozen Vegetables", category: "Frozen", url: "#" },
    { name: "Broccoli", category: "Produce", url: "#" },
    { name: "Spinach", category: "Produce", url: "#" },
    { name: "Cucumber", category: "Produce", url: "#" },
    { name: "Salmon", category: "Seafood", url: "#" },
    { name: "Shrimp", category: "Seafood", url: "#" },
    { name: "Tuna", category: "Seafood", url: "#" },
	{ name: "Apple", category: "Fruit", url: "#" },
    { name: "Banana", category: "Fruit", url: "#" },
    { name: "Cherry", category: "Fruit", url: "#" },
    { name: "Carrot", category: "Vegetable", url: "#" },
    { name: "Lettuce", category: "Vegetable", url: "#" },
    { name: "Tomato", category: "Vegetable", url: "#" },
    { name: "Milk", category: "Dairy", url: "#" },
    { name: "Cheese", category: "Dairy", url: "#" },
    { name: "Yogurt", category: "Dairy", url: "#" },
    { name: "Bread", category: "Bakery", url: "#" },
    { name: "Croissant", category: "Bakery", url: "#" },
    { name: "Bagel", category: "Bakery", url: "#" },
    { name: "Water", category: "Beverage", url: "#" },
    { name: "Coffee", category: "Beverage", url: "#" },
    { name: "Tea", category: "Beverage", url: "#" },
    { name: "Chicken", category: "Meat", url: "#" },
    { name: "Beef", category: "Meat", url: "#" },
    { name: "Pork", category: "Meat", url: "#" },
    { name: "Chips", category: "Snacks", url: "#" },
    { name: "Cookies", category: "Snacks", url: "#" },
    { name: "Nuts", category: "Snacks", url: "#" },
    { name: "Ice Cream", category: "Frozen", url: "#" },
    { name: "Frozen Pizza", category: "Frozen", url: "#" },
    { name: "Frozen Vegetables", category: "Frozen", url: "#" },
    { name: "Broccoli", category: "Produce", url: "#" },
    { name: "Spinach", category: "Produce", url: "#" },
    { name: "Cucumber", category: "Produce", url: "#" },
    { name: "Salmon", category: "Seafood", url: "#" },
    { name: "Shrimp", category: "Seafood", url: "#" },
    { name: "Tuna", category: "Seafood", url: "#" }
];

const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');

function renderList(listItems) {
    const list = document.getElementById('itemList_LH');
    list.innerHTML = '';
    listItems.sort((a,b) => a.name.localeCompare(b.name,'vi')).forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${item.url}" class="item-name" target="_blank" rel="noopener noreferrer">${item.name}</a>
            <span class="category ${item.category}">${item.category}</span>
        `;
        list.appendChild(li);
    });
}

function filterAndRender() {
    const keyword = searchInput.value.toLowerCase();
    const sel = categoryFilter.value;
    let filtered = items;
    if (sel !== 'all') filtered = filtered.filter(i => i.category === sel);
    if (keyword) filtered = filtered.filter(i => i.name.toLowerCase().includes(keyword) || i.category.toLowerCase().includes(keyword));
    renderList(filtered);
}

searchInput.addEventListener('input', filterAndRender);
categoryFilter.addEventListener('change', filterAndRender);
filterAndRender();