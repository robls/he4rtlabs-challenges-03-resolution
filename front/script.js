let appContainer = document.getElementById("appContainer");
let formContainer = document.getElementById("formContainer");
let loginForm = document.getElementById("loginForm");
let newAccountForm = document.getElementById("newAccountForm");
let title = document.getElementById("title");
let button = document.getElementById("button");
let errorSpan = document.getElementById("errorSpan");
let passwordSpan = document.getElementById("passwordSpan");

function isEmailValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearSpans(){
    let isErrorSpanVisible = errorSpan.classList.contains("visibility-visible");
    let isPasswordSpanVisible = passwordSpan.classList.contains("visibility-visible");

    if(isErrorSpanVisible){
        errorSpan.classList.remove("visibility-visible");
        errorSpan.classList.add("visibility-hidden");
    }
    
    if(isPasswordSpanVisible){
        passwordSpan.classList.remove("visibility-visible");
        passwordSpan.classList.add("visibility-hidden");
    }
}

async function buttonHandler(){
    let loginFormVisible = !loginForm.classList.contains("display-none");
    
    if(loginFormVisible){
        await loginClickHandler();
    }else {
        await newAccountClickHandler();
    }
}

function newAccountClickHandler(){
    console.log('REGISTER');
}

async function loginClickHandler(){
    let user_email = document.getElementById("loginEmail").value;
    let user_password = document.getElementById("loginPassword").value;
    clearSpans();


    if(user_email == "" || !isEmailValid(user_email)) { 
        errorSpan.classList.remove("visibility-hidden");
        errorSpan.classList.add("visibility-visible");
    }
    
    if(user_password == ""){
        passwordSpan.classList.remove("visibility-hidden");
        passwordSpan.classList.add("visibility-visible");
        return;
    }

    var data = new URLSearchParams();
    data.append('user_email', user_email);
    data.append('user_password', user_password);

    let fetchResponse = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    let resolvedResponse;

	await fetchResponse.json().then( response => {
        resolvedResponse = response;
	});
}

async function formTransition() {
    let loginFormVisible = loginForm.classList.contains("display-none");
    clearSpans();

    if(loginFormVisible) {
        loginTransition();
    } else {
        newAccountTransition();
    }
}

function newAccountTransition(){
    title.innerHTML = "Criar Conta";
    newAccountForm.classList.remove("display-none");
    loginForm.classList.add("display-none");

    if(appContainer.classList.contains("white-up")){
        appContainer.classList.remove("white-up");
    }
    appContainer.classList.add('purple-down');
    
    setTimeout(() => {
        appContainer.classList.replace("dark-text", "light-text");
        formContainer.classList.replace('dark-border', 'light-border');
        button.innerText = "Registrar";
        button.classList.replace("btn-login", "btn-new-account");
    }, 100);
}

function loginTransition(){
    title.innerHTML = "Realizar Login";

    loginForm.classList.remove("display-none");
    newAccountForm.classList.add("display-none");

    appContainer.classList.remove("purple-down");
    appContainer.classList.add("white-up");
    
    
    setTimeout(() => {
        appContainer.classList.replace("light-text","dark-text");
        formContainer.classList.replace('light-border','dark-border');
        button.innerText = "Entrar";
        button.classList.replace("btn-new-account", "btn-login");

    }, 100);
}