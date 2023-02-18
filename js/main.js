//בס"ד

'use strict';

var gElCanvas
var gCtx
let imgCounter = 0

let gElMemeCanvasArr = []
let gCtxMemeArr = []

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
}

function onDownload(elLink) {
    let meme = getMeme()
    drawMeme(meme, gCtx, getImg(), 'rgba(255, 255, 255, 0)')
    downloadImg(elLink)
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg')

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}

function onSave() {
    let meme = getMeme()
    drawMeme(meme, gCtx, getImg(), 'rgba(255, 255, 255, 0)')

    saveToStorage(`meme-${imgCounter}`, meme)

    let imgContent = gElCanvas.toDataURL('image/jpeg')

    document.querySelector('.my-memes').innerHTML += `<img data-meme="meme-${imgCounter}"  onclick="onMemeSelect(this)" src="${imgContent}" width ="100" height = "100"/>`

    imgCounter++

    onMyMemes()
}

function onMemeSelect(el) {
    let data = el.dataset.meme

    let meme = loadFromStorage(`${data}`)

    let img = document.querySelector(`[data-num="${meme.selectedImgId}"]`)

    drawMeme(meme, gCtx, img)

    onEditor()
}

function onGallery() {
    document.querySelector('.img-gallery').classList.remove('hide')
    document.querySelector('.meme-gen').classList.add('hide')
    document.querySelector('.my-memes').classList.add('hide')
}

function onEditor() {
    document.querySelector('.img-gallery').classList.add('hide')
    document.querySelector('.meme-gen').classList.remove('hide')
    document.querySelector('.my-memes').classList.add('hide')
}

function onMyMemes() {
    document.querySelector('.img-gallery').classList.add('hide')
    document.querySelector('.meme-gen').classList.add('hide')
    document.querySelector('.my-memes').classList.remove('hide')
}


// function onSave() {
//     // let meme = getMeme()
//     // saveToStorage(`meme-${imgCounter}`, meme)

//     document.querySelector('.my-memes').innerHTML += `<canvas class="meme-${imgCounter}" width="400" height="400"></canvas>`

//     gElMemeCanvasArr[imgCounter] = document.querySelector(`.meme-${imgCounter}`)
//     gCtxMemeArr[imgCounter] = gElMemeCanvasArr[imgCounter].getContext('2d')

//     // for (var i = 0; i <= imgCounter; i++) {
//     // let img = loadFromStorage(`meme-${i}`)
//     let img = gCtx.createImageData(0, 0, gElCanvas.width, gElCanvas.height)
//     // drawMeme(img, gCtxMemeArr[i], gElImgs[meme.selectedImgId])
//     gCtxMemeArr[imgCounter].putImageData(img, 0, 0)

//     imgCounter++
// }
// }
// function onSave() {
//     let meme = getMeme()
//     saveToStorage(`meme-${imgCounter}`, meme)

//     document.querySelector('.my-memes').innerHTML += `<canvas class="meme-${imgCounter}" width="400" height="400"></canvas>`

//     gElMemeCanvasArr[imgCounter] = document.querySelector(`.meme-${imgCounter}`)
//     gCtxMemeArr[imgCounter] = gElMemeCanvasArr[imgCounter].getContext('2d')

//     for (var i = 0; i <= imgCounter; i++) {
//         let img = loadFromStorage(`meme-${i}`)
//         drawMeme(img, gCtxMemeArr[i], gElImgs[meme.selectedImgId])
//     }

//     imgCounter++
// }
