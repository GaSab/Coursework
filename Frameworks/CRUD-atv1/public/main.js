var update = document.getElementById('update')

update.addEventListener('click', function () {
  //put request
  fetch('quotes', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': 'sherlock',
    'quote': 'Elementary, my dear watson'
  	})
  })
})

var del = document.getElementById('delete')

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'professor'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload()
  })
})