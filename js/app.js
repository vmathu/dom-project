//create navbar__item
const sections = document.querySelectorAll('section');
let i = 0;
for (const section of sections) {
    i++;
    let node = document.createElement("li");
    let node__a = document.createElement("a");
    node__a.innerHTML = `Section${i}`;
    node.appendChild(node__a);
    document.getElementById("navbar__list").appendChild(node);
    const attribute = document.createAttribute('href');
    attribute.value = `#section${i}`;
    node__a.setAttributeNode(attribute);
    node__a.classList.add('menu__link');
    node__a.classList.add('navbar--item');
    node__a.classList.add(`section${i}`);
}

//ClickEvent
const navItem = document.querySelectorAll('.navbar--item');
for (let item of navItem) {
    item.addEventListener('click', function () {
        let bool = document.querySelector(`.current`);
        if (bool) bool.classList.toggle('current');
        item.classList.toggle('current');
    });
}

//ScrollEvent
function solve(id1, id2, id3, c) {
    document.querySelector(id1).classList.add(c);
    document.querySelector(id2).classList.remove(c);
    document.querySelector(id3).classList.remove(c);
}
window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.documentElement.scrollTop > (document.querySelector("#section3").offsetTop) - 100) {
        document.getElementById("myBtn").classList.add('on');
        solve("#section3", "#section2", "#section1", "your-active-class");
        solve(".section3", ".section2", ".section1", "current");
    } else {
        if (document.documentElement.scrollTop > (document.querySelector("#section2").offsetTop - 100)) {
            document.getElementById("myBtn").classList.add('on');
            solve("#section2", "#section3", "#section1", "your-active-class");
            solve(".section2", ".section3", ".section1", "current");
        } else {
            document.getElementById("myBtn").classList.remove('on');
            solve("#section1", "#section2", "#section3", "your-active-class");
            solve(".section1", ".section2", ".section3", "current");
        }
    }
}