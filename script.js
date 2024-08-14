const inputbox=document.getElementById("password");
const length_of_password=12;
const upper_case="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_case="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const special_characters="!@#$%^&*()";
const all_char=upper_case+lower_case+numbers+special_characters;
function generate_password(){
    let password="";
    password+=upper_case[Math.floor(Math.random()*upper_case.length)];
    password+=lower_case[Math.floor(Math.random()*lower_case.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=special_characters[Math.floor(Math.random()*special_characters.length)];
    for(let i=0;i<length_of_password-4;i++){
        password+=all_char[Math.floor(Math.random()*all_char.length)];
    }
    inputbox.value=password;
}
function copy_password(){
    inputbox.select();
    navigator.clipboard.writeText(inputbox.value);
}