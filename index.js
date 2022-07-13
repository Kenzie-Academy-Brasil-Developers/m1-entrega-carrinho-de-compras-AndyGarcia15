const productsCart = [
    {
        id: 1,
        name: "Aguá",
        price: 4
    },

    {
        id: 2,
        name: 'Suco',
        price: 4
    },

    {
        id:3,
        name: 'Batata',
        price:6
    }

]

function soma(arr){
    let resultado = 0
    for(let i = 0; i < arr.length; i++){
        resultado += arr[i].price
    }

    return resultado
}


function carrinho(arr){

    const main = document.querySelector('main');
    
    const ul = document.createElement('ul');

    main.appendChild(ul)
    

    for(let i = 0; i < arr.length;i++){
        

        const li = document.createElement('li');
        const spanNome = document.createElement('span')
        spanNome.textContent = arr[i].name

        const spanPreco = document.createElement('span')
        spanPreco.textContent = `R$ ${arr[i].price}`

        li.appendChild(spanNome)
        li.appendChild(spanPreco)
        ul.appendChild(li)
    }
    const total = document.createElement('span')
    total.textContent = `Total da compra R$ ${soma(productsCart)}`

    const button = document.createElement('button')
    button.textContent = 'finalizar'
    
    const section = document.createElement('section')
    section.classList.add('section')
    section.appendChild(total)
    section.appendChild(button)
    main.appendChild(section)
}

carrinho(productsCart)