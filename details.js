const URL = "https://striveschool-api.herokuapp.com/api/product/"

console.log(location.search)

const contentAddres = new URLSearchParams(location.search)
console.log(contentAddres)

const productId = contentAddres.get('id')
console.log('PRODUCT', productId)
console.log(URL + productId)


fetch(URL + productId,{
    headers: {
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZGIzYTEyYjUwYzAwMTQ5ZTUwNjQiLCJpYXQiOjE2ODg4Mjc0NTYsImV4cCI6MTY5MDAzNzA1Nn0.xHRuZWJu9q6jnTiUMNL8iPGHuceYKzcsVw9DOoanxRY"
    }
    }
    )
    
.then((res) => {
    if(res.ok) {
        return res.json() //dettagli dell'product
    } else {
        throw new Error("ERRORE del recupero dei dettagli dell product")
    }
})
.then((detail) => {
    console.log('DETAIL', detail)

    let newCol = document.createElement('div')
    newCol.classList.add('col', 'col-12', 'col-sm-6', 'text-center')
    newCol.innerHTML = `
    <div class="card h-100">
    <img
    src="${detail.imageUrl}"
            class="card-img-top"
            alt="concert placeholder image"
            />
            <div class="card-body">
            <h5 class="card-title">${detail.name}</h5>
            <p class="card-text">
              ${detail.description}
              </p>
              <p class="card-text fst-italic">
              ${detail.brand}
              </p>
              <p class="card-text fw-bold text-end">
              ${detail.price}€
              </p>
              <div>
              <a href="./back-office.html?id=${detail._id}" class="btn btn-warning">MODIFICA EVENTO</a>
              <button type="button" class="btn btn-danger">ELIMINA EVENTO</button>
              </div>
              </div>
              </div>
              `
              const productRow = document.getElementById('productRow')
              productRow.appendChild(newCol)


})

.catch((err) => {
    console.log(err)
})