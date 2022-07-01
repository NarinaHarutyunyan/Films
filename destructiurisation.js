/*ստեղծում եք 20 օրինակ Destructuring-ի, այսինքն 10 հատ զանգված 10 հատ օբջեքթ, կեսը  պետք է լինեն ճյուղավորված գոնե 1 աստիճան, 
այսինքն զանգվածի մեջ զանգված, օբջեքթի մեջ օբջեքթ, բայց պետք է լինեն նաև չճյուղավորվածները */
// ..1..
const market = {
    cars:  ["Mersedes", "BMW", "Nissan"],
    price: [15000, 95000, 13000],
    marks: [["S - class cabrio", "A class", "ClA"], ["X6", "M5"], ["JUke", "Patrol", "Teana"]],
 
 };
 const [mmm, ccc, vvv] = market.cars;
 const [aaa,www, fff] = market.price;
 const [[kkk, ggg], [bbb, uuu], [lll, sss, ttt]] = market.marks;
 function myCar(){
     if(ccc === "BMW" && bbb === "X6" && aaa === 15000){
         console.log(`Ես ցանկանում եմ գնել ${aaa}$ արժողությամբ ${ccc} ${bbb} մակնիշի ավտոմեքենան։`);
     } else{
         console.log("Ես այստեղից ոչինչ չեմ ուզում գնել");
     }
 }
 myCar(market);

// ..2..
const nums1 = [10, 20, [15, 25, 16], 19] ;
const  [a1, b1, [c1, d1, e1],f1] = nums1;
const nums2 = [150, 250, [135, 184],165];
const [m1, n1, [k1, p1], z1] = nums2;
const sum1 = Math.pow(c1, p1);
console.log(sum1);

// ..3..
const m = ["Պրահա", ["Կառլովի կամուրջ", "ճոճվող կամուրջ"], "Գերմանիա", "Իտալիա", "Չեխիա"];
const [m3, [m4, m5], m6, m7, m8] = m;
console.log(`${m8}յի մայրաքաղաքը ${m3}ն է։ ${m3}յի ամենագեղեցիկ վայրը դա ${m4}ն է։`);

// ..4..
const smoothie = {
    banana:["1 հատ", "2 հատ"],
    apple: "2 հատ",
    sugar: ["100 գրամ", "150 գրամ"],
    strawberry:["200 գրամ", " 250 գրամ"]
};
function myResipe({banana:[oneBanana, twoBanana], apple, sugar:[gramm1, gramm2], strawberry:[str1, str2]}){
    console.log(`Ելակով ու բանանով սմուզիի համար մեզ հարկավոր է՝ ${oneBanana} բանան, ${str2} ելակ։ `);
    console.log(`խնձորով սմուզիի համար մեզ հարկավոր է՝ ${apple} խնձոր և ${gramm2} շաքարավազ։ `);
}
myResipe(smoothie);

// ..5..
const arr1 = [25, -15, 1];
const arr2 = [-39, 68];
const [one, two, three] = arr1;
const [four, five] = arr2;
if( two >= one || four !== five){
    console.log("Everything is ok");
} else {
    console.log("Some Error");
}

// ..6..
const data = {
    a: 10,
    b:20,
    c:[15, 25],

};
function myCalc({a, b, c, d:x = 18}){
    if(a + b + c[0] === x){
        console.log("Yes");
    } else{
        console.log("No");
    }
}
myCalc(data);

// ..7..
const myObj = {
    poet: "Պարույր Սևակ",
    poem: "Անլռելի զանգակատուն",
    date: 1959,
};
function paruyrSevak({a = "Պարույր Սևակ",b = "Անլռելի զանգակատուն",c = 1959}){
    console.log(`${a}ը գրել է ${b}ը ${c} թվականին։`);
}
paruyrSevak(myObj);

// ..8..
const z = [25, 13, -28];
const [num1, num2, num3] = z;
const w = [10, 13.5, 18.6];
const [num4, num5, num6] = w;
const zw = num2 + num6;
console.log(Math.round(zw));

// ..9..
const myFriend = {
    friend:"Anna",
    age:25
};
function aboutMyFRiend({friend, age}){
    console.log(`My friend is ${friend}, she is ${age} years old:`);
}
aboutMyFRiend(myFriend);

// ..10..
const first = [10, 25, 45];
const  [aa, bb, cc] = first;
const second = [ 1, 13, 28];
const [dd, ee, ff] = second;
const cd = aa + ee;
if( aa + bb > cc + ff){
    console.log("done");
} else{
    console.log("Error");
}

// ..11..
const number = {
    code: "+374",
    telNumber: 077525354,
};
function tel({code, telNumber, country:x = "Armenia"}){
    console.log(`The code of numbers of ${x} is ${code}: His number is ${telNumber}`);
}
tel(number);

// ..12..
const numberBook = {
    country: "Armenia",
    codesBook: [ "+254", "+385",  "+374", "+458"],
};
function findForMe({country, codesBook:[code1, code2, code3, code4]}){
    if(country === "Armenia"){
        console.log(`Your code is ${code3}`);
    }
}
findForMe(numberBook);

// ..13..
const namesList = {
    name1: "Narine",
    name2: "Arsen",
    name3: "Karine",
    lastName1: "Harutyunyan",
    lastName2: "Manukyan",
    lastName3: "Titanyan",
};
function findThePerson(namesListObj){
    const {name1, lastName1, name3, lastName2, age:y = 33} = namesListObj;
    console.log(`Hello, my name is ${name1} ${lastName1}. My age is ${y}`);
    console.log(`Hello, my name is ${name3} ${lastName2}`);
}
findThePerson(namesList);

// ..14..
const rest = {
    juice: ["Գազավորված հյութ", "Բնական հյութ"],
    coffe: ["սև սուրճ", "սառը սուրճ", "ամերիկանո սուրճ"],
    cake: ["Տիրամիսու", "նապոլեոն"]
};
function myOrder({juice: [juice1, juice2], coffe:[coffe1, coffe2, coffe3], cake:[cake1, cake2]}){
    console.log(` Ես ցանկանում եմ պատվիրել ${coffe1}, ${juice2} և ${cake2}: `);
}
myOrder(rest);

// ..15..
const obj = {
    place: "Հրապարակ",
    city:"Երևան",
    country:"Հայաստան" 
};
const {a = "Հրապարակ", b = "Երևան", c = "Հայաստան"} = obj;
console.log(`${c}ի Հանարապետւթյան ${a}ը ${b}ի ամենագեղեցիկ վայրերից է։`);

// ..16..
telephone = ["Samsung", "Xiaomi", "Nokia"];
models = ["Node 10s", "A50", "C30"];
const favtel1 = telephone[1];
const favtel2 = models[0];
console.log(`My favorit telephone is ${favtel1} ${favtel2}:`);

// ..17..

const num = [10, 13, 25, [12, 14, [2, 5], 6], 20];
const [sym1, sym2, sym3, [sym4, sym5, [sym6, sym7], sym8], sym9] = num;
console.log(sym1 + sym5 + sym7); // 29

// ..18..
const workers = ["Մարի", "Սեն", "Ստեփան"];
const[mary, sen, stepan] = workers;
const payment = [150000, 200000, 500000];
const [payment1, payment2, payment3] = payment;
console.log(`${sen}ի աշխատավարձը կազմում է ${payment3} դրամ։`);

// ..19..
const tour = ["Europe", "Arabic Emirates"];
const [eur, ar] = tour
const country = ["Italy", "France", "Dubai" ];
const [it, fr, du] = country
const myTour = ` I want to go to ${eur}, ${fr}`;
console.log(myTour);

// ..20..
const example = ["Christina", "Maria", "Andrew", "John", "Victoria" ];
const [chris, mar, and, jo, vic] = example;
console.log(`${and} and ${jo} are best frineds`);


