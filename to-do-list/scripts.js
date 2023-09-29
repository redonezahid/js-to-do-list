//Declare Variable
var listInputField = document.getElementById("todo-field"),
    addToListBtn = document.getElementById("create-todo"),
    listContainer = document.getElementById("list-container");


    addToListBtn.addEventListener("click", () => {

        if(listInputField.value == ""){
            alert("Must Input 1 Letter");
        }else{
            //Creating Lists
            var listItem = document.createElement("li"); 
                listItem.innerHTML = listInputField.value;
                listContainer.appendChild(listItem);
    
            //Delete List Items
            var deleteList = document.createElement("span");
                deleteList.className = "crossmark";
                listItem.appendChild(deleteList);

            //Complete List Items
            var completeList = document.createElement("span");
                completeList.className = "checkmark";
                listItem.appendChild(completeList);
        }

        //Delete List
        deleteList.addEventListener("click", () => {
            listItem.style.display = "none";
        });
        //Complete List
        completeList.addEventListener("click", () => {
            listItem.style.background = "#000000";
            listItem.style.color = "#179591fd";
            completeList.style.display = "none";
            deleteList.style.right = "0";
        });

        // List Input Field Empty
        listInputField.value = "";
    });

