document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('addPlayer');
    const playersContainer = document.getElementById('playersContainer');
    const playersInfo = document.getElementById('playersInfo');
    let currentPlayer = 1;

    // Добавляем обработчик события клика на кнопку "Добавить плеер"
    button.addEventListener('click', function() {
        if (currentPlayer <= 8) {
            const player = document.createElement('div');
            player.id = `player${currentPlayer}`;
            let valu = currentPlayer.toString()
            player.innerHTML = `
                <h3>Плеер ${currentPlayer}</h3>
                <video id="videoElement${currentPlayer}" width="300" height="200" controls>
                <source src="https://test.plrjs.com/sample.mp4" type="video/mp4">
                </video>
                <br/>
                <button id="uploadButton${currentPlayer}">Добавить файл</button>
                <input id="fileInput${currentPlayer}" type="file" multiple>
                `;

            playersContainer.appendChild(player);
            // Получаем элементы внутри созданного плеера
            const videoElement = document.getElementById(`videoElement${currentPlayer}`);
            const fileInput = document.getElementById(`fileInput${currentPlayer}`);
            const uploadButton = document.getElementById(`uploadButton${currentPlayer}`);

            // Добавляем обработчик события клика на кнопку "Добавить файл"
            uploadButton.addEventListener('click', function() {
                fileInput.click();
            });
            // Добавляем обработчик события изменения файла
                // Настройка плеера
                videoElement.autoplay = true; // Автовоспроизведение
                videoElement.loop = true; // Автоповтор
                videoElement.volume = 0; // Громкость

            fileInput.addEventListener('change', function() {
                const file = fileInput.files[0];
                
                if (file) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        videoElement.src = e.target.result;
                    };
                    
                    reader.readAsDataURL(file);
                }
            });

            currentPlayer++;

        } else {
            alert('Добавлено максимальное количество видеопроигрывателей');
        }
        });


        // Добавляем обработчик события клика на контейнер для плееров
        playersContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('renameButton')) {
                const player = event.target.parentNode;
                const newName = player.querySelector('.renameInput').value;
                player.querySelector('h3').innerText = `$\{newName}`;
            }

            if (event.target.classList.contains('addFileButton')) {
                const player = event.target.parentNode;
                const fileInput = player.querySelector(`#fileInput`);
                const file = fileInput.files[0];
                const reader = new FileReader();
                reader.onload = function(event) {
                    player.querySelector('video').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }

    });
});
