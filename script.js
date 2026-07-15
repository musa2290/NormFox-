alert("Script çalıştı");console.log("NORM FOX");let sayi=0;

const hedef=1500;

const alan=document.getElementById("userCount");

const animasyon=setInterval(()=>{

sayi+=15;

alan.innerHTML=sayi+"+";

if(sayi>=hedef){

alan.innerHTML="1500+";

clearInterval(animasyon);

}

},15);const islemler=[
["Ah*** K***","100K Paket"],
["Me*** Y***","50K Paket"],
["Ca*** A***","20K Paket"],
["Yi*** T***","10K Paket"],
["Bu*** M***","1M VIP"],
["Em*** B***","100K Paket"]
];

const liste=document.getElementById("historyList");

function ekle(){

const sec=islemler[Math.floor(Math.random()*islemler.length)];

const kart=document.createElement("div");

kart.className="history-item";

kart.innerHTML=`
<div>
<div class="user">${sec[0]}</div>
<div class="info">Yükleme gerçekleştirildi</div>
</div>

<div class="package">${sec[1]}</div>
`;

kart.onclick=()=>{

window.open("https://telegram.me/normfox","_blank");

};

liste.prepend(kart);

if(liste.children.length>6){

liste.removeChild(liste.lastChild);

}

}

for(let i=0;i<6;i++) ekle();

setInterval(ekle,5000);const paketler=[
{bakiye:"10.000 TL",odeme:"4.000 TL",tasarruf:"6.000 TL"},
{bakiye:"20.000 TL",odeme:"7.000 TL",tasarruf:"13.000 TL"},
{bakiye:"50.000 TL",odeme:"15.000 TL",tasarruf:"35.000 TL"},
{bakiye:"100.000 TL",odeme:"25.000 TL",tasarruf:"75.000 TL"},
{bakiye:"1.000.000 TL",odeme:"250.000 TL",tasarruf:"750.000 TL"}
];

const slider=document.getElementById("slider");

slider.oninput=function(){

const p=paketler[this.value];

document.getElementById("balance").innerHTML=p.bakiye;

document.getElementById("pay").innerHTML=p.odeme;

document.getElementById("save").innerHTML=p.tasarruf+" Tasarruf";

document.getElementById("buyBtn").href=
"https://telegram.me/normfox?text="+
encodeURIComponent(
"Merhaba, "+p.bakiye+" paketini satın almak istiyorum."
);

}const bildirimler=[

["Ah*** K.","20K Paket satın aldı"],

["Me*** Y.","100K Paket satın aldı"],

["Yu*** T.","Telegram üzerinden iletişime geçti"],

["Bu*** M.","50K Paket satın aldı"],

["Em*** B.","10K Paket satın aldı"]

];

const popup=document.getElementById("popup");

const popupName=document.getElementById("popupName");

const popupText=document.getElementById("popupText");

setInterval(()=>{

const sec=bildirimler[Math.floor(Math.random()*bildirimler.length)];

popupName.innerHTML=sec[0];

popupText.innerHTML=sec[1];

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},3500);

},7000);window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},700);

},2000);

});const online=document.getElementById("onlineCount");

let sayi=248;

setInterval(()=>{

const degisim=Math.floor(Math.random()*5)-2;

sayi+=degisim;

if(sayi<230)sayi=235;
if(sayi>290)sayi=287;

online.innerHTML=sayi;

},3000);const islemler = [
["Ah*** K.","10.000 TL"],
["Me*** Y.","25.000 TL"],
["Em*** B.","50.000 TL"],
["Yu*** T.","100.000 TL"],
["Bu*** A.","5.000 TL"],
["Al*** D.","75.000 TL"]
];

const liste = document.getElementById("transactionList");

function yeniIslem(){

const sec = islemler[Math.floor(Math.random()*islemler.length)];

const kart = document.createElement("div");

kart.className = "transaction";

kart.innerHTML = `
<div>${sec[0]}</div>
<span>${sec[1]}</span>
`;

liste.prepend(kart);

if(liste.children.length>6){
liste.removeChild(liste.lastChild);
}

}

for(let i=0;i<4;i++){
yeniIslem();
}

setInterval(yeniIslem,4000);