let clickCount = 0;

document.getElementById('surprizeTikla').addEventListener('click', function() {
    clickCount++;
    moveButton();
    showMessage();
});

function moveButton() {
    const button = document.getElementById('surprizeTikla');
    const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function showMessage() {
    const messages = [
        'Tek tıklamayla kurtulabileceğini mi sandın?',
        'Hala buradayım, seni bekliyorum!',
        'Yok yok olmadı devam et çok iyi gidiyorsun!',
        'Korkma be sadece küçük bir sürpriz!',
        'HAHAHHA FOTONU ÇEKTİM GÖRMEK İSTİYORSAN BİR DAHA BASMAN LAZIM ZUHAHAHAHHA'
    ];

    if (clickCount < 5) {
        alert(messages[clickCount]);
    } else {
        window.location.href = 'https://www.youtube.com/watch?v=uDeTc8ee8lc';
    }
}
