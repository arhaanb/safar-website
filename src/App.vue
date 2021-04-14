<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/Group 1.png" alt="Safar" class="cura" />
          </router-link>
        </div>
        <div class="right">
          <router-link to="/about">About</router-link>
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </div>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <df-messenger
      chat-icon="f8dd78d6-1704-4697-a88d-e1f04ce67a54_x.png"
      intent="WELCOME"
      chat-title="Cura"
      agent-id="df5e4bfc-1fb5-45eb-aebd-5c0148aa95e1"
      language-code="en"
    ></df-messenger>
    <footer class="footer noselect">
      <div class="container">
        <div class="flex">
          <div class="socialsyo">
            <a href="//github.com/arhaanb/safar-website" class="link" target="_blank">Source</a>
            <a href="//github.com/arhaanb/safar" class="link" target="_blank">App Source</a>
            <a
              href="/present"
              class="link"
              target="_blank"
            >Presentation</a>
            <br class="anti-nvm" />
            <a href="//arhaanb.co" class="link" target="_blank">Arhaan</a>
            <a href="//aditya-pramar.herokuapp.com" class="link" target="_blank">Aditya</a>
            <a href="//instagram.com/sidthesketcher" class="link" target="_blank">Siddhayak</a>
          </div>
          <h6 class="title text">
            Made with 💖 by MINET
          </h6>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.title.text {
  margin: 0;
}
html,
body {
  height: 100%;
}

div#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

footer.footer {
  margin-top: auto;
  padding: 1em 0;
}

.heart {
  color: rgb(236, 85, 85);
}

input,
textarea {
  font-family: "raleway";
}

::-moz-selection {
  color: #222;
  background: #9ebdff;
}

::selection {
  color: #222;
  background: #9ebdff;
}

img,
.noselect,
button,
br {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 0;
}

#nav .right a {
  margin-left: 1em;
  text-decoration: none;
  font-size: 1.2em;
}

#nav a {
  /* font-weight: bold; */
  color: #222;
}

#nav a.router-link-exact-active {
  color: #4674d8;
}

.right {
  display: flex;
}

.cura {
  width: 7em;
}
</style>
