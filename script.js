const input = document.getElementById('input')
const btn = document.getElementById('check')
const display = document.getElementById('display')
const clr = document.getElementById('clr')

function validator(str){
    let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    console.log(str == regex)
    return regex.test(str);
}

function update(val){
    display.innerHTML += `<p>${val} US no. : ${input.value}</p>`
}

btn.addEventListener('click',()=>{
    const val = validator(input.value)
    update(val)
})

clr.addEventListener('click',()=>{
    input.value = ""
    display.innerHTML = ""
})


