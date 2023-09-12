const drawBtn = $('#drawBtn');
const cancelBtn = $('#cancelBtn')
const prizeImage = $("#prizeImage");
const prizeImageContainer = $("#prizeImageContainer");
const fullscreenBtn = $('#fullscreenBtn');

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
    prizeImage.removeClass('flip-vertical-left').addClass('slide-out-top');
    setTimeout(()=>{
        prizeImageContainer.hide()
        prizeImage.removeClass('slide-out-top');
    },1000);
});

fullscreenBtn.on("click", function() {
    openFullscreen();
});

function showImage(prize){
    const randomNum = Math.floor(Math.random() * 7) + 1; //1到7
    const pathName = prize + randomNum;
    prizeImage.attr('src','src/flip.png');
    prizeImage.addClass('slide-in-bottom');
    prizeImageContainer.show();
    setTimeout(()=>{
        prizeImage.removeClass('slide-in-bottom').addClass('flip-vertical-left');
    },1000);
    setTimeout(()=>{
        prizeImage.attr('src',`src/${pathName}.jpg`);
    },1500);
}

function openFullscreen() {
    let elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

// 監聽全螢幕變更事件
document.addEventListener("fullscreenchange", function() {
    if (document.fullscreenElement) {
        // 當進入全螢幕模式
        fullscreenBtn.hide();
    } else {
        // 當退出全螢幕模式
        fullscreenBtn.show();
    }
});




