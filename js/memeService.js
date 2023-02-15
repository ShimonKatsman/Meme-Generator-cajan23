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
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            align: 'left',
            color: undefined,
            rectStroke: 'white'
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

function updateMeme(elImg) {
    let img = getImg(elImg)

    gMeme.selectedImgId = img.id

    // return {
    //     selectedImgId: img.id,
    //     selectedLineIdx: 0,
    //     lines: [
    //         {
    //             txt: 'I sometimes eat Falafel',
    //             size: 20,
    //             align: 'left',
    //             color: 'red'
    //         }
    //     ]
    // }
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeFontSize(num) {
    gMeme.lines[gMeme.selectedLineIdx].size += num
}

function getMemeValue(key) {
    return gMeme.lines[gMeme.selectedLineIdx][key]
}

function addMemeLine() {
    gMeme.lines[gMeme.selectedLineIdx + 1] = {
        txt: '',
        size: 40,
        align: 'left',
        color: undefined,
        rectStroke: 'white'
    }
}

function setLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1
    else gMeme.selectedLineIdx = 0
}