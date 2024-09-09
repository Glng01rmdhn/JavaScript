// quiz 10 skillvul
function luasPersegi (s){
    return s * s
}
console.log(luasPersegi(8));


//tugas 1
function registerUser (userType) {
    if (userType === "vip") {
        return "Welcome VIP" + name + "!";
        
    } 
    else {
        return "Welcome " + name + "!";
    }  
}

console.log(registerUser("Nina","vip"));
console.log(registerUser("Nina"));

