<template>
  <div>
    <li class="list-item" v-bind:class="{'true' : todo.done}">
      <font-awesome-icon
        :icon="[ 'fa', 'check' ]"
        class="check"
        v-bind:class="{'check-true': todo.done}"
        v-on:click="toggleDone"
      />
      <font-awesome-icon :icon="[ 'fa', 'times' ]" class="remove" @click="remove"/>
      {{todo.description}}, {{todo.deadline}}
    </li>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["todo"],
  components: {},
  methods: {
    toggleDone() {
      this.todo.done = !this.todo.done;
    },
    remove() {
      this.$emit("remove", this.todo.id);
    }
  }
};
</script>

<style scoped>
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
  border: solid;
  position: absolute;
  top: -3rem;
  left: 0.5rem;
  opacity: 0;
  transform: translate(-2rem);
  transition: all 0.5s;
  cursor: pointer;
  color: #43853d;
  padding: 3px;
  font-size: 2rem;
}

.list-item:hover .check {
  opacity: 1;
  transform: translate(0, 0);
}

.check:hover {
  background: #43853d;
  color: white;
}

.remove {
  border: solid;
  border-radius: 50%;
  position: absolute;
  top: -3rem;
  right: 0.5rem;
  opacity: 0;
  transform: translate(2rem);
  transition: all 0.5s;
  cursor: pointer;
  color: red;
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
  background: #43853d;
  color: white;
}

.true {
  text-decoration: line-through;
}
</style>
