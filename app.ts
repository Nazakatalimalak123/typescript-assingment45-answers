// //task 01
// //practice 
// console.log("Hello world!");
// //task 02
// //print a message
// let personName: string = "Eric";
// console.log(`hello $ {personname},would you like to learn some python today?`);
// //task 03
// //cases conditions
// let personname: string = "ali";
// console.log("lowercase:", personname.toLowerCase());
// // //uppercase
// console.log("uppercase:",personname.toUpperCase());
// //titlecase
// console.log("titlecase:",personname.replace(/\b/g,c=>c.toUpperCase()));
//task 04 
// quote
// let quote: string = "A person who never made a mistake never tried any thing new";
// let author: string = "Albert Einstien";
// console.log(`${author}once said,"${quote}`);
//task 05
// let quote: string = "A person who never made a mistake never tried any thing new";
// let famous_person = "Alber Einstien";
// let message = `${famous_person}once said,${quote}`;
// console.log(message);
//task 06
// let personname: string=`\n\t waseem akram\t\n`;
// console.log(personname);
// let stripped: string = personname.trim()
// console.log(stripped);
//task 07 08
// console.log(5+3);
// console.log(11-3);
// console.log(2*4);
// console.log(16/2);
// //task 09
// let favouritenumber : number = 8;
// console.log(`favouritenumber is ${favouritenumber}`);
// task 10
//my name is nazakat
//dated 22/02/2024
// console.log("hello world simple programm");
// //task 10 file 2
// //my name is nazakat
// //dated 22/02/2024
//this program wil multiply
// console.log(5*2);
//task 11
// // let members: string  [] = ["ali","ahmed","sultan","wakel"];
// // for (let i=0; i<members.length; i++){
// //     console.log(members[i]);
// }
//task 12
// let members: string [] = ["ali","ahmed","sultan","wakel"];
// let message: string="do you like play cricket?";
// for (let i=0; i<members.length; i++){
//     console.log(message+members[i]);
// }
//task13
// let transporation : string []=["civic","bike","suzuki",];
// for(let i=0; i<transporation.length; i++){
//     console.log(` i would like to buy a ` + transporation[i]);
// }
// //task 14
// let guest_list:  string [ ] =["ali", "aslam","naveed","waheed"];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
// }

//task 15
// let guest_list:  string [ ] =["ali", "aslam","naveed","waheed"];
//  for(let i=0; i<guest_list.length; i++){
//    console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
//  }

//  let not_present: string = "ali";
//  let new_guest: string = "nabeel";
//  guest_list[0]=new_guest;
//  for(let i=0; i<guest_list.length; i++){
//     console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
//   }
//   console.log(`Mr. ${not_present} will not  coming tomorrow dinner.`);
//task 16
// let guest_list:  string [ ] =["ali", "aslam","naveed","waheed"];
// //  for(let i=0; i<guest_list.length; i++){
// //    console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
// //  }

//  let not_present: string = "ali";
//  let new_guest: string = "nabeel";
//  guest_list[0]=new_guest;
//  for(let i=0; i<guest_list.length; i++){
//    console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
//    }
// //    console.log(`Mr. ${not_present} will not  coming tomorrow dinner.`);
//    guest_list.unshift("farhad","touqer","murslen");
//    for(let i=0; i<guest_list.length; i++){
//     console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
//     }
//task17
// let guest_list: string [] = ["ali","aslam","naveed","wahed"]


//  let not_present: string = "ali";
//  let new_guest: string = "nabeel";
//  guest_list[0]=new_guest;


//    guest_list.unshift("farhad","touqer","murslen");

//     console.log('\nunfortunetly there is no big tabel space hence only two people allow');
//     while(guest_list.length>2){
//         let remove_guest = guest_list.pop();
//        console.log(`sorry sir. ${remove_guest} you are not invited for dinner.`);

//    }
//   for(let i=0; i<guest_list.length; i++){
//      console.log(`sir ` + guest_list[i]  +   " yes you will still invite you on dinner");
//   }
// guest_list.splice(0,2);
//  console.log(guest_list);
//task 18
// //place store visit
// let placesTovisit: string []= ["iran","Italy","pakistan","uk","dubai"];
// //print arry original order
// console.log("original order:",placesTovisit);
// //print arry alphabatic order without modify
// console.log("alphabatical order:",[...placesTovisit].sort());
// //show that erry is still in original order
// console.log("original order after sorting:",placesTovisit);
// //print erry reverse alphabatic order withtout chang orginal list
// console.log("Reverse alphabatic order:",[...placesTovisit].sort().reverse());
// //show erry in orignal order
// console.log("orignal order after reverse sorting:",placesTovisit);
// //reverse the  order of list 
// console.log("reverse order:",placesTovisit);
// //reverse the order of list again to get back orignal order
// console.log("back to orignal order:",placesTovisit);
// //sort erry alphabatic order places to visit.sort();
// console.log("sorted in reverse alphabatic order",placesTovisit);
// //sort erry in reverse alphabatic order
// //placesTovisit.sort( a, b) => b.localeCompare(a));
// console.log("sort in reverse alphabatic order:",placesTovisit);

//task 19
//let invitaions : string [] = ["nabeel","waheed"];
//let count_invitations : number = invitaions.length;
 //console.log(`${count_invitations}people will come to the dinner`)
//task 20
// let city: string [] = ["karachi","islamabad","lahore","multan"];
// console.log("list of city");
// console.log(city)
//task 21
// let personname: {name: string, fname: string, age:number}={
//     name: "nazakat", fname:"male",age:35}

// // console.log(personname);
// //task 22
// const days : string []=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// console.log(days[6]);//{7}
//task23
// let car =  "civic";
// console.log("is car == 'civic'?predict true");
// console.log(car =='civic')

// console.log("is car != 'honda city'?predict true")
// console.log(car != 'honda city')
// console.log("is car == 'civic'?predict false")
// console.log(car =='civic')

// console.log("is car == 'CIVIC'?predict false")
// console.log(car == 'SABARU')

// console.log("is car .length==8?predict true")
// console.log(car.length==8)

// console.log("is car .length != 10?predict true")
// console.log(car.length != 10)

// console.log("is 10 > 45 ?predict false")
// console.log(10 > 45)

// console.log("is 1<=0 >  ?predict false")
// console.log(3 <= 0)

// console.log("is 53>=42 >  ?predict false")
// console.log(53 >= 42)

// console.log("is car == 'civic' && car.length ==8? >  ?predict true")
// console.log(car == 'civic' && car.length==8)
//task24
// let name_1: string = "nazakat"
// let name_2: string = "nazakat ali"
// let name_3: string = "mr nazakat ali"

// if(name_1 ==name_3){
//   console.log("names are equal")
// }else{
//   console.log("names are not equal")
// }
// if(name_1 ==name_2){

// }else{
//   console.log("names are  equal")
// }
//in lowercase
// if(name_1 ==name_2){

// }else{
//   console.log("names are  equal")
// }
//numeric
// let age_1 : number = 30
// let age_2 : number = 34

// if (age_1 == 30)
// console.log("eligable for vote")

// if (age_1 !== 34)
// console.log("eligable for vote in older category")
// //lessthen
// if(age_1 <= age_2){
//   console.log("younger")
// }
// //greaterthen
// if(age_2 >= age_1){
//   console.log("older")}

//if age_1 == 18 && age_2 == 34){
 // console.log("person are eligble for vote")
 
// if(age_1 == 30 && age_2 != 34){
//console.log("person is eligble for vote")

//task 25

// let allien_color : string = "green";

// if (allien_color == "green")
//  console.log("youn earn 5 points")

//  let allien_color :  string = "red"
//  if (allien_color == "green")
//  console.log("no output")
//task 26
// let allien_color : string = "green"
// if (allien_color =="green"){
// console.log("player just earn 5 points to shouting the allien")
// }else{
//   console.log("player just earn 10 points")
// }

// let allien_color : string = "yellow"
// if (allien_color =="green"){
// console.log("player just earn 5 points to shouting the allien")
// }else{
//   console.log("player just earn 10 points")
// }
// //task 27
// let allien_color : string = "red"
// if (allien_color == "green"){
// console.log("player just earn 5 points")
// }else if (allien_color=="yellow"){
//   console.log("player earn 10 points")
// }else{
//   console.log("you earn 15 points")
// }

//task 28
// let age : number = 50

// if(age < 2){
//   console.log("you are a baby")
// }else if (age < 4){
//   console.log("you are a tooddler")
// }else if (age < 13){
//   console.log("you are a kid")
// }else if (age <20){
//   console.log("you are teenager")
// }else if(age <65){
//   console.log("you are adult")
// }else{
//   console.log("you are older")
// }
//task 29
// let favourite_fruits : string []  = [ "apple","orange","grapes","cherry","berry"]

// for (let i=0; i<favourite_fruits.length;i++)("cherry");
//   console.log("you are like banana")

//   for (let i=0; i<favourite_fruits.length;i++)("barry");
//   console.log("you are like banana")
  
//   for (let i=0; i<favourite_fruits.length;i++)("apple");
//   console.log("apple")

//   for (let i=0; i<favourite_fruits.length;i++)("orange");
//   console.log("orange")

//   for (let i=0; i<favourite_fruits.length;i++)("grapes");
//   console.log("grapes")
//task 30
// let users: string[]=["admin","ahsan","javed","saleem","wakel"]
// for (let user of users){
//   if(user === "admin"){
//     console.log("hello admin, would you like to see the  status report?")

//   }else{
//     console.log(`hello ${user},thank you for login agian`)
//   }
// }

//task 31
// let users: string[]=["admin","ahsan","javed","saleem","wakel"]
// if (users.length ===0){
//   console.log("we need to find some users!")
//    } else {
//     for(let user of users){
//       if (user === "admin"){
//         console.log("hello admin would you like to see status report?")
//       }else {
//         console.log(`hello ${user},thank you for login again`)}

//         let users = []
//         if (users.length ===0){
//           console.log("we need to find some users!")
//         }
  //task32.error
  // let current_users : string [] = ["Ali","Ahmed","Nadeem","Hamza","Admin"]
  // let new_users : string [] = ["Ali","Ahmed","Nadeem","Hamza","Admin"]


  // let current_users_lower : string []=current_users.map(user=>user.toLowerCase())

  // for( let new_user of new_users){
    
  //   let (current_users_lower.includes(new_users.tolowerCase()))
  // }
  //    console.log(`sorry ${new_user},that name is taken`);
  //    else{
  //     console.log("yes ${new_user},is still available");
  //   }
  
    //task 33
    // let numbers : number [] = [1,2,3,4,5,6,7,8,9]
    // for(let number of numbers){
    //   if (number ===1){
    //     console.log(`${number}st`) 
    //   }else if (number ===2){
    //     console.log(`${number}nd`)
    //   }else if (number ===3){
    //     console.log(`${number}rd`)
    //   }else{
    //     console.log(`${number}th`)
    //   }
  
    //   }
//task 34
// let favourite_pizza: string [] = ["peproni","vegitable","chicken"]
// for(let pizza of favourite_pizza){
//   console.log(pizza)
// }
// console.log(`\n`)
// for(let pizza of favourite_pizza){
//   console.log(`i really like ${pizza} pizza`)
// }
// console.log("n i really love pizza");

//task 35
// let animals: string [] = ["dog","elephant","monkey"]
// for (let animal of animals) {
//   console.log(animal)

// }
// console.log(`\n`)
// for (let animal of animals){
//   console.log(`A ${animal} has a tail`)
// }
// console.log(`\n all of these are peats`)

// //task 36
// function makeshirt (size:string,text:string):void{
//   console.log(`\n you order a ${size} shirt that says ${text}`)
// }
// makeshirt('large','"i love typescript"')
// makeshirt('medium','"i need big shirt"')

    //task 37
  //   function makeshirt (size:string ='large', text: string = 'i love typescript'):
  //   void{
  //     console.log(`you have order a ${size},shirt that says ${text}`)
  //   }
  // makeshirt();
  // makeshirt('medium')
  // //dif message
  // makeshirt('small','i need a big shirt to wear')
// //task 38
// function describe_city(city:string,country:string='pakistan'):void{
//   console.log(`${city} is in ${country}`)
// }
// describe_city('karachi')
// describe_city('jada', 'dubai')
// describe_city('islamabad', 'rawalpindi' )
// //task 39
// function citycountry (city:string,country:string): string {
//   return `${city}, ${country}`
// }
// let c1= citycountry('lahore', 'pakistan')
// let c2= citycountry('tokyo', 'japan')
// let c3= citycountry('paris', 'france')

// console.log(c1)
// console.log(c2)
// console.log(c3)


//task 40
// function makeAlbum (artist: string, title: string):{artist: string; title: string}{
//   const dictionaries = {
//     artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//     title: title.charAt(0).toUpperCase() + title.slice(1)
//   };
//   return dictionaries;

// }
// let album = makeAlbum("ali" , "light")
//   console.log(album)
//    album = makeAlbum("atif" , "remix")
//    console.log(album)
//    album = makeAlbum("ahmed", "latest")
//    console.log(album)
// // //task 41
// function show_magicians(magicians: string[]):void{

//   for (const magician of magicians) {
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   }
// }
// // const magician: string[] = ["ali","atif","ahmed"];
// // show_magicians(magician)
// //task 42
// function make_great(magicians:string[]):void{
//   for 
//   (let i = 0; i <magicians.length; i++){
//     magicians[i]= magicians[i] + 'the great'
//   }
// }
// const magicians2: string[]=["ali","atif","ahmed"];
// make_great(magicians2)
// show_magicians(magicians2)

//task 43
// function make_great2(magicians: string[]):string[] {
//   const greatmagicians: string[]=[];
//   for(let i=0;i<magicians.length;i++){
//     greatmagicians.push(magicians[i]+ 'the great');

//   }
//   return greatmagicians;
// }
// const magicians3: string[]= ["ali","atif","ahmed"];

// const greatmagicians2:string[]=make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(greatmagicians2);
// //task 44
// function sandwich(...items: string[]): void{
//   console.log("sandwich order:")
//   for (let i= 0; i<items.length; i++){
//     console.log(`= ${items[i]}`)
//   }
// }
// console.log("enjoy your sandwich nazakat ali")
// sandwich('tomato','chicken','veg')
// sandwich('chicken', 'cheese')
// sandwich('beef', 'mayo source')
//task45
// type car = {
//   manufacture: string
//   model: string
//   [key: string]: any;
// }
// function createcar(manufacture: string, model:string,optional: Record<string,any>):car{
// return{
//   manufacture,
//   model,
//   ...optional
// }
// }
// const mycar: car= createcar("toyota","corolla",{color:"silver",year:"2024"})
// console.log(mycar)