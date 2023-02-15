//בס"ד

'use strict';

// let gTxtPos = {
//     x: 10,
//     y: 30
// }

// let gRectStrokeColor = 'white'

function drawImg(elImg) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawRect(x, y, color) {
    gCtx.beginPath()
    gCtx.rect(x, y, 380, getMemeValue('size') + 10)
    gCtx.strokeStyle = color
    gCtx.stroke()
    // gCtx.fillStyle = 'orange'
    // gCtx.fill()
}

function drawText(text, gTxtPos) {
    // gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = getMemeValue('color') || 'white'
    gCtx.font = `${getMemeValue('size')}px Impact`
    // gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, gTxtPos.x, gTxtPos.y)
    gCtx.strokeText(text, gTxtPos.x, gTxtPos.y)
}

function copyImg() {
    gImgData = gCtx.getImageData(0, 0, gElCanvas.width, gElCanvas.height)
}

function pasteImg() {
    gCtx.putImageData(gImgData, 0, 0)
}

function setTxtPos() {
    if (gTxtPos.y === 30) gTxtPos.y = 370
    else gTxtPos.y = 30
}


function drawMeme(meme) {
    drawImg(getImg())
    for (let index = 0; index < meme.lines.length; index++) {

        switch (index) {
            case 0:
                drawRect(10, 10, meme.lines[index].rectStroke)
                drawText(meme.lines[index].txt, { x: 30, y: 30 })
                break
            case 1:
                drawRect(10, gElCanvas.height - 60, meme.lines[index].rectStroke)
                drawText(meme.lines[index].txt, { x: 30, y: 370 })
                break
            case 2:
                drawRect(10, gElCanvas.height - 200, meme.lines[index].rectStroke)
                drawText(meme.lines[index].txt, { x: 30, y: 230 })
                break
        }
    }
}

// function focusLine() {
//     // gCtx.strokeStyle = 'yellow'
//     // gCtx.stroke()
//     gRectStrokeColor = 'yellow'
// }

// function blurLine() {
//     // gCtx.strokeStyle = 'white'
//     // gCtx.stroke()
//     gRectStrokeColor = 'white'
// }
