const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('click', () => {
    const fullWidth = window.innerWidth;
    const fullHeight = window.innerHeight;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const randx = Math.floor(Math.random() * (fullWidth - buttonWidth));
    const randy = Math.floor(Math.random() * (fullHeight - buttonHeight));

    noBtn.style.left = randx + 'px';
    noBtn.style.top = randy + 'px';
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
});