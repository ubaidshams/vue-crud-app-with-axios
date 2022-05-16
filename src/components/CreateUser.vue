<template>
  <div class="createUser">
    <h1>Create User</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="name"> Name: </label>
        <input type="text" id="name" placeholder="Enter name" v-model="name" />
      </div>
      <div class="form-control">
        <label for="company"> Company: </label>
        <input
          type="text"
          id="company"
          placeholder="Enter company"
          v-model="company"
        />
      </div>
      <div class="form-control">
        <label for="salary"> Salary: </label>
        <input
          type="text"
          id="salary"
          placeholder="Enter salary"
          v-model="salary"
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Axios from "../apis/Axios";
import router from "../routes/routes";
export default {
  name: "CreateUser",
  setup() {
    const userDetails = reactive({
      name: "",
      company: "",
      salary: "",
    });
    function handleSubmit() {
      let payload = userDetails;
      Axios.post("/users", payload);
      userDetails.name = "";
      userDetails.company = "";
      userDetails.salary = "";
      router.push("/");
    }
    return {
      ...toRefs(userDetails),
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.createUser {
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
