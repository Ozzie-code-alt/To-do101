let btnADD = document.getElementsByClassName("btn-Add")[0] /*This returns classes that have similar class names, better change this one  */
let todoList = document.getElementsByClassName("list")[0] /* this is same with Queryelector ALL */




let btnAddFunction = () =>{
let txtText = document.querySelector(".txtText").value; /* Put here soo that it will print everytime i click and not upon load */
todoList.innerHTML = txtText;
};

