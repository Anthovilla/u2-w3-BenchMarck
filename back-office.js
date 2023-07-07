
console.log('hola')
const URL = 'https://striveschool-api.herokuapp.com/api/product/'

const addressBarContent = new URLSearchParams(location.search)




//adesso prendo il form, per recuperari i valori , creando un oggetto con fetch 'POST'

//form

let gameform = document.getElementById('game-form')
gameform.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('prendo i dati di form')

    //prendo tutti gli input
    const nameInput = document.getElementById('game-name')
    const descriptionInput = document.getElementById('game-descrizione')
    const brandInput = document.getElementById('game-brand')
    const imgInput = document.getElementById('game-image')
    const priceInput = document.getElementById('game-price')

    //i loro .value viene impacchettato al oggetto
const newProduct = {
    name: nameInput.Value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imgInput.value,
    price: priceInput.value,
}

console.log('valori form',newProduct)

//API
//method POST

const URL = 'https://striveschool-api.herokuapp.com/api/product/'



//provando... 

fetch(urlToUse, {
    method: methodToUse, 
    body: JSON.stringify(newProduct),

    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZGIzYTEyYjUwYzAwMTQ5ZTUwNjQiLCJpYXQiOjE2ODg3MjIyMzQsImV4cCI6MTY4OTkzMTgzNH0.x82dfxq6_f1wWY7_41YqqjAwpv2haMpmzTVtgPa3tDw"
        // 'Content-Type': 'application/json',    // provando perche NON va la scritta 'content-TYPE'
    }

})

.then((res) => {
    if (res.ok) {
      alert('Game, Salvato')

      nameInput.value = ''
       descriptionInput.value = ''
       brandInput.value =''
       imgInput.value = ''
       priceInput.value =''


      location.assign('home.html')
    } else {
      throw new Error("Error!! ")
    }
  })
  .catch((err) => {
    console.log(err)
  })

})