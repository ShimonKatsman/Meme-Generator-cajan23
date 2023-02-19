//בס"ד

'use strict';

var gTxtPosUp = {
    x: 30,
    y: 30
}
var gTxtPosCenter = {
    x: 30,
    y: 200
}
var gTxtPosDown = {
    x: 30,
    y: 370
}

var gRectHeightUp = 10
var gRectHeightDown = 340
var gRectHeightCenter = 180

var gStrokeStyle = 'black'

function drawImg(elImg, gCtx = gCtx) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawRect(x, y, color, line, gCtx = gCtx) {
    gCtx.beginPath()
    gCtx.rect(x, y, 380, getMemeValue('size', line) + 10)
    gCtx.strokeStyle = color
    gCtx.stroke()
    // gCtx.fillStyle = 'orange'
    // gCtx.fill()
}

function drawText(text, gTxtPos, place, font, line, gCtx = gCtx) {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gStrokeStyle
    gCtx.fillStyle = getMemeValue('color', line) || 'white'
    gCtx.font = `${getMemeValue('size', line)}px ${font}`
    gCtx.textAlign = place
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, gTxtPos.x, gTxtPos.y)
    gCtx.strokeText(text, gTxtPos.x, gTxtPos.y)
}

// function copyImg() {
//     return gCtx.getImageData(0, 0, gElCanvas.width, gElCanvas.height)
// }

// function pasteImg(key) {
//     gCtx.putImageData(key, 0, 0)
// }

// function setTxtPos() {
//     if (gTxtPos.y === 30) gTxtPos.y = 370
//     else gTxtPos.y = 30
// }

function drawMeme(meme, gCtx = gCtx, img = getImg(), color = undefined) {
    drawImg(img, gCtx)
    for (let index = 0; index < meme.lines.length; index++) {
        if (meme.lines[index].isDeleted) continue

        let strokeColor = color || meme.lines[index].rectStroke

        switch (index) {
            case 0:
                drawRect(10, gRectHeightUp, strokeColor, index, gCtx)
                drawText(meme.lines[index].txt, gTxtPosUp, meme.lines[index].align, meme.lines[index].font, index, gCtx)
                break
            case 1:
                drawRect(10, gRectHeightDown, strokeColor, index, gCtx)
                drawText(meme.lines[index].txt, gTxtPosDown, meme.lines[index].align, meme.lines[index].font, index, gCtx)
                break
            case 2:
                drawRect(10, gRectHeightCenter, strokeColor, index, gCtx)
                drawText(meme.lines[index].txt, gTxtPosCenter, meme.lines[index].align, meme.lines[index].font, index, gCtx)
                break
        }
    }
}

function setLineHeight(num) {
    let meme = getMeme()
    switch (meme.selectedLineIdx) {
        case 0:
            gTxtPosUp.y += num
            gRectHeightUp += num
            break
        case 1:
            gTxtPosDown.y += num
            gRectHeightDown += num
            break
        case 2:
            gTxtPosCenter.y += num
            gRectHeightCenter += num
            break
    }
}

function setAlign(place) {
    let meme = getMeme()
    meme.lines[meme.selectedLineIdx].align = place

    switch (place) {
        case 'left':
            switch (meme.selectedLineIdx) {
                case 0:
                    gTxtPosUp.x = 30
                    break
                case 1:
                    gTxtPosDown.x = 30
                    break
                case 2:
                    gTxtPosCenter.x = 30
                    break
            }
            break
        case 'center':
            switch (meme.selectedLineIdx) {
                case 0:
                    gTxtPosUp.x = 200
                    break
                case 1:
                    gTxtPosDown.x = 200
                    break
                case 2:
                    gTxtPosCenter.x = 200
                    break
            }
            break
        case 'right':
            switch (meme.selectedLineIdx) {
                case 0:
                    gTxtPosUp.x = 360
                    break
                case 1:
                    gTxtPosDown.x = 360
                    break
                case 2:
                    gTxtPosCenter.x = 360
                    break
            }
            break
    }

    renderMeme()
}

function toggleStroke() {
    gStrokeStyle = gStrokeStyle === 'black' ? 'rgba(0, 0, 0, 0)' : 'black'
    renderMeme()
}


function cleanImg() {
    let meme = getMeme()

    for (let index = 0; index < meme.lines.length; index++) {

        switch (index) {
            case 0:
                drawRect(10, gRectHeightUp, 'rgba(255, 255, 255, 0)')
                break
            case 1:
                drawRect(10, gRectHeightDown, 'rgba(255, 255, 255, 0)')
                break
            case 2:
                drawRect(10, gRectHeightCenter, 'rgba(255, 255, 255, 0)')
                break
        }
    }
}