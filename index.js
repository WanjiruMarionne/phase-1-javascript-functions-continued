function saturdayFun() {
    return 'This Saturday, I want to roller-skate!';
}

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;    
}

saturdayFun('bathe my dog'); 

        
function mondayWork() {
    return 'This Monday, I will go to the office.';
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

mondayWork('work from home');


function wrapAdjective(symbol = '*') {
    return function (adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}
