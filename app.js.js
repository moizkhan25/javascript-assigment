//Q1
// var name="HELLO WORLD"
// alert(name)
//e.g ismai alert show karaya hai jesay he user enter ho to alert show hojaye jesay something went wrong



//Q2
// var name="Moiz Khan"
// console.log(name)
//ismai string declare kia hai



//Q3
// var num=2
// var age=4
// console.log(num + age)
//e.g ismai 2 number ko plus kia hai



 
//Q4
// Legal name
// var _count=10
// var $price=8
// console.log(_count + $price)

// //illegal name
// var 123num=2
// var my-function=4
// var my function=5
// var #invalidname=6
// ismai legal or illegal variable bataye hai jis mai total 2 special character declare ho te hai _ ,$ kyu ke jis k sencsetive hoti hai
//or illagel jesay variable name se pehle number laga dena , # lagana,space dena,ya - ye lagana



// //Q5
// var num1=5
// var num2=5
// console.log(num1+num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
//e.g isme 2 variable ko plus , minus , multiply , or devide kia hai or jo output show ho



//Q6
// var num=prompt("Enter even number")
// if(num%2==0){
//     console.log("this is even number")
// }
// else{console.log("this is odd number")}
//e.g isme modulas define kia hai agar user jo input de wo value 2 se divide ho ka zero ho to even, ho agar 2 se divide per 0 nhi ho to odd



//Q7
// var firstname="Moiz"
// var lastname="Khan"
// alert(firstname +" "+ lastname)
//e.g isme do variable ko ek he output me merge kia hai



//Q8
// var name=prompt("your favorite  color type here")
// console.log(name)
//e.g isme prompt define hai prompt yani user se input lena or uska output show karana 


//Q9
// var num=prompt("enter your num greater than 10")
// if(num>10){
//     alert("true")
// }
// else{alert("false")}
//e.gisme  operator define kiya hai user 10 se badi value input karey to true ho 
//or 10 ya 10 se choti value input karey to false ho


//Q10
// var num=prompt("type num equal to 6")
// if(num=="6"){
//     console.log("is equal")
// }
// else{alert(" not equal to 6")}

// var num=prompt("type num equal to 10")
//  if(num==="10"){
//      console.log("data type and value is correct")
//  }
//  else{alert("data type and value is incorrect" )}

 //== only value check karta hai ke equal hai ya nhi greater ya less hai ya nhi
//=== value or datatype dono check karta hai jesay string hai ya number value equal,greater ,lees hai ya nahi



//Q11
// var percentage=+prompt("enter your percentage")
// if(percentage >=80 ){alert("congrats you`r grade is A1")}
// else if(percentage >=70){alert(" A")}
// else if(percentage >=60){alert(" B")}
// else if(percentage >=50){alert(" C")}
// else{alert("you`r FAIL")}

//e.g basicaly isme zada if or else ko define kiya hai if yani agar ye 80 se bara ho to A1 dekha de
// agar 80 se chota ho to A dekha de or else ye karta hai ke if ki condition false hai to wo error dekha de ya kuch bhi




//Bonus Task
var num1 = parseFloat(prompt("Enter first number:"));
var operator = prompt("Enter operator (+, -, *, /):");
var num2 = parseFloat(prompt("enter second number:"));

var result;


if (operator === "+") {
  result = num1 + num2;
}
 else if (operator === "-") {
  result = num1 - num2;
}
 else if (operator === "*") {
  result = num1 * num2;
} 
else if (operator === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  }
   else {
    result = "Error: never devivided by zero!";
  }
}
 else {
  result = "Invalid operator!";
}

console.log("Result: " + result);

//e.g parsefloat string ko number me convert karta hai
//ismai pehle 3 variable prompts banaye 1 me num1 save hoga 2 me operators ayege or 3 me num2 save hoga
//phir if condition laga kar operator variable define kiya ,1 else me bataya ke 0 se divide nhi hota
//2 else me bataya ke ke agar opearator galat dale to invalid operator show karade