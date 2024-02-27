
// let list = ["hello",2,3,4,5,6,"wait"]


// for (i in list) {
//     console.log(list[i])
// }





// let year = prompt("Choose a year")


// if (year%4 == 0) {
//     if (year%100 == 0) {
//         if (year%400 == 0) {
//             alert("Leap year")
//         }else {
//             alert("Not a leap year")
//         }
//     }else {
//         alert("Leap year")
//     }
// }else{
//     alert("Not a leap year")
// }













function sendEmail() {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "c63d9ab7a81ad8",
        Password: "66573cf2a50efe",
        To:"maobiekwe@gmail.com",
        From:"testpyt55@yahoo.com",
        Subject:"Test",
        Body: "Esrhuhfuwiehu"
    }).then(
        message => alert("Mail sent sucessfully! ")
    );
}







// console.log(5%2)




// EMAIL="testpyt55@yahoo.com"
// PASSWORD="wncidonmctzbodvl"