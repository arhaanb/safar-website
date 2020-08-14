<template>
  <div class="container">
    <!-- <h1>About us</h1> -->

    <br class="nvm" />
    <br />
    <!-- <div class="flex-center"> -->
    <h2 class="center zero">Cura, by MINET</h2>
    <h5 class="center">An app that will keep you safe.</h5>
    <br />
    <div class="flex-center">
      <div class="flexbruhh center">
        <div class="boxcard">
          <h4 class="zero" style="margin-top: 0.6em;">Vaccines</h4>
          <p>Helping you manage the distribution of vaccines throughout the country, so that you stay safe.</p>
        </div>
        <div class="boxcard">
          <h4>
            <img src="https://i.postimg.cc/Z5C73fnX/CuraPass.png" alt draggable="false" />
          </h4>
          <p>
            A new way to
            <b>explore</b> during these difficult times.
          </p>
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
        <p>
          Researchers worldwide are working around the clock to find a vaccine against SARS-CoV-2, the virus causing the COVID-19 pandemic. A fast-tracked vaccine development process could speed a successful candidate to market in approximately 12-18 months.
          When a vaccine is available though, it’s going to be chaotic. Hospitals and camps will get crowded and that could lead to a lot of problems.
        </p>
        <p>Another issue would be the fact that currently, people are scared of visiting public places due to the fear of crowds. This creates a lot of problems as people need to go out to get daily nessecities.</p>
        <p>
          To tackle both these problems, we present
          <b>Cura</b>.
          An app that will help you gain immunity against covid, as well as return to the normal life you had to abandon due to this pandemic.
          For a detailed explanation of Cura, visit
          <a
            href="https://cura.arhaanb.co/present"
          >this page</a>.
        </p>
      </div>
      <div class="five columns">
        <img src="@/assets/mockup3.png" alt="MOCKUP" class="mock" />
      </div>
    </div>
    <div class="u-cf"></div>

    <br />
    <br />

    <div class="row">
      <div class="five columns pages">
        <p class="center">
          <img src="@/assets/mockup4.png" alt="MOCKUP" />
        </p>
      </div>
      <div class="seven columns">
        <h3>Our app</h3>

        <p>On the hospitals page, the user can see various hospitals across India, along with the number of vaccines they have. This way the user can decide which hospital they wish to visit.</p>
        <p>
          The Vaccines page provides insight into the progress of upcoming vaccines, and the workings of the completed COV6699EE vaccine (developed by Aditya Pramar and Arhaan Bahadur ;). This page
          serves as an info point for users
        </p>
        <p>
          On the Request passes page, users can request a
          <b>Cura Pass</b>. Through the
          <b>Cura Pass</b>, they are given a time slot in which to visit the place they requested for.
        </p>
        <p>
          We also built an API using NodeJS, Express and MongoDB, to manage all users and certified hospitals from one place. Check it out at
          <a
            href="//api.arhaanb.co/cura"
          >api.arhaanb.co/cura</a>.
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
          src="https://www.youtube.com/embed/MQhrpko-kq0"
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
      <div class="box six columns">
        <img src="@/assets/arhaan.jpg" alt="Arhaan Bahadur" draggable="false" />
        <div class="info">
          <h4>Arhaan Bahadur</h4>
          <p>Co-Founder</p>
        </div>
      </div>

      <div class="box six columns">
        <img src="@/assets/ap.png" alt="Aditya Pramar" draggable="false" />
        <div class="info">
          <h4>Aditya Pramar</h4>
          <p>Co-Founder</p>
        </div>
      </div>
      <div class="u-cf"></div>
    </div>
    <p class="center">
      <a href="//minet.co">
        <img src="@/assets/minte.png" alt="MINET hot" class="minte" draggable="false" />
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
      date: ""
    };
  },
  async mounted() {
    await axios
      .get("https://covid19.mathdro.id/api/countries/india")
      .then(response => (this.info = response.data));
    var timebro = this.info.lastUpdate;
    this.date = new Date(timebro);
    this.loading = false;
  }
};
</script>

<style scoped>
.pages img {
  width: 50%;
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
  width: 40%;
  border-style: solid;
  border-color: #c975e6;
  border-radius: 1em;
  margin: 1em;
  padding: 1em;
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
    width: 90%;
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