var person = ["saba", "kiran", "ali", "awais", "abban"];
var transport = ["car", "bike", "rikshaw", "walking"];
var message = ["i would like to have a honda motorcycle"];
var fullname = [];
for (var a = 0; a < person.length; a++) {
    for (var b = 0; b < transport.length; b++) {
        fullname.push(person[a] + ("-") + transport[b]);
    }
}
console.log(fullname);
