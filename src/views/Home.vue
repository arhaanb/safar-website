<template>
  <div class="container">
    <div class="flexbabe">
      <div class="row section1">
        <div class="moreresp five columns text">
          <h1>Cura.</h1>
          <p>
            Let us guide you on your way towards a future immune to COVID-19. Check out our mobile
            app for more dynamic content.
          </p>
          <div class="block noselect">
            <a href="/Cura.apk" download="Cura">
              <button>Download</button>
            </a>
            <router-link to="/about" class="more">
              Learn more
              <i class="fas fa-long-arrow-alt-right"></i>
            </router-link>
          </div>
        </div>
        <div class="one columns nvm">
          <br />
        </div>
        <div class="moreresp six columns">
          <div class="nvm">
            <br />
            <br />
          </div>
          <img src="@/assets/minmock-min.png" alt class="floating mockup" draggable="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.mockup {
  width: 100%;
}

/* Animation */
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 10px);
  }
  to {
    transform: translate(0, -0px);
  }
}

.mock {
  width: 50%;
}
.section1 {
  /* margin-top: 2em; */
}
.flexbabe {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.row {
  display: flex;
  align-items: center;
}
button {
  background: rgb(187, 104, 212);
  color: #fff;
  border: none;
  font-family: "raleway";
}
button:hover {
  background: rgb(150, 79, 172);
  color: #fff;
}
button:active {
  color: #fff;
}
a {
  color: rgb(187, 104, 212);
  text-decoration: none;
}
a:hover {
  color: rgb(150, 79, 172);
}
.more {
  margin-left: 1.5em;
}
@media (max-width: 750px) {
  .moreresp.five.columns,
  .moreresp.six.columns {
    width: 100% !important;
  }
  .nvm {
    display: none;
  }
}
@media (max-width: 550px) {
  .row {
    flex-direction: column;
  }
  .section1 {
    /* margin-top: 4em; */
  }
  .text {
    margin-bottom: 2em;
  }
  .mockup {
    margin-left: 1em;
    overflow-x: hidden;
  }
  .flexbabe {
    height: auto;
		margin-top: 2em;
  }
}
</style>
