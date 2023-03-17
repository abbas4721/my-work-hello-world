let person = ["saba", "kiran","ali","awais","abban"]
let transport = ["car", "bike","rikshaw","walking" ]
let message = ["i would like to have a honda motorcycle" ]
let fullname = []
for(let a=0;a<person.length;a++){
    for(let b=0;b<transport.length;b++){

fullname.push(person[a] +("-")+ transport[b])
    }
}
console.log(fullname);

