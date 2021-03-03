const posts = sessionStorage.getItem('posts')

console.log(posts)
let container = document.getElementById('container-de-posts')
console.log(container)
container.innerHTML += posts
