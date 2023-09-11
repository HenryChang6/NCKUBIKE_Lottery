const drawBtn = $('#drawBtn');
const cancelBtn = $('#cancelBtn')
const prizeImage = $("#prizeImage");
const prizeImageContainer = $("#prizeImageContainer");

drawBtn.on('click',(e)=>{
    const randomNumber = Math.random();  // 這會產生一個介於0（包含）到1（不包含）之間的隨機數

    let prize = "";
    
    if (randomNumber < 0.0625) {
        prize = "big";
        showImage(prize);
    } else if (randomNumber < 0.3125) {
        prize = "mid";
        showImage(prize);
    } else {
        prize = "small";
        showImage(prize);
    }
});

cancelBtn.on('click',(e)=>{
    prizeImage.removeClass('flip-in-hor-bottom').addClass('swirl-out-bck');
    setTimeout(()=>{
        prizeImageContainer.hide()
        prizeImage.removeClass('swirl-out-bck');
    },1000);
});

function showImage(prize){
    const randomNum = Math.floor(Math.random() * 8) + 1; //0到8
    const pathName = prize + randomNum;
    prizeImage.attr('src',`src/${pathName}.png`);
    prizeImage.addClass('flip-in-hor-bottom');
    prizeImageContainer.show();
}



