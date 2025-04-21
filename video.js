window.onload = function () {
  const video = JSON.parse(localStorage.getItem("currentVideo"));
  const container = document.getElementById("player");

  const videoEl = document.createElement("video");
  videoEl.src = video.src;
  videoEl.controls = true;
  videoEl.autoplay = true;
  videoEl.style.width = "100%";
  container.appendChild(videoEl);

  loadStats();
  loadComments();
};

function loadStats() {
  const id = JSON.parse(localStorage.getItem("currentVideo")).id;
  const likes = JSON.parse(localStorage.getItem(`likes_${id}`) || "0");
  const dislikes = JSON.parse(localStorage.getItem(`dislikes_${id}`) || "0");

  document.getElementById("likes").innerText = likes;
  document.getElementById("dislikes").innerText = dislikes;
}

function likeVideo() {
  const id = JSON.parse(localStorage.getItem("currentVideo")).id;
  let likes = parseInt(localStorage.getItem(`likes_${id}`) || "0");
  localStorage.setItem(`likes_${id}`, ++likes);
  loadStats();
}

function dislikeVideo() {
  const id = JSON.parse(localStorage.getItem("currentVideo")).id;
  let dislikes = parseInt(localStorage.getItem(`dislikes_${id}`) || "0");
  localStorage.setItem(`dislikes_${id}`, ++dislikes);
  loadStats();
}

function addComment() {
  const id = JSON.parse(localStorage.getItem("currentVideo")).id;
  const comment = document.getElementById("commentText").value;
  if (!comment) return;

  const comments = JSON.parse(localStorage.getItem(`comments_${id}`) || "[]");
  comments.push(comment);
  localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
  document.getElementById("commentText").value = "";
  loadComments();
}

function loadComments() {
  const id = JSON.parse(localStorage.getItem("currentVideo")).id;
  const comments = JSON.parse(localStorage.getItem(`comments_${id}`) || "[]");

  const list = document.getElementById("comments");
  list.innerHTML = "";
  comments.forEach(comment => {
    const li = document.createElement("li");
    li.textContent = comment;
    list.appendChild(li);
  });
}
