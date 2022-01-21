const btn = document.getElementById("btn");
const url = "http://localhost:3000/users/auth";

function formValidation(body){
    let validate = true
    Object.keys(body).forEach((key) => {
        if(body[key] === '') {
             validate = false
           }
        });
    if (validate){
        return validate
    }
    else {
        return validate
    }
};

function postInfo(url, body){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // console.log(xhr.responseText);
        }
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTc2NjhlYWIzNjI0OWJkODY3NDRmZiIsImlhdCI6MTY0MjU1NjQ2NCwiZXhwIjoxNjQzMTYxMjY0fQ.LZWFaCW1EEd-zKjVERjtRSchBSIjDcewZQPNOR8VMUA");
    xhr.send(JSON.stringify(body));   
};

function formSubmit(event){
    // event.preventDefault();
    console.log(document.formsubmit)
    const form = document.formsubmit
    const {nome, sobrenome, email, avatar, pontos, nota, empresas, universidade, horario} = form
    const horarioDisponivel =  []
    horario.forEach(function(item){
        if(item.checked){
           horarioDisponivel.push(item.value)
        }
    });
    
    const body = {
        "login": "programar@gmail.com",
        "password": "Pr_123456789" ,
        "name": nome.value,
        "sobrenome": sobrenome.value,
        "email": email.value,
        "avatar": avatar.value,
        "pontos": pontos.value,
        "nota": nota.value,
        "empresas": empresas.value,
        "universidade": universidade.value,
        "horario": horarioDisponivel           
    };
    
    if (horarioDisponivel.length === 0){
        alert('Você deve escolher pelo menos um horário')
    };

    if (formValidation(body)){
        postInfo(url, body);
        
    };
}

btn.addEventListener("click", formSubmit);
    






























