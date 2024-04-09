// Смена положения контента и плеера
  function swapWidgets() {
    var contentContainer = document.querySelector(".content-container");
    var playerContainer = document.querySelector(".player-container");

    if (contentContainer && playerContainer) {
      var contentWidth = getComputedStyle(contentContainer).width;
      var playerWidth = getComputedStyle(playerContainer).width;
      contentContainer.style.width = playerWidth;
      playerContainer.style.width = contentWidth;

        var temp = contentContainer.innerHTML;
        contentContainer.innerHTML = playerContainer.innerHTML;
        playerContainer.innerHTML = temp;
    }
}
setInterval(swapWidgets, 60000); // вызов функции каждую минуту

















// document.addEventListener('DOMContentLoaded', function() {
//   const player = document.getElementById('player');
//   player.src = ''; // Загружаем страницу по умолчанию
//   player.play(); // Запускаем воспроизведение
// });


// document.getElementById("player").addEventListener("loadeddata", function() {
//   this.play();
// });

// document.getElementById("fileList1").addEventListener("click", function(event) {
//   const file = event.target.closest("p"); // получаем ссылку на файл
//   const video = document.getElementById("player"); // получаем видеоплеер
//   video.src = URL.createObjectURL(file.dataset.file); // устанавливаем источник видео из файла
//   video.play(); // запускаем воспроизведение видео
// });
 





// document.addEventListener('DOMContentLoaded', function() {
//   const player = document.getElementById('player');
//   const fileList = document.getElementById('fileList1');
//   if (hasVideoFiles()) {
//       showVideoPlayer();
//   } else if (hasImageFiles()) {
//       showImages();
//   } else {
//       showDefaultPreview();
//   }
//   function hasVideoFiles() {
//       const files = fileList.querySelectorAll('li');
//       return Array.from(files).some(file => file.textContent.match(/\.(mp4|mov|avi)$/));
//   }
//   function hasImageFiles() {
//       const files = fileList.querySelectorAll('li');
//       return Array.from(files).some(file => file.textContent.match(/\.(jpg|jpeg|png|gif)$/));
//   }
//   function showVideoPlayer() {
//       const video = document.getElementById("player");
//       const videoFile = fileList.querySelector('li').textContent;
//       video.src = URL.createObjectURL(videoFile);
//       video.play();
//   }
//   function showImages() {
//       const images = fileList.querySelectorAll('li');
//       let index = 0;
//       function displayNextImage() {
//           const imageFile = images[index].textContent;
//           player.innerHTML = `<img src="${URL.createObjectURL(imageFile)}" />`;
//           index = (index + 1) % images.length;
//           setTimeout(displayNextImage, 5000);
//       }
//       displayNextImage();
//   }
//   function showDefaultPreview() {
//       const previewIframe = document.querySelector('.preview iframe');
//       player.innerHTML = '';
//       player.appendChild(previewIframe);
//   }
// });