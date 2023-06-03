const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }
})

const tabsin = document.getElementById('tabsin');
const contentin = document.querySelectorAll('.contentin');

const changeClassin = el => {
    for (let i = 0; i < tabsin.children.length; i++) {
        tabsin.children[i].classList.remove('active');
    }
    el.classList.add('active');
}
tabsin.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClassin(e.target);
    for (let i = 0; i < contentin.length; i++){
        contentin[i].classList.remove('active');
        if(contentin[i].dataset.content === currTab){
            contentin[i].classList.add('active');
        }
    }
})








