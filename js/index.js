function showPassword(){
    const eyeOpen = document.getElementById('passwordOpen');
    const eyeClosed = document.getElementById('passwordClosed');
    const field = document.getElementById('field-password');


    if(eyeOpen.style.display === 'none'){

        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
        field.type = 'text'

    }else{
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
        field.type = 'password'
    }
}