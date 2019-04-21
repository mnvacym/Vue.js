<template>
  <div class="add-todo">
    <form v-on:submit="addTodo">
      <div class="input">
        <label>Task:</label>
        <input
          v-model="task"
          name="task"
          type="text"
          placeholder="please enter a todo"
          class="todo"
        >
      </div>
      <div class="input">
        <label>Due date:</label>
        <input v-model="date" name="date" type="date" placeholder="due date" class="date">
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import uuid from "uuid";
export default {
  name: "NameTodoForm",
  data() {
    return {
      task: "",
      date: ""
    };
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      const newTodo = {
        id: uuid.v4(),
        description: this.task,
        deadline: this.date,
        done: false
      };
      if (this.task === "") {
        alert("Please enter a todo!");
      } else if (this.date === "") {
        alert("Please enter a due date!");
      } else {
        this.$emit("addTodo", newTodo);
        event.currentTarget.reset();
      }
    }
  }
};
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.todo,
.date {
  height: 2rem;
  border: none;
  border-radius: 0.1rem;
  padding: 1rem;
}

.add-todo {
  line-height: 2.5rem;
  width: 20rem;
  margin: auto;
  margin-top: 4rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 1rem;
}

.input {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

button {
  max-width: 100px;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  top: 1rem;

  color: #fff;
  background-color: #f50057;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 6px 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  text-transform: uppercase;
  border: none;
  border-radius: 0.1rem;
  cursor: pointer;
  font-size: 0.9rem;
}

button:hover {
  background-color: #f50056b9;
}
</style>


