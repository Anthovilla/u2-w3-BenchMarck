
console.log('hola')
const URL = 'https://striveschool-api.herokuapp.com/api/product/'

const addressBarContent = new URLSearchParams(location.search)

const productId = addressBarContent.get('id')
console.log('EVENTID', productId)


const nameInput = document.getElementById('game-name')
const descriptionInput = document.getElementById('game-descrizione')
const brandInput = document.getElementById('game-brand')
const imgInput = document.getElementById('game-image')
const priceInput = document.getElementById('game-price')




if (productId) {
  document.querySelector('.btn-primary').innerText = 'Modifica product'
  document.querySelector('h1').innerText = 'OPGame - Modifica product'
  fetch(URL + productId,{
    headers: {
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3YzgxMDEyYjUwYzAwMTQ5ZTRmNjQiLCJpYXQiOjE2ODg3MTczMjgsImV4cCI6MTY4OTkyNjkyOH0.t-BjUzpCYKLTfjyphPaswGGSfKm06JJ6jYKhqRzATyc"
    }
  }
  )
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore nel recupero dei dettagli del prodotto")
    }
  })
  .then((detail) => {
    console.log('DETAIL', detail)

    const nameInput = document.getElementById('game-name')
    const descriptionInput = document.getElementById('game-descrizione')
    const brandInput = document.getElementById('game-brand')
    const imgInput = document.getElementById('game-image')
    const priceInput = document.getElementById('game-price') 

    nameInput.value = detail.name
    descriptionInput.value = detail.description
    brandInput.value = detail.brand
    imgInput.value = detail.imageUrl
    priceInput.value = detail.price

  })
  
  .catch((err) => {
    alert(err)
  })
  
  
}



//adesso prendo il form, per recuperari i valori , creando un oggetto con fetch 'POST'

//form

let gameform = document.getElementById('game-form')
gameform.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('prendo i dati di form')


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


let urlToUse
if (productId) {
  urlToUse = URL +  productId
} else {
  urlToUse = URL
}

let methodToUse
if (productId) {
  methodToUse = 'PUT'
} else {
  methodToUse = 'POST'
}

fetch(urlToUse, {
  method: methodToUse, 
    body: JSON.stringify(newProduct),

    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZGIzYTEyYjUwYzAwMTQ5ZTUwNjQiLCJpYXQiOjE2ODg4Mjc0NTYsImV4cCI6MTY5MDAzNzA1Nn0.xHRuZWJu9q6jnTiUMNL8iPGHuceYKzcsVw9DOoanxRY",
         'Content-Type': 'application/json'    
    }

})

.then((res) => {
    if (res.ok) {

      nameInput.value = ''
       descriptionInput.value = ''
       brandInput.value =''
       imgInput.value = ''
       priceInput.value =''
       alert('Prodotto salvato')

      location.assign('home.html')
    } else {
      throw new Error("Error!! ")
    }
  })
  .catch((err) => {
    console.log(err)
  })

})