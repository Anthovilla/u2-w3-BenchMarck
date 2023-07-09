
// fetch('https://striveschool-api.herokuapp.com/api/product/', {
//     headers: {
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZGIzYTEyYjUwYzAwMTQ5ZTUwNjQiLCJpYXQiOjE2ODg3MjIyMzQsImV4cCI6MTY4OTkzMTgzNH0.x82dfxq6_f1wWY7_41YqqjAwpv2haMpmzTVtgPa3tDw"

//     }
// })


const getProducts = function () {
    const URL = 'https://striveschool-api.herokuapp.com/api/product/'
    fetch(URL, {
        headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZGIzYTEyYjUwYzAwMTQ5ZTUwNjQiLCJpYXQiOjE2ODg4Mjc0NTYsImV4cCI6MTY5MDAzNzA1Nn0.xHRuZWJu9q6jnTiUMNL8iPGHuceYKzcsVw9DOoanxRY"
        }
        })
    

.then((res) => {
    console.log('respons GET',res)
    if (res.ok) {
        return res.json()
    } else {
        throw new Error('error nella chiamata Api')
    }
})

//2

.then((products) => {
    console.log('details products',products)
    products.forEach((item) => {
        let newCol = document.createElement('div')
        newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')
        newCol.innerHTML = `
        <div class="card h-100">
        <img
        src="${item.imageUrl}"
                class="card-img-top"
                alt="concert placeholder image"
                />
                <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">
                  ${item.description}
                  </p>
                  <p class="card-text fst-italic">
                  ${item.brand}
                  </p>
                  <p class="card-text fw-bold text-end">
                  ${item.price}€
                  </p>
                  <div class="d-flex justify-content-between">
                  <a href="./details.html?id=${item._id}" class="btn btn-primary me-2">Scopri di più</a>
                  <a href="./backoffice.html?id=" class="btn btn-warning">cancel</a>
                  </div>
                  </div>
                  </div>
                  `
                  const productRow = document.getElementById('productRow')
                  productRow.appendChild(newCol)
    })

})

//3
.catch((err) => {
    console.log(err)
})
}

getProducts()
