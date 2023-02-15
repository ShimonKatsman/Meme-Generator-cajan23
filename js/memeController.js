//בס"ד

'use strict';

let gImgData

function renderMeme() {
    let meme = getMeme()
    drawMeme(meme)
    // if (gImgData) pasteImg()
    // else drawImg(getImg())

    // drawRect(10, 10)
    // drawText(meme.lines[meme.selectedLineIdx].txt, gTxtPos)
    // console.log(gMeme);
}

function updateMemeText(txt) {
    setLineTxt(txt)

    renderMeme()
}

function addLine() {
    addMemeLine()
    // console.log('gMeme', gMeme)
    drawRect(10, gElCanvas.height - 60)
    // copyImg()
}

function switchLine() {
    // copyImg()
    // blurLine()
    setLine()
    // focusLine()
    // setTxtPos()
    renderMeme()
}
