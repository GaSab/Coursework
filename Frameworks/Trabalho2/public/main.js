var update = document.getElementById('update')

update.addEventListener('click', function () {
  //put request
  fetch('estados', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    '
  	})
  })
})

var del = document.getElementById('delete')

del.addEventListener('click', function () {
  fetch('estados', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      
  })
  .then(response => {
    if (response.ok) return response.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload()
  })
})