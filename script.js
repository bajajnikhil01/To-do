let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        let text = input.value;

        if(text === "") return;

        let li = document.createElement("li");
        li.innerText = text;

        // delete button
        let del = document.createElement("button");
        del.innerText = "X";

        del.addEventListener("click", function(){
            li.remove();
        });

        //done button
        let done = document.createElement("input");
        done.type = "checkbox";
        done.addEventListener("change", function(){
          if(done.checked){
            li.style.textDecoration = "line-through";}
            else
              {li.style.textDecoration = "none";};
        });
        li.appendChild(del);
        li.append(done);
        list.appendChild(li);

        input.value = "";
    }
});