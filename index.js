
const list = []

function writeCards(names){
    for (let i = 0; i < names.length; i++){
        list.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

    return list;
}



function countDown(i){
    while (i >= 0){
        console.log(i);
        i--
    }
}

