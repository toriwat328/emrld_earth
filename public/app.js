
for(let i = 0; i < allTodo.length; i ++){
    if(allTodo[i].category === "In Your Home" && allTodo[i].completed === true){
        console.log(allTodo[i].action);
        $("goal1-[i]").css('background-color', 'black');

    }
}
