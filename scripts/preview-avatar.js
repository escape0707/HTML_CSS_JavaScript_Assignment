const avatar_file = document.getElementById('avatar');
avatar_file.onchange = function () {
  loadFile(event);
}

function loadFile(event) {
  const preview_img = document.getElementById('avatar_preview');
  preview_img.src = URL.createObjectURL(event.target.files[0]);
}