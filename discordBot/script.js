whurl="https://discord.com/api/webhooks/1034428831886491710/bLLy1zDBHV7rPBCEDhyUfIMKMbLk3g6Fz4AyCAjJassQZXSBL1Kb2ZlOdczhbTCahug5"
//whurl="https://discord.com/api/webhooks/1039905021531271268/cf90zAYQgeT4pKXBxORsAcdt8Z38FHv8oeTu-mUOp-tkdESUF8gBYcfe9LwHi0n2S4wd"
var str = "";
var ava = "";
var c = "";
function makeText(){
    if(document.getElementById("user").value == "Ruote66Man - jobs")
    {
        ava = "https://joonisrte66.github.io/discordBot/scania.png";
        c = "14571776";
    }
    else
    {
        ava = "https://joonisrte66.github.io/discordBot/a.png";
        c = "2753410";
    }
    str = str + ":triangular_flag_on_post:" + document.getElementById("InputFieldStart").value;
    str = str + " - ";
    str = str + ":checkered_flag:" + document.getElementById("InputFieldEnd").value;
    str = str + "\n\r" + "Kilometrit: " + document.getElementById("InputFieldkm").value + "km";
    str = str + "\n\r tulo:" + document.getElementById("InputFielde").value + "€";
    var e = parseFloat(document.getElementById("InputFielde").value) / parseFloat(document.getElementById("InputFieldkm").value);
    str = str + "\n\r" + "Kilometri korvaus: " + Math.trunc(e) + "€";
    var travel = parseFloat(document.getElementById("InputFieldkm").value);
    var ftravel = travel / 85;
    var ntravel = Math.trunc(ftravel);

    if(ntravel > ftravel)
        ntravel = ntravel -1;
    
    ftravel = ftravel - ntravel;

    var min = (60 * ftravel);
    var nmin = Math.trunc(min);
    
    str = str + "\n\r" + "Rekka: " + document.getElementById("truck").value + "\n\r";
    str = str + "Aikaa kului: " + ntravel + " tuntia ja " + nmin + " minuuttia.";
    str = str + "\n\r" + document.getElementById("InputFieldInfo").value + "\n\r\n\r";
}
function send(){
    makeText();
    const msg = {
        "embeds": [{
            "description": str,
            "color": c
          }],
        "avatar_url": ava,
        "username": document.getElementById("user").value
    };
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputFieldStart").value = "";
        document.getElementById("InputFieldEnd").value = "";
        document.getElementById("InputFieldkm").value = "";
        document.getElementById("InputFielde").value = "";
        document.getElementById("InputFieldInfo").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;  
        
        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }
} 