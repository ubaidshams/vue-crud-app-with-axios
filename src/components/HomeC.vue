<template>
  <section class="homeBlock">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Company</th>
          <th>Salary</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users.data" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.salary }}</td>
          <td><button @click.prevent="handleEdit(user.id)">Edit</button></td>
          <td><button @click="handleDelete(user.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import { reactive, toRefs, onBeforeMount } from "vue";
import Axios from "../apis/Axios";
import router from "../routes/routes";
export default {
  name: "HomeC",
  components: {},
  setup() {
    const state = reactive({
      users: [],
    });
    async function getUsers() {
      try {
        state.users = await Axios.get("/users");

        console.log(state.users);
      } catch (error) {
        console.log(error);
      }
    }
    async function handleDelete(id) {
      await Axios.delete(`/users/${id}`);
      getUsers();
    }
    async function handleEdit(id) {
      router.push(`/update-user/${id}`);
    }
    onBeforeMount(() => {
      getUsers();
    });

    return {
      ...toRefs(state),
      getUsers,
      handleDelete,
      handleEdit,
    };
  },
};
</script>
<style scoped>
.homeBlock {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  width: 90%;
  border: 1px solid red;
  border-radius: 10px;
  overflow: hidden;
}
thead {
  background: cornflowerblue;
  color: #111;
}
thead tr th {
  padding: 10px;
}
tbody {
  background: palevioletred;
  text-align: center;
}
tbody tr td {
  padding: 10px 0;
}
button {
  padding: 5px 10px;
  background: #111;
  color: #efefef;
  border: 1 px solid #111;
  border-radius: 5px;
  transition: all 0.3s linear;
}
button:hover {
  background: #efefef;
  color: #111;
}
</style>
