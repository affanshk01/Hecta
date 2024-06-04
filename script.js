
function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,

        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "display-toast",
        onClick: function () { } // Callback after click
    }).showToast();
}

let users=[]
function handleUserLogin(){
    
    let loginEmail=document.getElementById('login-email').value
    let userFound=false

    if(loginEmail===""){
        showToast('Please Enter')
        return
    }
    for(let i=0;i<users.length;i++){

        if(users[i].email==loginEmail){
            userFound=true
            showToast(`Welcome ${loginEmail}`)
            document.getElementById('REGISTER-FORM').style.display="none"
            document.getElementById('LOGIN-FORM').style.display="none"
            break;
        }
        
        
    }

    if(userFound==false){
        showToast('User Not Found')
        
    }


}

function handleUserRegister(){
    let registerEmail=document.getElementById('register-email').value
    let alreadyRegistered=false
    
    if(registerEmail==="" ){
        showToast('Please Enter Credentials')
        return
    }
    else{
        for(let i=0;i<users.length;i++){

            if(users[i].email==registerEmail){
                showToast('Already Registered')
            
                alreadyRegistered=true
                break;
            }
            
        }
    }
    

    if(alreadyRegistered===false){
        let newUser={
            email:registerEmail,
        }
        showToast('Registration Successful')

        users.push(newUser)
    }



}

function toggleRegisterPage(){
    console.log('hello')
    
    document.getElementById('LOGIN-FORM').style.display="none"
    document.getElementById('REGISTER-FORM').style.display="block"


} 
function toggleLoginPage(){
    console.log('hello')
    
    document.getElementById('REGISTER-FORM').style.display="none"
    document.getElementById('LOGIN-FORM').style.display="block"


} 


let todos = [
    {
        title: "Title 1",
        date: new Date(),
        id: "uniqueId",
        isCompleted: false
    },

    {
        title: "Title 2",
        date: new Date(),
        id: "uniqueId",
        isCompleted: false
    },
    {
        title: "Title 3",
        date: new Date(),
        id: "uniqueId",
        isCompleted: false
    },
];

function create() {
    let newtodo = {
        title: "Title 4",
        date: new Date(),
        id: "uniqueid",
        isComplete: false,
    };
    todos.push(newtodo);
    console.log(todos);
}
function read() {
    console.log(todos);
}
function del() {
    todos.splice(2, 1);
    console.log(todos);
}
function update() {
    todos[1].isCompleted = true;
    console.log(todos);
}

    

