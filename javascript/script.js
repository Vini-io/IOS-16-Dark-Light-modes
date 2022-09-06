




function setlight() {

    let body = document.getElementById('body')
    let textolight = document.getElementsByClassName('text-light')

    body.style.backgroundColor = '#FFFFFF';

    for (var i = 0; i < textolight.length; i++) {
        textolight[i].style.color = "#000000";
    }
}

function resetlight() {

    console.log('carregando... luz')


    let body = document.getElementById('body')
    let textolight = document.getElementsByClassName('text-light')


    body.style.backgroundColor = '#4a4a4a';

    for (let i = 0; i < textolight.length; i++) {
        textolight[i].style.color = "#FFFFFF";
    }
}




function setdark() {

    console.log('carregando... escuro')

    let body = document.getElementById('body')
    let textolight = document.getElementsByClassName('text-light')

    body.style.backgroundColor = '#0E0E0E';

    for (let i = 0; i < textolight.length; i++) {
        textolight[i].style.color = "#FFFFFF";
    }
}

function resetdark() {

    let body = document.getElementById('body')
    let textolight = document.getElementsByClassName('text-light')


    body.style.backgroundColor = '#4a4a4a';

    for (var i = 0; i < textolight.length; i++) {
        textolight[i].style.color = "#FFFFFF";
    }
}









setInterval(function expan() {

    let ios = document.getElementById('ios16-cont')

    ios.style.width=  '448px';
    ios.style.color = 'black'
    
}, 10000);

setInterval(function fech() {

    let ios = document.getElementById('ios16-cont')
    
    ios.style.width=  '348px';
    ios.style.color = '#FFFFFF'

},14000)
