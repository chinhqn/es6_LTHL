let elm = document.getElementById('mContent');
let name = 'TypeScripts';
let price = 250;
// elm.innerHTML = `<div>Course name: <b>${name}</b> price: <b style="color:green">${price}</div>`;
let todo = {
   id: 69,
   name: "play football",
   status: false,
};
elm.innerHTML = `<div id="todo-id-${todo.id}">
                    <i class="${todo.status==true ? "hidden" : ""} glyphicon glyphicon-ok"></i>
                    <span class="name">${todo.name}</span>
                </div>`;