homeArray = []
tableArray = []
commuteArray = []
neighArray = []

homeArray.length = 0;
tableArray.length = 0;
commuteArray.length = 0;
neighArray.length = 0;

//SECTION FOR IN YOUR HOME CHECKED TODO ITEMS ///////////////////////////////
for(let i = 0; i < allTodo.length; i ++){
    if(allTodo[i].category === "In Your Home" && allTodo[i].completed === true){
        homeArray.push(allTodo[i].action)

    }
}

console.log(homeArray);

for(let i = 0; i < homeArray.length; i++){
    if(homeArray.length > 5){
        alert("You Completed Your 'In Your Home' Goal!")
        break
    } else {
        $('#goal1-' +i).css('background-color', '#26a69a')
    }

}
//////////////////////////////////////////////////////////////////////////////

//SECTION FOR ON YOUR TABLE CHECKED TODO ITEMS ///////////////////////////////
for(let i = 0; i < allTodo.length; i ++){
    if(allTodo[i].category === "On Your Table" && allTodo[i].completed === true){
        tableArray.push(allTodo[i].action)

    }
}

console.log(tableArray);

for(let i = 0; i < tableArray.length; i++){
    if(tableArray.length > 5){
        alert("You Completed Your 'On Your Table' Goal!")
        break
    } else {
        $('#goal2-' +i).css('background-color', '#ffb300')
    }
}
//////////////////////////////////////////////////////////////////////////////

//SECTION FOR ALONG YOUR COMMUTE CHECKED TODO ITEMS //////////////////////////
for(let i = 0; i < allTodo.length; i ++){
    if(allTodo[i].category === "Along Your Commute" && allTodo[i].completed === true){
        commuteArray.push(allTodo[i].action)

    }
}

console.log(commuteArray);

for(let i = 0; i < commuteArray.length; i++){
    if(commuteArray.length > 5){
        alert("You Completed Your 'Along Your Commute' Goal!")
        break
    } else {
        $('#goal3-' +i).css('background-color', '#757575')
    }
}
//////////////////////////////////////////////////////////////////////////////

//SECTION FOR IN YOUR NEIGHBORHOOD CHECKED TODO ITEMS ////////////////////////
for(let i = 0; i < allTodo.length; i ++){
    if(allTodo[i].category === "In Your Neighborhood" && allTodo[i].completed === true){
        neighArray.push(allTodo[i].action)

    }
}

console.log(neighArray);

for(let i = 0; i < neighArray.length; i++){
    if(commuteArray.length > 5){
        alert("You Completed Your 'In Your Neighborhood' Goal!")
        break
    } else {
        $('#goal4-' +i).css('background-color', '#b2dfdb')
    }
}
//////////////////////////////////////////////////////////////////////////////
