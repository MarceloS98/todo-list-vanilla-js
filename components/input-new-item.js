import { TodoItem } from "./todo-item.js";

// Extend the HTMLElement class to create the web component
class AddTodo extends HTMLElement {
  constructor() {
    super();
    // Render HTML
    this.innerHTML = `<article class="border border-black flex p-3 items-center mb-3">
      <input
        id="new-item"
        type="text"
        class="mr-5 text-md w-full p-1"
        placeholder="Ingresa la tarea que quieres completar"
      />
      <button
        class="add-item ml-auto mr-0 shrink-0 bg-black py-1 px-3 font-bold text-white rounded-full"
      >
        Agregar
      </button>
    </article>`;
  }

  // Runs each time the element is appended to or moved in the DOM
  connectedCallback() {
    const addItemBtn = this.querySelector(".add-item");
    addItemBtn.addEventListener("click", () => {
      const container = document.querySelector(".todo-container");
      let input = container.querySelector("input");
      let todoContent = input.value;
      const todoItem = new TodoItem(todoContent);
      container.appendChild(todoItem);
      input.value = "";
    });
  }

  // Runs when the element is removed from the DOM
  disconnectedCallback() {
    console.log("disconnected", this);
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define("add-todo", AddTodo);
}
