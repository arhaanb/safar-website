<template>
  <div class="container">
    <!-- <h1>About us</h1> -->

    <br class="nvm" />
    <br />
    <!-- <div class="flex-center"> -->
    <h2 class="center zero">Safar, by MINET</h2>
    <h5 class="center">An app that will keep you safe.</h5>
    <br />
    <div class="flex-center">
      <div class="center">
        <div class="six columns">
          <div class="boxcard">
            <h4 class="zero" style="margin-top: 0.6em;">Safe Metro Stations</h4>
            <p>Safar introduces a new procedure for metro stations to follow during the COVID 19 pandemic. It also gives the added benefit of zero contact at the station.</p>
          </div>
        </div>
        <div class="six columns">
          <div class="boxcard">
            <h4 class="zero" style="margin-top: 0.6em;">Travel Hygeine Kits</h4>
            <p>Safar sells cheap Travel Hygeine Kits to the consumers, so that they can take extra precautions while travelling the Metro.</p>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <h3>The problem</h3>
    <div class="row">
      <div class="seven columns text">
        <p>Travel is arguably one of the most integral parts of a person's life. Airplanes have dominated the air and airports were bustling cities, until they became the vehicle of transfer of the COVID- 19 virus. Global and local markets have all but collapsed and governments around the world are in a dire status, trying to strike a balance between keeping their market economies going, averting unemployment and deprivation of the poor while trying to respond to public health essentials.</p>
        <p>The metro is a lifeline for most of the working class, around 1.5 million use it daily, or rather, 1.5 million used to use it daily.</p>
        <p>Another issue would be the fact that currently, people are scared of visiting public places due to the fear of crowds in the metro. Yet, people depend on the service for their livelihood.</p>
        <p>
          We want to help them get back their means of commute. Therefore we created
          <b>Safar</b>. An app that will help you travel in the Metro again, and return to the normal life you had to abandon due to this pandemic. For a detailed explanation of Safar,
          <a
            href="/present"
          >visit this page</a>.
        </p>
      </div>
      <div class="five columns">
        <img src="@/assets/yoyoanotherone.png" loading="lazy" alt="MOCKUP" class="mock" draggable="false" />
      </div>
    </div>
    <div class="u-cf"></div>

    <br />
    <br />

    <div class="row">
      <div class="five columns pages">
        <p class="center">
          <img loading="lazy" src="@/assets/mockupye.png" alt="MOCKUP" draggable="false" />
        </p>
      </div>
      <div class="seven columns">
        <h3>Our app</h3>
        <p>You start off using Safar by logging in and linking your Aarogya Setu account to the app, which is essential to be allowed to travel in the Metro.</p>
        <p>On the hospitals page, the user can see various hospitals across India, along with the number of vaccines they have. This way the user can decide which hospital they wish to visit.</p>
        <p>The routes page will allow you to easily find multiple routes to reach your destination, while telling you the nearest stations, and interesting facts about them. This was developed by one of our creators, Arhaan Bahadur.</p>
        <p>On the Add Money page, users can add money to their E-wallet, which serves as an online version of the Metro Card, and you can even purchase tokens for your ride on it. And get a QR code for your ride.</p>
        <p>
          We also built an API using NodeJS, Express and MongoDB, to locate and find all stations, routes, and information from one place. Check it out at our
          <a
            href="//github.com/arhaanb/safar-api"
          >Github</a>.
        </p>
      </div>
    </div>
    <br />
    <br class="nvm" />
    <br />

    <div class="vidpen">
      <div>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/a_q7ZofaKdM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
    </div>
    <br />
    <br />
    <br />

    <h3 class="zero">Recent stats</h3>
    <h5>India</h5>
    <h5 v-if="loading">Loading</h5>
    <div class="data" v-if="info">
      <div class="card confirmed three columns">
        <h3>{{info.confirmed.value}}</h3>
        <h5>Confirmed</h5>
      </div>
      <div class="card recovered three columns">
        <h3>{{info.recovered.value}}</h3>
        <h5>Recovered</h5>
      </div>
      <div class="card deaths three columns">
        <h3>{{info.deaths.value}}</h3>
        <h5>Deaths</h5>
      </div>
    </div>
    <p
      class="zero top"
      v-if="date"
    >Last update on: {{date.getDate()}}/{{date.getMonth()}}/{{date.getFullYear()}} {{date.getHours()}}:{{date.getMinutes()}}:{{date.getSeconds()}}</p>
    <p class="zero">Updates automatically via the Covid API.</p>

    <br class="nvm" />
    <br class="nvm" />
    <br />
    <br />

    <h3>The team</h3>
    <div class="team">
      <div class="box four columns">
        <img loading="lazy" src="@/assets/arhaan.jpg" alt="Arhaan Bahadur" draggable="false" />
        <div class="info">
          <h4>Arhaan Bahadur</h4>
          <p>Co-Founder</p>
        </div>
      </div>

      <div class="box four columns">
        <img loading="lazy" src="@/assets/ap.png" alt="Aditya Pramar" draggable="false" />
        <div class="info">
          <h4>Aditya Pramar</h4>
          <p>Co-Founder</p>
        </div>
      </div>

      <div class="box four columns">
        <img loading="lazy" src="@/assets/sid.jpg" alt="Aditya Pramar" draggable="false" />
        <div class="info">
          <h4>Siddhayak Goyal</h4>
          <p>Co-Founder</p>
        </div>
      </div>
      <div class="u-cf"></div>
    </div>
    <p class="center">
      <a href="//minet.co">
        <img loading="lazy" src="@/assets/minte.png" alt="MINET hot" class="minte" draggable="false" />
      </a>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      loading: true,
      date: "",
    };
  },
  async mounted() {
    await axios
      .get("https://covid19.mathdro.id/api/countries/india")
      .then((response) => (this.info = response.data));
    var timebro = this.info.lastUpdate;
    this.date = new Date(timebro);
    this.loading = false;
  },
};
</script>

<style scoped>
.pages img {
  width: 70%;
  margin-top: 2em;
}
.mock {
  width: 100%;
  margin-top: -3em;
}

.flexbruhh {
  display: flex;
  justify-content: center;
}
.boxcard {
  border-style: solid;
  border-color: #1961fb;
  border-radius: 1em;
  padding: 2em 3em;
}
.boxcard img {
  width: 60%;
  margin-bottom: -1em;
}
.flex-center {
  display: flex;
  justify-content: center;
}

.vidpen {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.box {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
}

.box img {
  width: 8em;
  border-radius: 100%;
  margin-right: 2em;
}

.box .info {
  margin-bottom: 2em;
}

.box h4,
.box p {
  margin: 0;
}

.zero {
  margin: 0;
}
.top {
  margin-top: 1.5em;
}
.data {
  display: flex;
  justify-content: center;
}
.card {
  text-align: center;
  padding: 2em;
  background: rgba(255, 255, 255, 0.3);
  /* margin: 0 2em; */
  border-radius: 1em;
  border-style: solid;
  border-width: 0.1em;
  /* width: 15%; */
}

.confirmed {
  border-color: #c975e6;
}

a {
  color: #c975e6;
}

.deaths {
  border-color: red;
}

.recovered {
  border-color: rgb(79, 161, 110);
}

.minte {
  width: 10em;
}

@media (max-width: 550px) {
  .data,
  .flexbruhh {
    flex-direction: column;
  }
  .boxcard {
    margin: 0;
    margin-bottom: 1em;
  }
  .card {
    width: 100%;
    margin: 0.5em 0;
  }
  .nvm {
    display: none;
  }
  .mock {
    margin: 0;
    margin-top: 2em;
  }
  .pages img {
    display: none;
  }
}
</style>