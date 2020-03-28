import axios from "axios";

const url = 'http://localhost:5000/api/todos';

class TodosService {
  // get todos
  static async getTodos() {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }

  // create todo
  static createTodo(task, date) {
    const body = {
      description: task,
      deadline: date
    };

    return axios.post(url, body);
  }

  // delete todo
  static deleteTodo(id) {
    return axios.delete(`${url}${id}`);
  }

  // toggle todo
  static toggleTodo(id) {
    return axios.put(`${url}${id}`);
  }
}

export default TodosService;
