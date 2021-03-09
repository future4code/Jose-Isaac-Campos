const posts = []

function getPostData(inputFields) {
  const post = {
    "title-post": '',
    "author-post": '',
    "content-post": '',
    "image-post": ' '
  }

  for (let id of inputFields) {
    const input = document.getElementById(id)

    post[id] = input.value
    input.value = ''
  }

  return post
}

function isValidInput(element) {
  if (element.value === '') {
    element.classList.remove('success')
    element.classList.add('error')
  } else {
    element.classList.add('success')
  }
}

function isValidData(inputFields) {
  let isValid = true

  for (let id of inputFields) {
    let element = document.getElementById(id)

    if (element.value === '') {
      if (id === 'image-post') {

      } else {
        element.classList.remove('success')
        element.classList.add('error')
        isValid = false
      }
    } else {
      element.classList.remove('success')
    }
  }

  if (!isValid) { return false } else { return true }
}

function isValidImage(element) {
  if (element.value !== '') {
    let { value } = element
    if (!(value.includes('http') &&
      (value.includes('.jpg') || value.includes('.png'))
    )) {
      element.value = ''
      alert('Imagem inválida')
    }
  }
}

function renderPost() {
  let htmlPosts = ''

  for (const post of posts) {
    htmlPosts += `
    <article>
    <h3>${post['title-post']}</h3>
    <p>${post['author-post']}</p>
    <div>
    <img id='banner' src='${post['image-post']}'>
    <p>${post['content-post']}</p>
    </div>
    </article>
    `
  }

  localStorage.setItem('posts', htmlPosts)
  location.assign(`${location.origin}/post/src/posts.html`)
}

function createPost() {
  const inputFields = ['title-post', 'author-post', 'content-post', 'image-post']

  if (isValidData(inputFields)) {
    posts.push(getPostData(inputFields))
    renderPost()
    alert('Post criado com sucesso!')
  } else {
    alert("Por favor, verifique os campos em vermelho")
  }
}