function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}],|:;<>.?/";
    let passwordLength = 15;
    let password1 = "";
    let password2 = "";
    
    for (let i = 0; i <= passwordLength; i++) {
        password1 += characters.charAt(Math.floor( Math.random() * characters.length));
        password2 += characters.charAt(Math.floor( Math.random() * characters.length));
    }
console.log(`Password 1: ${password1}`);
console.log(`Password 2: ${password2}`);
}

generatePassword();