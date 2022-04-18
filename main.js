const inputs = document.querySelectorAll(".insert input"),
    unprased = document.querySelector('#unprased code'),
    prased = document.querySelector('#prased code'),
    done = document.getElementById('done'),
    table = document.querySelector('.table'),
    closeSvg = document.querySelector('#menu-s .close'),
    openSvg = document.querySelector('#menu-s .open'),
    titles = document.querySelectorAll(".content div > h2"),
    li = document.querySelectorAll(".table ul li"),
    menuBtn = document.getElementById("menu-s");
window.onscroll = () =>
    titles.forEach((e, i) => {
        if (e.offsetTop + 50 > window.scrollY && e.offsetTop - 50 < window.scrollY) {
            document.querySelector(".table ul li.act").classList.remove("act")
            li[i].classList.add("act")
        }
    })

menuBtn.onclick = () => {
    table.classList.toggle('show')
    openSvg.classList.toggle('hide')
    closeSvg.classList.toggle('show')
}

document.forms[0].onsubmit = e => {
    e.preventDefault()
    done.style.display = "block"
    setTimeout(() => done.style.display = "none", 3000);
    const itemKey = inputs[1].value,
        jsonStr = inputs[0].value.replace(/(\w+:)|(\w+ :)/g, (m) => '"' + m.substring(0, m.length - 1) + '":');
    localStorage.setItem(itemKey, jsonStr)
}


document.forms[1].onsubmit = e => {
    e.preventDefault()
    unprased.textContent = JSON.stringify(localStorage[inputs[2].value])
}
document.forms[2].onsubmit = e => {
    e.preventDefault()
    prased.textContent = localStorage[inputs[2].value]
}


inputs[1].onkeyup = () => inputs[2].value = inputs[1].value