// function uploadFile(files) {
//   const fileList = document.getElementById('fileList1');
//   for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const fileName = file.name;
//       // Создаем элемент списка
//       const listItem = document.createElement('li');
//       listItem.textContent = fileName;
//       // Создаем кнопку для воспроизведения файла
//       const playButton = document.createElement('button');
//       playButton.textContent = 'воспроизвести';
//       playButton.addEventListener('click', function() {
//           playFile(file);
//       });
//       // Создаем кнопку для удаления файла
//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = 'удалить';
//       deleteButton.addEventListener('click', function() {
//           deleteFile(fileName);
//           fileList.removeChild(listItem);
//       });
//       // Добавляем кнопки к элементу списка
//       listItem.appendChild(playButton);
//       listItem.appendChild(deleteButton);
//       // Добавляем элемент списка к списку файлов
//       fileList.appendChild(listItem);
//   }
// }
// function playFile(file) {
//   const video = document.getElementById("player");
//   video.src = URL.createObjectURL(file); // Устанавливаем источник видео
//   video.play(); // Запускаем видео
// }



// document.getElementById('fileInput').addEventListener('change', function() {
//   uploadFile(this.files);
// });

// // Удалить файлы по одному
//  function deleteFile(tvNumber, index) {
//   return function() {
//     const fileList = document.getElementById('fileList1');
//     const items = Array.from(fileList.children);
//     const fileIndex = items.findIndex(item => item.textContent === tvNumber);
//     if (fileIndex !== -1) {
//       if (confirm(`Вы уверены, что хотите удалить файл "${tvNumber}"?`)) {
//         items[index].parentNode.remove();
//       }
//     }
//   }
// }




function uploadFile(files, playerId) {
  const fileList = document.getElementById('fileList1');
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileName = file.name;
    const listItem = document.createElement('li');
    listItem.textContent = fileName;
    const playButton = document.createElement('button');
    playButton.textContent = 'воспроизвести';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'удалить';
    if (file.type.includes('video')) {
      playButton.addEventListener('click', function() {
        playFile(file, playerId);
      });
    } else if (file.type.includes('image')) {
      // Для изображений не нужно кнопки воспроизведения
      playButton.style.display = 'none';
    }
    deleteButton.addEventListener('click', function() {
      deleteFile(fileName);
      fileList.removeChild(listItem);
    });
    listItem.appendChild(playButton);
    listItem.appendChild(deleteButton);
    listItem.dataset.file = file; // Сохраняем файл в атрибуте data
    fileList.appendChild(listItem);
    if (playerId === 'tv1') {
      playFile(file, 'player');
    }
  }
}

function playFile(file, playerId) {
  const video = document.getElementById(playerId);
  video.src = URL.createObjectURL(file); // Устанавливаем источник видео
  video.play(); // Запускаем видео
}

document.getElementById('fileInput').addEventListener('change', function() {
  uploadFile(this.files, 'player');
});

function deleteFile(tvNumber) {
  return function() {
    const fileList = document.getElementById('fileList1');
    const items = Array.from(fileList.children);
    
    const fileIndex = items.findIndex(item => item.textContent === tvNumber);
    if (fileIndex !== -1) {
      if (confirm(`Вы уверены "${tvNumber}"?`)) {
        items[fileIndex].remove();
      }
    }
  }
}



// Удалить все добавленные файлы
function deleteAllFiles() {
  const fileList = document.getElementById('fileList1');
  if (confirm(`Вы уверены, что хотите удалить все файлы?`)) {
    fileList.innerHTML = '';
  }
}
  
  // Изменение текста бегущей строки на TV-1
  function changeMarqueeText() {
    const newText = document.getElementById('newText').value;
    const tvWindow = window.open('tv1.html', 'TV-1');
    tvWindow.onload = function() {
      tvWindow.changeMarqueeText(newText);
    };
  }
  


// document.getElementById("newText").addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) { // если нажата клавиша Enter
//       window.location.href = "tv1.html"; // переходим на страницу tv1.html
//     }
//   });

//   document.getElementById("fileList1").addEventListener("click", function(event) {
//     const file = event.target.closest("p"); // получаем ссылку на файл
//     const video = document.getElementById("player"); // получаем видеоплеер
//     video.src = URL.createObjectURL(file.dataset.file); // устанавливаем источник видео из файла
//     video.play(); // запускаем воспроизведение видео
//   });

//   document.getElementById("fileList1").addEventListener("click", function(event) {
//     const file = event.target.closest("p"); // получаем ссылку на файл
//     const video = document.getElementById("player"); // получаем видеоплеер
//     video.src = URL.createObjectURL(file.dataset.file); // устанавливаем источник видео из файла
//     video.play(); // запускаем воспроизведение видео
//   });

//   document.getElementById("fileList1").addEventListener("click", function(event) {
//     const file = event.target.closest("p"); // получаем ссылку на файл
//     const video = document.getElementById("player"); // получаем видеоплеер
//     video.src = URL.createObjectURL(file.dataset.file); // устанавливаем источник видео из файла
//     video.play(); // запускаем воспроизведение видео
//   });

//   document.getElementById("fileList1").addEventListener("click", function(event) {
//     const file = event.target.closest("p"); // получаем ссылку на файл
//     const video = document.getElementById("player"); // получаем видеоплеер
//     video.src = URL.createObjectURL(file.dataset.file); // устанавливаем источник видео из файла
//     video.play(); // запускаем воспроизведение видео
//   });

//   document.getElementById("fileList1").addEventListener("click", function(event) {
//     const file = event.target.closest("p"); // получаем ссылку на файл
//     const video = document.getElementById("player"); // получаем видеоплеер
//     video.src = URL.createObjectURL(file.dataset.file); // устана
//     video.play(); // запускаем воспроизведение видео
// });
