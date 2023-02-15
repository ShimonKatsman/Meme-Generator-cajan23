//בס"ד

'use strict';

function renderMeme(elImg) {
    let meme = getMeme()

    drawImg(elImg)
    drawText(meme.lines[meme.selectedLineIdx].txt, 30, 30)
}

function updateMemeText(txt) {
    let meme = getMeme()

    meme.lines[meme.selectedLineIdx].txt = txt

    drawText(meme.lines[meme.selectedLineIdx].txt, 30, 30)
}

