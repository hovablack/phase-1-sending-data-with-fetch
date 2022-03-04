// Add your code here

function submitData(name, email) {
  const destinationURL = "http://localhost:3000/users"

  return fetch(destinationURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(res => res.json())
  .then(userData => document.body.innerHTML = userData["id"])
  .catch(function (error) {
    document.body.innerHTML = error.message
  })
}