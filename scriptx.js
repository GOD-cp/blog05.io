// アニメーションを一時停止・再開する機能
document.querySelectorAll('.image').forEach(function(image) {
    image.addEventListener('click', function() {
        if (this.style.animationPlayState === 'paused') {
            this.style.animationPlayState = 'running';
        } else {
            this.style.animationPlayState = 'paused';
        }
    });
});

// ×ボタンをクリックしたら画像を消す機能
document.querySelectorAll('.close-btn11').forEach(function(btn11) {
    btn11.addEventListener('click', function(e) {
        e.stopPropagation(); // クリックイベントが親要素に伝播しないようにする
        var image = this.parentElement;
        image.style.display = 'none';
    });
});


   



       
