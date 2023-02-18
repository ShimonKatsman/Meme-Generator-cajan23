//בס"ד

'use strict';

var gImg

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [{ id: 1, url: '1.jpg', keywords: ['funny', 'trump'] },
{ id: 2, url: '2.jpg', keywords: ['cute', 'puppy', 'puppies'] },
{ id: 3, url: '3.jpg', keywords: ['cute', 'puppy', 'baby'] },
{ id: 4, url: '4.jpg', keywords: ['cute', 'cat'] },
{ id: 5, url: '5.jpg', keywords: ['funny', 'baby'] },
{ id: 6, url: '6.jpg', keywords: ['funny', 'history'] },
{ id: 7, url: '7.jpg', keywords: ['funny', 'baby'] },
{ id: 8, url: '8.jpg', keywords: ['funny', 'hat'] },
{ id: 9, url: '9.jpg', keywords: ['funny', 'baby'] },
{ id: 10, url: '10.jpg', keywords: ['funny', 'obama'] },
{ id: 11, url: '11.jpg', keywords: ['weird', 'hug'] },
{ id: 12, url: '12.jpg', keywords: ['funny', 'hecht'] },
{ id: 13, url: '13.jpg', keywords: ['funny', 'leo', 'toast'] },
{ id: 14, url: '14.jpg', keywords: ['serious', 'Morpheus', 'matrix'] },
{ id: 15, url: '15.jpg', keywords: ['funny', 'lotr'] },
{ id: 16, url: '16.jpg', keywords: ['funny', 'star trek'] },
{ id: 17, url: '17.jpg', keywords: ['serious', 'putin'] },
{ id: 18, url: '18.jpg', keywords: ['funny', 'toys'] }]

var gMeme = {
    selectedImgId: NaN,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            align: 'left',
            color: undefined,
            rectStroke: 'white',
            font: 'impact'
        }
    ]
}

// function getImg(elImg) {
//     let url = elImg.src
//     let urlArr = url.split('/')
//     let jpg = urlArr[urlArr.length - 1]

//     let img = gImgs.find(item => item.url === jpg)

//     return img
// }

function getImg() {
    return gImg
}

function getImgs() {
    return gImgs
}

function setImg(elImg) {
    gImg = elImg
}

// function setImg(elImg) {
//     gMeme.selectedImgId = +elImg.dataset.num


//     gImg = gImgs.find(item => item.id === gMeme.selectedImgId)
//     console.log('gImg', gImg)
// }

function updateMeme(elImg) {
    gMeme.selectedImgId = +elImg.dataset.num
    gMeme.selectedLineIdx = 0

    gMeme.lines.splice(1)

    gMeme.lines[0] = {
        txt: '',
        size: 40,
        align: 'left',
        color: undefined,
        rectStroke: 'white',
        font: 'impact'
    }
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
}

function changeFontSize(num) {
    gMeme.lines[gMeme.selectedLineIdx].size += num
    renderMeme()
}

function getMemeValue(key) {
    return gMeme.lines[gMeme.selectedLineIdx][key]
}

function addMemeLine() {
    gMeme.lines[gMeme.lines.length] = {
        txt: '',
        size: 40,
        align: 'left',
        color: undefined,
        rectStroke: 'white',
        font: 'impact'
    }
}

function setLine() {

    if (gMeme.lines[gMeme.selectedLineIdx].rectStroke === 'yellow') gMeme.lines[gMeme.selectedLineIdx].rectStroke = 'white'

    gMeme.selectedLineIdx += 1

    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0

    if (gMeme.lines[gMeme.selectedLineIdx].rectStroke == 'rgba(255, 255, 255, 0)') {
        gMeme.selectedLineIdx = gMeme.selectedLineIdx === gMeme.lines.length - 1 ? 0 : gMeme.selectedLineIdx + 1
        setLine()
    }

    if (gMeme.lines[gMeme.selectedLineIdx].rectStroke === 'white') gMeme.lines[gMeme.selectedLineIdx].rectStroke = 'yellow'
}
// else {
//     gMeme.lines[gMeme.selectedLineIdx].rectStroke = 'white'
//     gMeme.lines[gMeme.selectedLineIdx].rectStroke = 'yellow'
// }


function deleteMemeLine() {
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    gMeme.lines[gMeme.selectedLineIdx].rectStroke = 'rgba(255, 255, 255, 0)'

    setLine()
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
    renderMeme()
}