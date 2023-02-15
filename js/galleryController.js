//בס"ד

'use strict';

function renderGallery() {
    let gallery = document.querySelector('.img-gallery')

    let imgs = getImgs()
    let strHtml = ''

    for (let index = 0; index < imgs.length; index++) {
        strHtml += `<img onclick="onImgSelect(this)" src="img/meme-imgs (square)/${imgs[index].url}">`
    }

    gallery.innerHTML = strHtml
}

function onImgSelect(elImg) {
    if (gImgData) gImgData = undefined

    setImg(elImg)

    renderMeme()
}