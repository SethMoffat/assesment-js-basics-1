
console.log("Welcome to the password validator tool!")

// console.log(input("Enter Passwrd"))
//couldn't figure out inputs

console.log("Enter a password")
let password = ("Money1234!")

if (password.indexOf('!' || "?" || "$") > -1)
{
  console.log("Your password has a special character");
}
else{
    console.log("Your password does not have a special character")
}


if (password.length >= 10){
    console.log("Your password is long enough")
}
else{
    console.log("Your password is too short")
}

console.log("__________                                               .___    __  .__                 ._.")
console.log("\______   \_____    ______ ________  _  _____________  __| _/  _/  |_|__| _____   ____   | |")
console.log(" |     ___/\__  \  /  ___//  ___/\ \/ \/ /  _ \_  __ \/ __ |   \   __\  |/     \_/ __ \  | |")
console.log(" |    |     / __ \_\___ \ \___ \  \     (  <_> )  | \/ /_/ |    |  | |  |  Y Y  \  ___/   \|")
console.log(" |____|    (____  /____  >____  >  \/\_/ \____/|__|  \____ |    |__| |__|__|_|  /\___  >  __")
console.log("                \/     \/     \/                          \/                  \/     \/   \/")