const todos = [];
const div = document.getElementById("todos");
const input = document.getElementById("input");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const todo = input.value;
    todos.push({ text: todo, completed: false });
    input.value="";
    showTodo();
  }
});

const sole = document.getElementById("sole");
const body = document.querySelector("body")
sole.addEventListener("click", function(){
  body.classList.add('dark');
})

function showTodo() {
  div.innerHTML = "";
  todos.forEach((ToDo) => {
    div.innerHTML += `<div class="text-white bg-[#25273C] flex p-2 gap-6 my-2 justify-between shadow-sm">
        <div class="flex gap-6">
        <button
        class="w-[24px] h-[24px] rounded-full border border-slate-500 ${
          ToDo.completed ? "bg-red-500" : ""
        } "  id="button"
        ></button>
        <p>
        ${ToDo.text}
        </p>
        </div>
        <button class="h-[24px] text-white text-sm" id="delete">x</button>
        </div>`;
  });

  const buttons = document.querySelectorAll("#button");
  buttons.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      todos[i].completed = !todos[i].completed;
      showTodo();
    });
  });

  const deletebtn = document.querySelectorAll("#delete")
  deletebtn.forEach((btn, i) => {
    btn.addEventListener("click", function(){
      todos.splice(i,1);
      showTodo();
    })

  })

}
