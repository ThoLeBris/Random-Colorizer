// Initialisation de nos sélecteurs

const randomColor = document.querySelector('#color-button');
const bgColor = document.querySelector('main');
const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// ? Méthode HEXADECIMAL   :  #1A9AAF
randomColor.addEventListener('click', (e)=>{
    const colorPicked = [];
    for(let i = 0; i < 6; i++){
        let pickColor = hexArray[Math.floor(Math.random() * hexArray.length)];
        colorPicked.push(pickColor);
    }
    // Boucle FOR = for(initialisateur ; condition ; incrémentation)
    const colorHex = colorPicked.join('');
    bgColor.style.background = `#${colorHex}`;
});

// ? Méthode RGB  :  123,123,123
randomColor.addEventListener('click',(e)=>{
    const randomRGB = () => Math.floor(Math.random() * 255);

    let rgbString = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
    bgColor.style.background = `${rgbString}`;
})

// ! Les deux fonctionnent, l'une doit être commenté pour que l'autre fonctionne!!