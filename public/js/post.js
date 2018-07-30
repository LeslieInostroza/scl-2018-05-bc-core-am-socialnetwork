const processPostInput = () => {
  const postInput = document.getElementById('postInput');
  if (postInput.value.length < 1) {
    alert('Mensaje vacío')
  } else {
    const postId = firebase.database().ref().child('posts').push({
      creator: firebase.auth().currentUser.displayName,
      avatar: firebase.auth().currentUser.photoURL,
      text: postInput.value,
      starCount: 0
    }).key
    if (document.getElementById('postImage').files[0]) {
      const file = document.getElementById('postImage').files[0];
      firebase.storage().ref(`/posts/${postId}`).put(file).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          firebase.database().ref().child('posts/' + postId).update({
            photoURL: downloadURL
          });
        }).catch(() => { });
      });
    }
    postInput.value = ''; // limpiar
  }
};

const drawPhoto = (url) => {
  if (url) {
    return `<img src="${url}?alt=media" height="128" width="128">`;
  }
  return '';
}

const drawPosts = (snapshot) => {
  let posting = '';
  Object.entries(snapshot.val()).forEach((post) => {
    posting = `
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> 
        <h6 class='card-title'><img src="${post[1].avatar}" height="32" width="32"> ${post[1].creator}</h6>
        <p id="${post[0]}-txt" class="card-text text-justify editPost">
          ${post[1].text}
        </p>
        ${drawPhoto(post[1].photoURL)}
        <i class="fas fa-trash-alt" id ="eliminarPost" data-postId="${post[0]}" 
          onclick="deletePost(event)">
        </i>
        <i class="fas fa-edit" id="editPost" data-id="${post[0]}
          "onclick="editPosts(event)"> 
       </i>
        <i class="fas fa-star" id="botonlike" onClick="like(event)" data-likePost="${post[0]}">
          <span id="likePosts">${post[1].starCount}</span>
        </i>
      </li>
    </ul>
    ` + posting;
  });
  document.getElementById('postScreen').innerHTML = posting;
};


//borrar post
const deletePost = (event) => {
  event.stopPropagation();
  let confirmar = confirm('¿desea eliminar el post?');
  if (confirmar === true) {
    const idPosts = event.target.getAttribute('data-postId');
    firebase.database().ref('posts').child(idPosts).remove();
  } else { };
};

//like post
const like = (event) => {
  event.stopPropagation();
  const idLike = event.target.getAttribute('data-likePost');
  firebase.database().ref('posts/' + idLike).once('value', function (post) {
    let result = (post.val().starCount || 0) + 1;
    console.log(result);

    firebase.database().ref('posts').child(idLike).update({
      starCount: result
    });
  });
};

//edit Post

/*const editPosts = (event) => {
  let idEdit = event.target.getAttribute('data-id');
};*/
