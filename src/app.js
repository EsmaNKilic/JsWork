console.log("Merhaba Esma")

//JS type safe değildir
let dolarBugun = 18.30

let dolarDun = 18.20
dolarDun = "18.20"
{
    let dolarDun = 18.10
}

console.log(dolarDun)

const euroDun = 19.2
//euroDun = 19

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)