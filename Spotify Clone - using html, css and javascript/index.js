console.log('Hello World')

async function main() {
    let a = await fetch('http://127.0.0.1:5500/Songs/')
    let response = await a.text()
    let div = document.createElement('div')
    div.innerHTML = response
    let as = div.getElementsByTagName('a')
    let songs = []

    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith('.mp3')) {
            songs.push(element.href.split('/Songs/')[1])
        }
    }
    return songs
}

 async function getsongs() {
    let songs = await main()

    let list = document.querySelector('.song-list')
    for (const song of songs) {
        list.innerHTML += `<div><div class="song">
        <div class="img"><img class="c-white" src="/Symbols/music.svg" alt="music"></div>
        <div class="info">
            <p>${song.replaceAll(/[0-9%]/g, ' ')}</p>
            <p>Name</p>
        </div>
    </div></div>`
    }

        // var audio = new Audio(songs[0])
        // audio.play()       

        document.querySelector('.song-list').childrenforEach(e =>{
            console.log(e)
        })

 }

getsongs()