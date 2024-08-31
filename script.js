let swapped = false;

document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.question').innerText = 'I love you soooo much!';
    document.querySelector('.buttons').innerHTML = '<span style="font-size: 50px; color: #d7385e;">❤️</span>';
});

document.getElementById('noButton').addEventListener('click', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    if (swapped) {
        yesButton.style.transform = 'translateX(0)';
        noButton.style.transform = 'translateX(0)';
        swapped = false;
    } else {
        yesButton.style.transform = 'translateX(100px)';
        noButton.style.transform = 'translateX(-100px)';
        swapped = true;
    }
});
