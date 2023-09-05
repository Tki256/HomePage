// コールバック関数を定義
const fadeInCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);  // 一度フェードインしたら監視を解除
        }
    });
};

// Intersection Observerのオプションを設定
let options = {
    root: null,          // ビューポートをルートとして使用
    rootMargin: '0px',   // マージンなし
    threshold: 0.3       // 20% の要素が見えたらコールバックをトリガー
};

// Observerをインスタンス化
const observer = new IntersectionObserver(fadeInCallback, options);

// 監視したい要素を選択して監視を開始
const target = document.querySelector('.fade-in-section');
observer.observe(target);
