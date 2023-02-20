function generatePasswords() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}],|:;<>.?/";
    const passwordLength = 15;
    let password1 = "";
    let password2 = "";
    
    for (let i = 0; i <= passwordLength; i++) {
        password1 += characters.charAt(Math.floor( Math.random() * characters.length));
        password2 += characters.charAt(Math.floor( Math.random() * characters.length));
    }

    document.getElementById("password1").value = password1;
    document.getElementById("password2").value = password2;
}

generatePasswords();