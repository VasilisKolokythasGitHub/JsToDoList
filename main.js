var addButton = document.querySelector(".addButton");   
var container = document.querySelector(".container");
var inputValue = document.querySelector(".input");

class newitem		
{
	constructor(itemName)
	{
		this.createDiv(itemName);
	}

		createDiv(itemName)
				{
					var input = document.createElement("input"); //creating the input element
					input.type = "text";
					input.disabled = true;
					input.value =  itemName;	     //pass the value the user inserted into new element
					input.classList.add("item_input"); //add class item_input to the input element

					var edit = document.createElement("button"); 
					edit.classList.add("editButton");
					edit.innerHTML = "EDIT";
					var remove = document.createElement("button");
					remove.classList.add("removeButton");
				    remove.innerHTML = "DELETE";
				    var itemBox = document.createElement("div");
				    itemBox.classList.add("item");

				    itemBox.appendChild(input);   //append the input to the div element
				    itemBox.appendChild(edit);	  //append the edit to the div element	
				    itemBox.appendChild(remove);  //append the remove to the div element

				    container.appendChild(itemBox);  //append the container to the div element


				    edit.addEventListener("click",()=>this.editEnabled(input,edit));  //when edit button is clicked call the editEnabled function passing the input as well as the edit elements
				    remove.addEventListener("click",()=>this.removeTask(itemBox));   //when remove button is clicked call the removeTask function


				}

				editEnabled(input,edit)
				{
					if(input.disabled)	//if the user has clicked the edit button set the innerHTML property to SUBMIT
					{
						edit.innerHTML = "SUBMIT";
						input.disabled = false;	 //set the disabled property of the input to false so that user can edit the value
					}
					else             //else set the innerHTML property to EDIT
					{
						edit.innerHTML = "EDIT";
						input.disabled = true; //user can not edit the value
					}
					    
					
				}

				removeTask(item)
				{
					container.removeChild(item);	//removes the child element of the div element itemBox
				}





}

function check()
{
	if(inputValue.value!= "")		//check if the user has inputed empty string if not proceed
	{
		new newitem(inputValue.value);	//call class newitem with the value that user inputed
		inputValue.value ="";			//empty the value of the input
	}
}

addButton.addEventListener("click",check);           //when user clicks add button call check function
window.addEventListener("keydown",(e)=>{
	if(e.which == 13)											//if user presses ENTER key
	{
		check();
	}
})


