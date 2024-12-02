
// ×ボタンで画像を消す機能の追加
document.addEventListener("DOMContentLoaded", function() {
    const closeButtons = document.querySelectorAll('.close-btn1',);

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const img = button.parentElement.querySelector('img'); // ×ボタンの親要素内の画像を取得
            img.style.display = 'none'; // ×ボタンが押されたら画像を消す
            button.style.display = 'none'; // ボタン自体も消す
        });
    });
});
// ×ボタンで画像を消す機能の追加
document.addEventListener("DOMContentLoaded", function() {
    const closeButtons = document.querySelectorAll('.close-btn2',);

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const img = button.parentElement.querySelector('img'); // ×ボタンの親要素内の画像を取得
            img.style.display = 'none'; // ×ボタンが押されたら画像を消す
            button.style.display = 'none'; // ボタン自体も消す
        });
    });
});

// 全てのclose-btn11ボタンを取得
const closeButtons = document.querySelectorAll(".close-btn11");

// 各ボタンにイベントリスナーを追加
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    // 全ての画像要素を削除
    const images = document.querySelectorAll(".image");
    images.forEach(image => image.remove());
  });
});

   



       
