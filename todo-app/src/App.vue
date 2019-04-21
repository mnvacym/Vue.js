<template>
  <div id="app">
    <TodoList v-bind:todos="todos" @remove="removeTodo"/>
    <NewTodoForm @addTodo="addTodo"/>
    <h4 class="vue">
      This app is powered by
      <font-awesome-icon :icon="[ 'fab', 'vuejs' ]" style="color: green"/>
    </h4>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";

export default {
  name: "app",
  data() {
    return {
      todos: [
        {
          id: 1,
          description: "Get out of bed",
          deadline: "2017-09-11",
          done: false
        },
        {
          id: 2,
          description: "Brush teeth",
          deadline: "2017-09-10",
          done: false
        },
        {
          id: 3,
          description: "Eat breakfast",
          deadline: "2017-09-09",
          done: false
        }
      ]
    };
  },
  components: {
    TodoList,
    NewTodoForm
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
};
</script>

<style>
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
  background: rgb(50, 50, 50);
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
}

.vue {
  width: 16rem;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
