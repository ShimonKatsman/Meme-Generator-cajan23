//בס"ד

'use strict';

var gElImgs = []

function renderGallery() {
    let gallery = document.querySelector('.img-gallery')

    let imgs = getImgs()
    let strHtml = ''

    for (let index = 0; index < imgs.length; index++) {
        let str = `<img data-num="${index + 1}" onclick="onImgSelect(this)" src="img/meme-imgs (square)/${imgs[index].url}">`

        gElImgs[index] = str
        strHtml += str
    }

    gallery.innerHTML = strHtml
}

function onImgSelect(elImg) {
    updateMeme(elImg)
    setImg(elImg)
    renderMeme()
}