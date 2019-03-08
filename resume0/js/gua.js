const log = function () { 
    console.log.apply(console, arguments)
}

const e = function (sel) {
    return document.querySelector(sel)
}

const es = function (sel) {
    return document.querySelectorAll(sel)
}

const find = function (element, sel) {
    return element.querySelector(sel)
}