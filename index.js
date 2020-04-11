function getValue(){
    $('.findBreed').on('click', function(event){
            event.preventDefault();
            breed = $('.searchBreed').val();
            dogBreed = breed.toLowerCase();
            $(`.showMeDemDogsBruhBruh`).empty();            
            fetchPics();
    })
}

function fetchPics(){
           fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`).then(response => response.json()).then(responseJson => showPics(responseJson)).catch(error => alert('Yo connection aint it, My guy'));
    }

function showPics(x){
    $(`.showMeDemDogsBruhBruh`).append(`<img src="${x.message}">`)
}


function ready(){
    console.log('we reaaaady');
    getValue();
}


$(ready());







    
    