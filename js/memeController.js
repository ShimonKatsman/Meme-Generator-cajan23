//בס"ד

'use strict';

function renderMeme() {
    let meme = getMeme()
    drawMeme(meme, gCtx)
}

function updateMemeText(txt) {
    setLineTxt(txt)
    renderMeme()
}

function addLine() {
    addMemeLine()
    renderMeme()
}

function switchLine() {
    setLine()
    renderMeme()
}

function changeHeight(num) {
    setLineHeight(num)
    renderMeme()
}

function deleteLine() {
    deleteMemeLine()
    renderMeme()
}
