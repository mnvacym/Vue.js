<template>
  <div class="todo-list">
    <div v-for="todo in todos" v-bind:key="todo.id">
      <div v-bind:id="todo.id" v-bind:class="todo.done">
        <ul>
          <ListItem v-bind:todo="todo" @remove="$emit('remove', todo.id)"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  name: "TodoList",
  components: {
    ListItem
  },
  props: ["todos"]
};
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-wrap: wrap;
}
</style>


