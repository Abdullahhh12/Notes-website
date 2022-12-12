var navigation = document.getElementById('sideID');

//side navigation

navigation.style.right ="-250px";

function openFunction(){
    document.getElementById("sideID").style.right="0";
    document.getElementById("menuicon").style.display ="none";
    document.getElementById("closeicon").style.display ="inline";
    
}
function closeFunction(){
    document.getElementById("sideID").style.right="-250px";
    document.getElementById("menuicon").style.display ="inline";
    document.getElementById("closeicon").style.display ="none";

}