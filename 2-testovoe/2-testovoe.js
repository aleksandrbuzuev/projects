var person_data = [

    {
        name: 'Johny Walker',
        birthDate: '1970-12-17'
    },
    {
        name: 'Andrew',
        birthDate: '2001-10-29'
    },
    {
        name: 'Alexander Novikov',
        birthDate: '1975-10-29'
    },
    
    {
        name: 'Johny Freeman',
        birthDate: '1998-10-12'
    },
     {
        name: 'Alexander Pechkin',
        birthDate: '1998-10-29'
    },
    
];


function searchByName(name){
    
    var found_names = [];

    for(var i = 0; i < person_data.length; i++){
      //  var get_name = person_data[i].name.match(/(\w+)/)[1];
        if(person_data[i].name.split(' ')[0] == name){
            found_names.push(person_data[i]);
        }
    }

    return found_names;

}

searchByName('Alexander');
searchByName('Johny');


function getBiggestAge(){

    var now = new Date(); //Текущя дата
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    var age = 0;
    var biggest_age = 0;

    for(var i = 0; i < person_data.length; i++){
        var dob = new Date(person_data[i].birthDate); 
        var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году

        age = today.getFullYear() - dob.getFullYear(); 

        //Если ДР в этом году ещё не наступил, то вычитаем из age один год
        if (today < dobnow) {
            age = age-1;
        }
        // сравниваем текущий возраст обьекта с возрастом biggest_age
        if (age > biggest_age){
            biggest_age = age;
        }
    }

    return biggest_age;

}