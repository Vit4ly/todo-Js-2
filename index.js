const inp = document.querySelector('.todo__inp')
const btn = document.querySelector('.todo__btn')
const ul = document.querySelector('.todo__ul')
const classAcc = document.querySelector('.todo__counter')
let acc = 0

btn.addEventListener('click', () => {
    if (inp.value === '') return
    createListAndAdd(inp.value)
    inp.value = '';
    acc++
    classAcc.textContent = `${acc}`

})

function createListAndAdd(value) {
    const li = document.createElement('li')
    li.className = 'animate__animated animate__bounceInLeft list-group-item mt-2 d-flex justify-content-between align-items-center'
    li.textContent = value
    createBtnAndAdd(li)
    li.addEventListener('click', (e) => {
        li.classList.toggle('list-theme')
    })
    ul.appendChild(li)

}


function createBtnAndAdd(tag) {
    const btnRemove = document.createElement('input')
    btnRemove.type = 'button'
    btnRemove.className = 'btn btn-dark '
    btnRemove.value = 'remove'
    btnRemove.addEventListener('click', (event) => {
        ul.removeChild(tag)
        acc--
        classAcc.textContent = `${acc}`
    })
    tag.appendChild(btnRemove)
}
