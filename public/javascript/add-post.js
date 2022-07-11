function newPostClick() {
  document.querySelector('.container').classList.remove('hide');

  var btnContainer = document.querySelector('.btn-container');
  btnContainer.classList.remove('btn-container');
  btnContainer.classList.add('btn-container-rel');
}

async function createPost(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="title"]').value.trim();
  const content = document.querySelector('#content-input').value.trim();

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log('post created'0;)
      document.location.replace('/dashboard');
    }
    else {
      alert
    }
  }
}

document.querySelector('.new-post-btn').addEventListener('click', newPostClick);
document.querySelector('.new-post-form').addEventListener('submit', createPost);