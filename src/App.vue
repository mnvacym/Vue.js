/* eslint-disable no-console */
<template>
  <div id="app">
    <div class="loader" v-if="!todos">
      <svg id="svg-sprite">
        <symbol id="paw" viewBox="0 0 249 209.32">
          <ellipse
            cx="27.917"
            cy="106.333"
            stroke-width="0"
            rx="27.917"
            ry="35.833"
          />
          <ellipse
            cx="84.75"
            cy="47.749"
            stroke-width="0"
            rx="34.75"
            ry="47.751"
          />
          <ellipse
            cx="162"
            cy="47.749"
            stroke-width="0"
            rx="34.75"
            ry="47.751"
          />
          <ellipse
            cx="221.083"
            cy="106.333"
            stroke-width="0"
            rx="27.917"
            ry="35.833"
          />
          <path
            stroke-width="0"
            d="M43.98 165.39s9.76-63.072 76.838-64.574c0 0 71.082-6.758 83.096 70.33 0 0 2.586 19.855-12.54 31.855 0 0-15.75 17.75-43.75-6.25 0 0-7.124-8.374-24.624-7.874 0 0-12.75-.125-21.5 6.625 0 0-16.375 18.376-37.75 12.75 0 0-28.29-7.72-19.77-42.86z"
          />
        </symbol>
      </svg>

      <div class="ajax-loader">
        <div class="paw">
          <svg class="icon"><use xlink:href="#paw" /></svg>
        </div>
        <div class="paw">
          <svg class="icon"><use xlink:href="#paw" /></svg>
        </div>
        <div class="paw">
          <svg class="icon"><use xlink:href="#paw" /></svg>
        </div>
        <div class="paw">
          <svg class="icon"><use xlink:href="#paw" /></svg>
        </div>
        <div class="paw">
          <svg class="icon"><use xlink:href="#paw" /></svg>
        </div>
        <div class="paw">
          <svg class="icon"><use xlink:href="#paw" /></svg>
        </div>
      </div>
    </div>
    <div class="main" v-if="todos">
      <div class="todo-list">
        <div v-for="todo in todos" v-bind:key="todo._id">
          <div v-bind:id="todo._id" v-bind:class="todo.done">
            <ul>
              <div>
                <li class="list-item" v-bind:class="{ true: todo.done }">
                  <img
                    class="check"
                    v-on:click="toggleTodo(todo._id)"
                    v-bind:class="{ 'check-true': todo.done }"
                    src="./assets/paw-1.png"
                    alt=""
                  />
                  <font-awesome-icon
                    :icon="['fa', 'times']"
                    class="remove"
                    v-on:click="removeTodo(todo._id)"
                  />
                  {{ todo.description }},
                  {{
                    `${new Date(todo.deadline).getDate()}/${new Date(
                      todo.deadline
                    ).getMonth()}/${new Date(todo.deadline).getFullYear()}`
                  }}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
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
            />
          </div>
          <div class="input">
            <label>Due date:</label>
            <input
              v-model="date"
              name="date"
              type="date"
              placeholder="due date"
              class="date"
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
      <h4 class="merve">
        Merve'nin aplikasyonu
      </h4>
    </div>
  </div>
</template>

<script>
import TodosService from "../TodosService";

export default {
  name: "app",
  data() {
    return {
      todos: null,
      error: "",
      task: "",
      date: ""
    };
  },
  async created() {
    try {
      this.todos = await TodosService.getTodos();
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    async removeTodo(id) {
      await TodosService.deleteTodo(id);
      this.todos = await TodosService.getTodos();
    },
    async addTodo(event) {
      event.preventDefault();
      await TodosService.createTodo(this.task, this.date);
      this.todos = await TodosService.getTodos();
    },
    async toggleTodo(id) {
      await TodosService.toggleTodo(id);
      this.todos = await TodosService.getTodos();
    }
  }
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  font-weight: 200;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
}

.main {
  background: url("./assets/kitten-head-background.jpg");
  background-attachment: fixed;
}

.merve {
  text-align: center;
  width: 16rem;
  margin: auto;
  margin-top: 3rem;
  padding-bottom: 25rem;
  color: #f50057;
  font-weight: 600;
}

.circle {
  border: solid;
  color: #43853d;
}
.list-item {
  color: red;
  list-style: none;
  text-align: center;
  width: 275px;
  margin: 25px;
  min-height: 150px;
  padding-top: 5px;
  padding-bottom: 10px;
  position: relative;
  border: 1px solid rgb(255, 215, 7);
  border-top: 60px solid rgb(255, 215, 7);
  font-family: "Reenie Beanie";
  font-size: 1.5rem;
  border-bottom-right-radius: 60px 5px;
  display: inline-block;
  background: rgb(255, 215, 7);
  background: linear-gradient(
    135deg,
    rgb(255, 215, 7) 80%,
    rgb(161, 135, 6) 100%
  );
}

.list-item:after {
  content: "";
  position: absolute;
  z-index: -1;
  right: -0px;
  bottom: 20px;
  width: 200px;
  height: 25px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 15px 5px rgba(0, 0, 0, 0.4);
  transform: matrix(-1, -0.1, 0, 1, 0, 0);
}

.check {
  border-radius: 50%;
  /* border: solid; */
  position: absolute;
  top: -3rem;
  left: 0.5rem;
  opacity: 0;
  transform: translate(-2rem);
  transition: all 0.5s;
  cursor: pointer;
  /* color: #43853d; */
  padding: 3px;
  font-size: 2rem;
  width: 40px;
}

.list-item:hover .check {
  opacity: 1;
  transform: translate(0, 0);
}

.check:hover {
  /* background: #43853d; */
  color: white;
}

.remove {
  border: solid;
  border-radius: 10%;
  position: absolute;
  top: -3rem;
  right: 0.5rem;
  opacity: 0;
  transform: translate(2rem);
  transition: all 0.5s;
  cursor: pointer;
  color: purple;
  padding: 3px;
  font-size: 2rem;
  width: 2rem;
}

.list-item:hover .remove {
  opacity: 1;
  transform: translate(0, 0);
}

.remove:hover {
  background: red;
  color: white;
}

.check-true {
  background: #66b35f;
  color: white;
}

.true {
  text-decoration: line-through;
}

.todo-list {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}

.input {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #f50057;
}

.todo,
.date {
  height: 2rem;
  border: solid;
  border-color: #f50057;
  border-radius: 0.1rem;
  padding: 1rem;
  width: 100%;
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

/* ------------------------- loader -------------------------- */
.ajax-loader {
  position: absolute;
  top: 25%;
  left: 50%;
  transform-origin: 50% 50%;
  transform: rotate(90deg) translate(-50%, 0%);
  font-size: 50px;
  width: 1em;
  height: 3em;
  color: #d31145;

  .paw {
    width: 1em;
    height: 1em;
    animation: 2050ms pawAnimation ease-in-out infinite;
    opacity: 0;

    svg {
      width: 100%;
      height: 100%;
    }

    .icon {
      fill: currentColor;
    }

    &:nth-child(odd) {
      transform: rotate(-10deg);
    }

    &:nth-child(even) {
      transform: rotate(10deg) translate(125%, 0);
    }

    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        animation-delay: #{(($i * -1)+6) * 0.25}s;
      }
    }

    .no-cssanimations & {
      opacity: 1;
    }
  }
}

@keyframes pawAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
