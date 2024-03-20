

const stud=[
  {Name:"akhil",rollno:14},
  {Name:"ram",rollno:34},
  {Name:"sachu",rollno:50},
  {Name:"raj",rollno:25},
  {Name:"sita",rollno:9},
  {Name:"radha",rollno:37}
]
console.log(stud);

stud.forEach((person)=>{
  console.log("name of each person",person.Name);
}
)
let sno=stud.map((person)=>{
  return person.rollno
})
console.log(sno,"mapped array");

let filteredrollno= stud.filter((person)=>{
  return person.rollno>25
})
console.log(filteredrollno,"filter>25");
let findname=stud.find((person)=>{
  return person.Name=="sita"
})
console.log(findname,"get the name");

let somerollno=stud.some((person)=>{
  return person.rollno>34
})
console.log(somerollno,"using some");

let everyrollno= stud.every((person)=>{
  return person.rollno>14
})
console.log(everyrollno,"using every");
