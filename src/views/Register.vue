<template>
  <div class="container">
    <div v-if="submitted" class="six columns submitted">
      <h4>Thank you for registering. You can continue on the Cura mobile app.</h4>
      <a href="#" download="Cura">
        <button>Coming soon</button>
      </a>
    </div>
    <div v-if="!submitted" class="top">
      <form @submit.prevent="submit" class="five columns submitted">
        <h2 class="zero">Register</h2>
        <p>Stay safe with Safar.</p>
        <div v-if="error">{{error}}</div>

        <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>

        <input
          id="username"
          type="text"
          class="form-control"
          name="username"
          value
          required
          autofocus
          placeholder="Username"
          v-model="form.username"
        />

        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          placeholder="Password"
          v-model="form.password"
        />

        <label for="password">Confirm password</label>
        <input
          id="password2"
          type="password"
          class="form-control"
          name="password2"
          required
          placeholder="Confirm password"
          v-model="form.password2"
        />

        <label for="vaccinated">Have you been vaccinated?</label>
        <div class="switchboc">
          <label for>No</label>
          <label class="switch">
            <input type="checkbox" value="1" v-model="form.vaccinated" />
            <span class="slider round"></span>
          </label>
          <label for>Yes</label>
        </div>

        <br class="noselect" />

        <button type="submit" :disabled="loading">
          <span v-if="!loading">Register</span>
          <span v-if="loading">
            <div class="loader"></div>
          </span>
        </button>
      </form>
      <div class="seven columns">
        <img src="@/assets/reg.png" alt class="reg" />
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        username: "",
        password: "",
        password2: "",
        vaccinated: 0,
      },
      error: null,
      loading: false,
      submitted: false,
    };
  },
  methods: {
    submit() {
      this.loading = true;
      if (this.form.password.length < 6) {
        this.error = "Password should be atleast 6 characters.";
        this.loading = false;
      }
      if (this.form.password !== this.form.password2) {
        this.error = "Passwords don't match.";
        this.loading = false;
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.form.username + "@minet.com",
            this.form.password
          )
          .then((data) => {
            data.user
              .updateProfile({
                displayName: this.form.name,
              })
              .then(() => {
                axios
                  .post(`https://api.arhaanb.co/cura/users`, {
                    username: this.form.username,
                    vaccinated: this.form.vaccinated,
                  })
                  .then((response) => {})
                  .catch((e) => {
                    this.errors.push(e);
                  });
                this.loading = false;
                this.submitted = true;
              });
          })
          .catch((err) => {
            if (
              err.message ==
              "The email address is already in use by another account."
            ) {
              this.error = "This username is not available.";
            } else {
              this.error = err.message;
            }
            this.submitted = false;
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style scoped>
.zero {
  margin: 0;
}
.top {
  margin-top: 2em;
}
.reg {
  width: 100%;
  margin-top: 5em;
}
input {
  width: 100%;
}
button {
  margin-top: 2em;
}
button:disabled {
  background: rgb(230, 180, 245);
  cursor: default;
}
button:disabled:hover {
  background: rgb(230, 180, 245);
}

.submitted {
  margin-top: 2em;
}

input,
textarea {
  background-color: rgba(255, 255, 255, 0.3);
  border-width: 0.2em;
  border-radius: 0.5em;
  border-color: rgba(156, 156, 156, 0.2);
}

input:focus,
textarea:focus {
  border-color: rgba(187, 104, 212, 0.3);
  border-width: 0.2em;
  border-radius: 0.5em;
}

.switchboc {
  display: flex;
  align-items: center;
}

.switchboc label {
  margin-right: 1em;
}

/* Loader */
.loader,
.loader:after {
  border-radius: 50%;
  width: 1em;
  height: 1em;
}
.loader {
  margin: 0 20px;
  font-size: 10px;
  position: relative;
  border-top: 0.5em solid rgba(191, 93, 221, 0.2);
  border-right: 0.5em solid rgba(191, 93, 221, 0.2);
  border-bottom: 0.5em solid rgba(191, 93, 221, 0.2);
  border-left: 0.5em solid rgb(191, 93, 221);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media (max-width: 550px) {
  .reg {
    margin-top: 1em;
  }
  .submitted {
    margin-top: 1em;
  }
}

/* SLider shit */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: rgb(187, 104, 212);
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(187, 104, 212);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>