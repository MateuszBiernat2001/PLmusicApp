const itemSection = document.querySelector('.specials-music-container');
const topItemSection = document.querySelector('.top-wrapper-music');
const searchInput = document.querySelector('.search-input');
const errorText = document.querySelector('.error')
const btn = document.querySelector('.btn');

const getSongs = () => {
  fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    let musicArr = data.music
      for(let i = 0; i < musicArr.length; i++){
        if(musicArr[i].authorName === searchInput.value){
          const item = document.createElement('a');
          const title = document.createElement('p')
          const author = document.createElement('p')
          const img = document.createElement('img');
          item.setAttribute('href', musicArr[i].link)
          item.classList.add('music-item')
          item.appendChild(img)
          item.appendChild(title)
          item.appendChild(author)
          title.innerHTML = musicArr[i].title
          author.innerHTML = musicArr[i].authorName
          img.setAttribute('src', musicArr[i].img)
          itemSection.appendChild(item)
          console.log(itemSection)
        }
      }
  })
}


searchInput.addEventListener('change', getSongs)
