<template>
  <div class="updateBlock">
    <h1>Update User</h1>
    <h1>{{ $route.params.id }}</h1>

    <form @submit.prevent="handleEdit">
      <div class="form-control">
        <label for="name"> Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          v-model="userData.data.name"
        />
      </div>
      <div class="form-control">
        <label for="company"> Company: </label>
        <input
          type="text"
          id="company"
          placeholder="Enter company"
          v-model="userData.data.company"
        />
      </div>
      <div class="form-control">
        <label for="salary"> Salary: </label>
        <input
          type="text"
          id="salary"
          placeholder="Enter salary"
          v-model="userData.data.salary"
        />
      </div>
      <button>Update</button>
    </form>
  </div>
</template>

<script>
import Axios from "../apis/Axios";
import router from "../routes/routes";
export default {
  name: "UpdateUser",
  data() {
    return {
      userData: {},
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      this.userData = await Axios.get(`/users/${this.$route.params.id}`);
      console.log(this.userData);
    },
    async handleEdit() {
      try {
        let payload = this.userData;
        await Axios.put(`users/${this.$route.params.id}`, payload);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.updateBlock {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
form {
  width: 30%;
  height: 50%;
  background: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
}
.form-control {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
label {
  color: #111;
  font-weight: bold;
}
input {
  background: #121212;
  border: 1px solid #efefef;
  padding: 10px;
  border-radius: 5px;
  color: #efefef;
}
::placeholder {
  color: #efefef;
}
button {
  padding: 8px 16px;
  background: greenyellow;
  border: 1px solid greenyellow;
  color: #111;
  transition: all 0.3s linear;
  border-radius: 5px;
  font-weight: bold;
}
button:hover {
  background: #111;
  color: greenyellow;
}
</style>
