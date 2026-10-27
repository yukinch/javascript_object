// JavaScript

// --- データ：複数の商品（オブジェクト）を配列で管理 ---
const products = [
    { name: 'トップス', price: 1800, image: 'images/img01.png', inStock: true },
    { name: 'アウター', price: 3500, image: 'images/img02.png', inStock: false },
    { name: 'ワンピース', price: 1200, image: 'images/img03.png', inStock: true },
    { name: 'ボトムス', price: 2100, image: 'images/img04.png', inStock: true },
    { name: 'シューズ', price: 1400, image: 'images/img05.png', inStock: true, isNew: true },
    { name: 'バッグ', price: 1000, image: 'images/img06.png', inStock: false, isNew: false },
    { name: 'アクセサリー', price: 1500, image: 'images/img07.png', inStock: true, isNew: false },
    { name: 'セットアイテム', price: 3000, image: 'images/img08.png', inStock: true, isNew: false },
    { name: 'コスメ', price: 600, image: 'images/img09.png', inStock: true, isNew: false },
    { name: 'ルームウェア', price: 2500, image: 'images/img10.png', inStock: false, isNew: false },
    { name: 'コラボ', price: 4000, image: 'images/img11.png', inStock: true, isNew: true },
    { name: '浴衣', price: 3100, image: 'images/img12.png', inStock: true, isNew: false }
];

// --- HTMLの要素を取得 ---
const productContainer = document.getElementById('product-container');
const showAllBtn = document.getElementById('show-all');
const filterPriceBtn = document.getElementById('filter-price');
const filterStockBtn = document.getElementById('filter-stock');


// --- 関数：商品の配列を受け取って、画面にカードを表示する ---
function displayProducts(productArray) {
    productContainer.innerHTML = ''; // 表示エリアを一度空にする

    productArray.forEach(product => {
        // 在庫状況に応じて表示を変える
        const stockStatus = product.inStock ? '在庫あり' : '在庫なし';

        // カードのHTMLを文字列として組み立てる
        const cardHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">¥${product.price.toLocaleString()}</p>
                <p class="stock">${stockStatus}</p>
            </div>
        `;
        // 組み立てたHTMLをコンテナに追加
        productContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}


// --- ボタンのイベント設定 ---
showAllBtn.addEventListener('click', () => {
    displayProducts(products); // 全ての商品データをそのまま表示
});

filterPriceBtn.addEventListener('click', () => {
    // filterを使って、価格が2000円以下の商品だけを絞り込む
    const cheapProducts = products.filter(p => p.price <= 2000);
    displayProducts(cheapProducts); // 絞り込んだ結果を表示
});

filterStockBtn.addEventListener('click', () => {
    // filterを使って、在庫がある商品だけを絞り込む
    const stockProducts = products.filter(p => p.inStock === true);
    displayProducts(stockProducts); // 絞り込んだ結果を表示
});

// --- 初期表示として、全ての商品を表示 ---
displayProducts(products);