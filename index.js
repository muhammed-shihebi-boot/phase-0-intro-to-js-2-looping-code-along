// Code your solutions in this file

function writeCards(names, eventName){
    const messages = []; 
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        messages.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`);  
    } 
    return messages; 
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--; 
    }
}