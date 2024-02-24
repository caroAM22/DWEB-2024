//Agregar nuevo elemento

const container = document.querySelector('#product-cards');
const elementCls = ['col-md-3', 'py-3' ,'py-md-0'];
let fila;

const createCardElement = () => {
    const card = document.createElement('div');
    card.classList.add('card');

    //Elementos dentro de la card
    const img = document.createElement('img');
    img.src = '../assets/images/pcm1.png';
    img.alt = 'Una vaca';

    const cardOverlay = document.createElement('div');
    cardOverlay.classList.add('card-body');

    const title = document.createElement('h3');
    title.innerHTML = 'TRY';
    title.className = 'text-center';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'UFFF';
    paragraph.className = 'text-center';

    const starRating = document.createElement('div');
    starRating.classList.add('star', 'text-center');
    for (let i = 0; i < 5; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fa-solid', 'fa-star', 'checked');
        starRating.appendChild(starIcon);
    }

    cardOverlay.append(title, paragraph, starRating);

    card.append(img, cardOverlay);

    return card;
}

for(let i = 0; i < 10; i++) {
    if (i % 4 === 0) {
        fila = document.createElement('div');
        fila.classList.add('row');
        container.appendChild(fila);
    }

    const element = document.createElement('div');
    element.classList.add(...elementCls);

    //card element

    const cardElement = createCardElement();
    element.appendChild(cardElement);
    fila.style.marginTop = '30px';
    fila.appendChild(element);
}