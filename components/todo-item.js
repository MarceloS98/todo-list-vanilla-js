// Extend the HTMLElement class to create the web component
class TodoItem extends HTMLElement {
  constructor(contenido) {
    super();
    // Render HTML
    this.innerHTML = `<article class="todo-item border border-black flex p-3 items-center mb-3">
      <button class="done-btn rounded-full border border-black shrink-0 w-7 h-7">
        <i class="hidden fa-solid fa-check"></i>
      </button>
      <p class="ml-3 text-md">${contenido}</p>
      <div class="mr-0 ml-auto">
        <button>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete-btn ml-2">
          <i class="fa-sharp fa-solid fa-trash"></i>
        </button>
      </div>
    </article>`;
  }

  // Runs each time the element is appended to or moved in the DOM
  connectedCallback() {
    const doneBtn = this.querySelector(".done-btn");
    if (!doneBtn) return;
    doneBtn.addEventListener("click", () => {
      const doneCheck = doneBtn.firstElementChild;
      const itemContent = this.querySelector("p");
      doneCheck.classList.toggle("hidden");
      itemContent.classList.toggle("line-through");
    });

    // Grab the delete button and attach the event
    const removeBtn = this.querySelector(".delete-btn");
    if (!removeBtn) return;
    removeBtn.addEventListener("click", () => {
      removeBtn.closest(".todo-item").remove();
    });
  }

  // Runs when the element is removed from the DOM
  disconnectedCallback() {
    console.log("disconnected", this);
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define("todo-item", TodoItem);
}

export { TodoItem };
