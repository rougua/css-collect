!function () {
    const specialTags = es('[data-anchor]')
    specialTags.forEach(item => {
        item.classList.add('offset')
    })
    findClosestAndRemoveOffset()
    window.addEventListener('scroll', (x) => {
        findClosestAndRemoveOffset()
    })
    function findClosestAndRemoveOffset() {
        const specialTags = es('[data-anchor]')
        let minIndex = 0
        for (let i = 0; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        // minIndex 就是距离窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = e(`a[href="#${id}"]`)
        let li = a.parentNode
        let brothersAndMe = li.parentNode.children
        for (let i = 0; i < brothersAndMe.length; i++) {
            const item = brothersAndMe[i]
            item.classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
    
    let liTags = es('nav.menu > ul > li')
    liTags.forEach(item => {
        item.onmouseenter = (x) => {
            x.currentTarget.classList.add('active')
        }
        item.onmouseleave = (x) => {
            x.currentTarget.classList.remove('active')
        }
    })
}()