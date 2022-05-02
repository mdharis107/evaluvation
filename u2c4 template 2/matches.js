// write js code here corresponding to matches.html

var matchPage=JSON.parse(localStorage.getItem("schedule"))

var matchPageArr=JSON.parse(localStorage.getItem("favourites")) || []

display(matchPage)
document.querySelector("#filterVenue").addEventListener("click",filterit)
function filterit(){
    var filterplace=document.querySelector("#filtervenue").value
    var list=matchPageArr.filter(function(elem){
        return elem.matchvenue==filterplace
    })
    display(list)
} 



function display(data){
        
    data.forEach(function(elem){

        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=elem.matchNumber

        var td2=document.createElement("td")
        td2.innerText=elem.matchTeamA

        var td3=document.createElement("td")
        td3.innerText=elem.matchTeamB

        var td4=document.createElement("td")
        td4.innerText=elem.matchDate

        var td5=document.createElement("td")
        td5.innerText=elem.matchvenue

        var td6=document.createElement("td")
        td6.innerText="Favourite"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            myfav(elem)
        })

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)
        
    })
    function myfav(elem){
        matchPageArr.push(elem)
        localStorage.setItem("favourites",JSON.stringify(matchPageArr))
        window.location.href="favourites.html"
    }
}

