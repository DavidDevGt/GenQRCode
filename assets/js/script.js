const btn = document.querySelector(".btn");
const codeimg = document.querySelector(".codeimg");
const input = document.querySelector('.input');
const message = document.querySelector("#message_ok");

btn.addEventListener("click", generate);

function generate(){
    const data = input.value;
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
	codeimg.src = URL;

	messageDiv();
}

function messageDiv(){
    message.className = "show";
    setTimeout(function() {
        message.className = message.className.replace("show","");
    }, 2000)
}