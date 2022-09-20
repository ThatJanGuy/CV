let name ="Jan Schulze";
let street="MyStreet 123";
let postcode="123 45";
let town="MyTown";2

function showCV(){
    let vas = document.getElementsByClassName("visibleAtStart");
    let ias = document.getElementsByClassName("invisibleAtStart");
    
    for(i=0; i<vas.length; i++){
        vas[i].style["display"]= "none";
    }
    
    for(i=0; i<ias.length; i++){
        ias[i].style["display"]= "flex";
    }

    document.body.style.backgroundColor="rgb(245, 255, 255)";
}