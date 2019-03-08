const log = function () { 
    console.log.apply(console, arguments)
}

const e = function (sel) {
    return document.querySelector(sel)
}

const find = function (element, sel) {
    return element.querySelector(sel)
}