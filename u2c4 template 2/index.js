// write js code here corresponding to index.html
// You should add submit event on the form
var MasaiLeague=document.querySelector("#masaiForm").addEventListener("submit",homepage)
var MasaiLeagueArr=JSON.parse(localStorage.getItem("schedule")) || [];

function homepage(){
    event.preventDefault();

   var MasaiLeagueObj={
        matchNumber:document.querySelector("#matchNum").value,
        matchTeamA:document.querySelector("#teamA").value,
        matchTeamB:document.querySelector("#teamB").value,
        matchDate:document.querySelector("#date").value,
        matchvenue:document.querySelector("#venue").value,
    }

    MasaiLeagueArr.push(MasaiLeagueObj)
    console.log(MasaiLeagueArr)

   localStorage.setItem("schedule",JSON.stringify(MasaiLeagueArr))
   window.location.href="matches.html"
}