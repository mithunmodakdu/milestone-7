const person = {
    name: 'Lal nil holud mia',
    profession: 'Traffic sargent',
    age: 39,
    25: 'summer',
    'son-name': 'sunny',
    address: 'Shahbag'

}

// ::::::::::::::: dot notation ::::::::::::::
const prof1 = person.profession;
console.log(prof1);

// ::::::::::::::: bracket notation ::::::::::::::
const prof2 = person['profession'];
console.log(prof2);

const pName = 'profession'
const prof3 = person[pName];
console.log(prof3);

// :::: bracket notation must be used if property name is a number::::
// const season = person.25;   
const season = person[25]; 
console.log(season);

// :::: bracket notation must be used if property name includes hyphen(-) ::::
// const sonName = person.son-name;
const sonName = person["son-name"];
console.log(sonName);


