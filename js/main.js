 //!===================Global==========================\
 let openPage = document.getElementById(`detalisGames`)
 let closePage = document.getElementById(`exite`)
 let load = document.querySelector('.wait')
 getApi('mmorpg')


 



 //!=============Event!

 document.querySelectorAll(".list a").forEach(function(anchor){
    anchor.addEventListener('click', function(){
        document.querySelector(".list .active").classList.remove('active')
        anchor.classList.add('active')

        const category = anchor.getAttribute("data-category")
        
        
        getApi(category)
        
    })
 })

 //!Function ==================


async function getApi(sectionName){

     load.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cc4a086c2fmshca8ccbdf90fb041p1ff2bdjsn9648c35a1014',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${sectionName}`, options)
    const detalis = await response.json();
    
    load.classList.add("d-none");
    viewData(detalis)
    
 }


 function viewData(games){
    let cards = ``

    for (let i= 0  ;  i< games.length    ; i++ ) {
        
        
        cards+=`
                <div class="col-lg-3">
                <div   onclick="getapiID(${games[i].id})"   class="card  item">
                <img src="${games[i].thumbnail}" class="w-100 h-100 rounded-2 object-fit-cover" alt="">
                    <div class="card-body d-flex justify-content-between text-card">
                        <h3>${games[i].title}</h3>
                        <span class="btn btn-info">Free</span>
                    </div>
                    // <p class="text-center card-text ">${games[i].short_description.split(" " ,8).join(" ") }</p>
                    <div class="fot card-footer d-flex justify-content-between align-items-center ">
                        <span>${games[i].genre}</span>
                        <span>${games[i].platform}</span>
                    </div>
                  </div>
            </div>
        `
        
    }

    document.getElementById('card').innerHTML = cards
 }

//!========================
//id 

async function getapiID(id) {
    load.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cc4a086c2fmshca8ccbdf90fb041p1ff2bdjsn9648c35a1014',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const data = await response.json();
    load.classList.add("d-none");

    viewDetalis(data)


}

//! Display Data ip 


 function  viewDetalis (view){
    
    openPage.classList.remove('d-none')
    let cartona = ``

    cartona+=`
    
                <div class="col-lg-4">
                <div class="image">
                    <img class="w-100 imgDeteails" src="${view.thumbnail}" alt="">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="right-data text-white">
                    <h3 class="mb-4 gametitle">${view.title}</h3>
                    <div class="info">
                        <p class="gameCatagory">Category: <span >${view.genre}</span></p>
                        <p class=" gamePlatform">Platform: <span >${view.platform}</span></p>
                        <p class="gameStatus">Status: <span class="">${view.status}</span></p>
                    </div>
                    <p class="w-100  gamedDescription">${view.description.split(" " ,100).join(" ")}</p>
                    <a href=${view.game_url} class="btn btn-outline-warning gameLink" target="_blank">Show Game</a>
                </div>
            </div>
    
    `
  document.getElementById('information').innerHTML= cartona
}

exite.addEventListener('click', function() {
    openPage.classList.add('d-none')
})

