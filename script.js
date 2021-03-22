var userName = prompt("what's your Name?");

var languages = prompt("How many language do you speak");

if (languages >= 2) {
    alert("Great job");
}
else {
    alert("keep learning");
}

var favoriteLanguage = prompt("what is your favorite language");

function gitfavoriteLanguage(favoriteLanguageforuser) {

if (favoriteLanguage == "english") {

    document.write("<img src='https://www.csss.es/wp-content/uploads/2018/10/English-languages.jpg' alt='english' />");
    document.write("Over time, you will start hearing about the important things to learn to be able to effectively do business. You’ll be told about certain kinds of courses and jobs/internships to pursue that’ll benefit your pursuit in the business life. These are things that will benefit you as a local business pursuer, and even for someone interested in pursuing international business, these things can be beneficial");
}
else if (favoriteLanguage == "arabic") {

    document.write("<img src='https://i1.wp.com/www.arabamerica.com/wp-content/uploads/2019/12/63652739575886387531.jpg?w=730&ssl=1' alt='arabic' />");
} else {
    alert("choose between English or Arabic");
}

while (favoriteLanguage !== "english" && favoriteLanguage !== "arabic") {
    favoriteLanguage = prompt("please input only English or Arabic");
}
}
gitfavoriteLanguage(favoriteLanguage);


var yourRate = prompt("how much do you rate your languages");
var result = " ";
var paint = " ";

var gityourRate = function (yourRate) {

if (yourRate <= 10 && favoriteLanguage == "english") {
    paint = " <img src='https://www.csss.es/wp-content/uploads/2018/10/English-languages.jpg' alt='english'> ";
} else if (yourRate <= 10 && favoriteLanguage === "arabic") {
    paint = " <img src='https://i1.wp.com/www.arabamerica.com/wp-content/uploads/2019/12/63652739575886387531.jpg?w=730&ssl=1' alt='arabic' />  ";
    console.log('arabic');
}

for (var i = 0; i < yourRate; i++){
    result += paint;
}
document.write(result); 
console.log(i)
}
gityourRate (yourRate);