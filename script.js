const itemSection = document.querySelector('.specials-music-container');
//const topItemSection = document.querySelector('.top-wrapper-music');
const searchInput = document.querySelector('.search-input');
const errorText = document.querySelector('.error');
const allSongsContainer = document.querySelector('.wrapper-all-songs');

const getSongs = () => {
  fetch('/data.json')
    .then(response => response.json())
    .then(data => {
      let musicArr = data.music;

      const getAllSongs = () => {
        for (let i = 0; i < musicArr.length; i++) {
         const item = document.createElement('a');
          const title = document.createElement('p');
          const author = document.createElement('p');
          const img = document.createElement('img');
          item.setAttribute('href', musicArr[i].link);
          item.classList.add('music-item');
          item.appendChild(img);
          item.appendChild(title);
          item.appendChild(author);
          title.innerHTML = musicArr[i].title;
          author.innerHTML = musicArr[i].authorName;
          img.setAttribute('src', musicArr[i].img);
          allSongsContainer.appendChild(item);
        }
      };
      getAllSongs();

      const getSpecialSongs = () => {
        const specialSongs = [];

        for(let i = 0; i < musicArr.length; i++){
          if (musicArr[i].authorName.toLowerCase() === searchInput.value.toLowerCase()){
            specialSongs.push(musicArr[i])
          }else{
            errorText.textContent = 'Chyba nie mamy tutaj nic dla Ciebie :('
          }
        }
        for(let i = 0; i < specialSongs.length; i++){
          const item = document.createElement('a');
          const title = document.createElement('p');
          const author = document.createElement('p');
          const img = document.createElement('img');
          
          item.setAttribute('href', musicArr[i].link);
          item.classList.add('music-item');
          item.appendChild(img);
          item.appendChild(title);
          item.appendChild(author);
          title.innerHTML = specialSongs[i].title;
          author.innerHTML = specialSongs[i].authorName;
          img.setAttribute('src', specialSongs[i].img);
          itemSection.appendChild(item);         
          errorText.textContent = '';
        }
        searchInput.value = ''; 
        console.log(specialSongs)
      }
      searchInput.addEventListener('change', getSpecialSongs);
    });
};
getSongs();
