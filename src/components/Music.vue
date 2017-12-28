<template>
  <div class="music">
    <h2>{{ musicName }}</h2>
    <audio v-bind:src="musicUrl" v-on:ended="event_ended" controls="controls" autoplay></audio>
    <p>{{ error }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'music',
    data() {
      return {
        musicIndex: -1,
        musicCount: 0,
        musicName: '',
        musicUrl: '',
        error: '',
        musicList: [],
      };
    },
    methods: {
      event_ended() {
        this.musicIndex += 1;
        if (this.musicIndex === this.musicCount) {
          this.musicIndex = 0;
        }
        const musicItem = this.musicList[this.musicIndex];
        this.musicName = musicItem.name;
        this.musicUrl = musicItem.href;
      },
    },
    created() {
      axios.get('/mock/music/all')
        .then((response) => {
          console.log(response);
          if (response.data instanceof Array) {
            const music = [];
            response.data.forEach((item) => {
              console.log(item.url);
              console.log(item.title);
              music.push({ href: item.url,
                name: item.title });
            });
            this.musicList = music;
            this.musicCount = music.length;
            if (this.musicCount > 0) {
              this.event_ended();
            }
          } else {
            this.error = response.data;
          }
        })
        .catch((response) => {
          console.log(response);
        });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #FA8072;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #4283b9;
  }
</style>
