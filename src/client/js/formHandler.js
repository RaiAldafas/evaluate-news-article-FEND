import {
  validURL
} from './validateURL'

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  try {
    return await response.json()
  } catch (error) {
    console.log(error, 'error')
  }
}

const handleSubmit = async () => {

  const articleUrl = document.getElementById('url').value
  if (validURL(articleUrl)) {
    const mcData = await postData('http://localhost:8081/add-url', {
      articleUrl
    })

    document.getElementById('agreement').textContent = mcData.agreement
    document.getElementById('subjectivity').textContent = mcData.subjectivity
    document.getElementById('confidence').textContent = mcData.confidence
    document.getElementById('irony').textContent = mcData.irony
    document.getElementById('model').textContent = mcData.model
    document.getElementById('score_tag').textContent = mcData.score_tag


  } else {
    alert('Enter a valid URL')
  }
}

export default handleSubmit