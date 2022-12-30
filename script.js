let input = document.getElementById("content");
let generateButton = document.getElementById("submit");
let download = document.getElementById("download");
let img = document.getElementById("qr");

function changeURL(data){
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${this.data}`;
    return url;
}

function changeSource(x){
    img.src = x;
}

generateButton.addEventListener("click",()=>{
    data = input.value;
    console.log(data);
    if(data.length==0)
    {
        alert("Enter text !");
    }
    else{
        let changedURL = changeURL();
        changeSource(changedURL);
    }
})

download.addEventListener('click',()=>{
    let imgPath = img.getAttribute('src');
    let fileName = "Qrcode.jpg"

    saveAs(imgPath, fileName);
});