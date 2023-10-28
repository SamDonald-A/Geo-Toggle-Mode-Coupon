const changeMode = document.getElementById('mode-btn');
const mainHead = document.getElementById("head-main");
const listColr = document.getElementById('change-color');
const mobi = document.getElementById('mob-humburger');
const navigate = document.getElementById('nav-elements');
const mobLine = document.getElementById('mob-humburger-line-1');
const mobLine2 = document.getElementById('mob-humburger-line-2');
const mobLine3 = document.getElementById('mob-humburger-line-3');
const closeCoupan = document.getElementById('close-btn-coupan');
const coupanDiv = document.getElementById('coupon-div');
const backOpac = document.getElementById('back-opa');
const foot = document.getElementById('footer-change');

function change(){
    mainHead.classList.toggle('main-container-light');
    listColr.classList.toggle('ul-light');
    changeMode.classList.toggle('toggle-li-light');
    document.body.classList.toggle('body-light');
    mobi.classList.toggle('mob-toggle-li');
    foot.classList.toggle('footer-class');
}


mobi.addEventListener("click", function(){
    listColr.classList.toggle('nav-mobi');
    mobLine.classList.toggle('span-1');
    mobLine2.classList.toggle('span-2');
    mobLine3.classList.toggle('span-3');
});

function loadCoupan(){
    coupanDiv.style.visibility = "visible";
    backOpac.style.visibility = "visible";
    window.onscroll = () => window.scroll(0, 0);
}
closeCoupan.addEventListener('click', function(){
    coupanDiv.style.visibility = "hidden";
    backOpac.style.visibility = "hidden";
    window.onscroll = () => window.scroll(this.scroll);
});

backOpac.addEventListener('click', function(){
    coupanDiv.style.visibility = "hidden";
    backOpac.style.visibility = "hidden";
    window.onscroll = () => window.scroll(this.scroll);
})




function nameInput(){
    const formName = document.getElementById('Name-in');
    const nameRespose = document.getElementById('Name-in-response');
    if(formName.value.trim().length == 0 || formName.value.trim().length == 1){
        nameRespose.innerText = "Please Enter your Full Name"
        formName.style.border = "2px solid red";
    }else{
        nameRespose.innerText = "";
        formName.style.border = "2px solid green";
    }
}

function emailInput(){
    let emailInputfiled = document.getElementById('mail');
    let emailResponse = document.getElementById('Email-in-response');
    if(emailInputfiled.value.trim().length == 0){
        emailResponse.innerText = "Please Enter your Mail ID";
        emailInputfiled.style.border = "2px solid red";
    }else{
       if(emailInputfiled.value.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{3,5})$") == null){
        emailResponse.innerText = "Enter Valid email";
        emailInputfiled.style.border = "2px solid green";
       }else{
        emailResponse.innerText = ""
       }
    }
}