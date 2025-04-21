window.onload = function () {
    const videos = JSON.parse(localStorage.getItem("videos") || "[]");
    const container = document.getElementById("video-list");
  
    videos.forEach(video => {
      const videoEl = document.createElement("video");
      videoEl.src = video.src;
      videoEl.controls = false;
      videoEl.onclick = () => {
        localStorage.setItem("currentVideo", JSON.stringify(video));
        window.location.href = "video.html";
      };
      container.appendChild(videoEl);
    });
  };
  