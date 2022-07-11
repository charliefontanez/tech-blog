function newPostClick() {
  document.querySelector('.container').classList.remove('hide');

  var btnContainer = document.querySelector('.btn-container');
  btnContainer.classList.remove('btn-container');
  btnContainer.classList.add('btn-container-rel');
}

async function createPost(event) {
  event.preventDefault();
  const title = document.querySelector('name=["title"]').value.trim();
  const contents = document.querySelector('name=["post-content"]').value.trim();

  if (title && contents) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        contents
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log('post created');
    }
    else {
      console.log('error');
    }
  }
}

document.querySelector('.new-post-btn').addEventListener('click', newPostClick);
document.querySelector('.new-post-form').addEventListener('submit', createPost);