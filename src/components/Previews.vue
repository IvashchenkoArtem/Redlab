<template>
  <div class="person-wrapper" data-aos="fade-in" data-aos-duration="2000">
    <div class="block-persons">
      <div class="person-data-wrap">
        <div class="persons-data">
          <div class="persons-icon">
            <img :src="require(`../assets/images/${src}.svg`)" />
          </div>
          <div class="persons-info">
            <h2 class="person-name">{{ personName }}</h2>
          </div>
        </div>
        <div class="persons-info">
          <span class="person-age">{{ personAge }} лет</span>
        </div>
        <div class="persons-info">
          <span class="person-phone">{{ personNumber }}</span>
        </div>
        <div class="persons-info">
          <span class="person-phrase">{{ personPhrase }}</span>
        </div>
        <div class="persons-info">
          <button @click="isActive = !isActive" v-bind:class="{ active: isActive }">
            <i class="fas fa-star"></i>
          </button>
        </div>
      </div>
      <div class="media">
        <video
          class="video"
          v-if="getVideo"
          controls="controls"
          loop="loop"
          :src="require(`../assets/videos/${getVideo}.mp4`)"
        ></video>
        <span v-else></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personName: String,
    personAge: Number,
    personNumber: String,
    src: String,
    personPhrase: String,
    video: String
  },

  data() {
    return {
      isActive: false
    };
  },

  computed: {
    getVideo() {
      if (this.video !== "") {
        return this.video;
      } else return false;
    }
  }
};
</script>

<style scoped>
.person-wrapper {
  background-color: rgb(236, 230, 230);
  margin-bottom: 10px;
  display: inline-block;
  border: 2px solid gray;
  margin-right: 10px;
}

.block-persons {
  width: 100%;
  height: 248px;
  display: flex;
  justify-content: space-between;
}

.person-data-wrap {
  background-color: #fff;
  padding: 10px;
  position: relative;
  max-width: 410px;
  width: 100%;
}
.persons-data {
  display: flex;
  margin-bottom: 15px;
}

.persons-info {
  margin-bottom: 15px;
}

.persons-icon {
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}

.person-name {
  line-height: 50px;
}

.media {
  max-width: 440px;
  display: block;
}

video {
  display: block;
  width: 100%;
  /* width: 425px; */
}

button {
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: rgb(160, 158, 158);
}

.active {
  color: black;
}

@media screen and (max-width: 935px) {
  .person-data-wrap {
    max-width: 380px;
  }

  .media {
    max-width: 413px;
  }
  .block-persons {
    height: 232px;
  }
}

@media screen and (max-width: 875px) {
  .persons-data,
  .persons-info {
    margin-bottom: 10px;
  }

  .person-data-wrap {
    max-width: 350px;
  }
  .media {
    max-width: 383px;
  }
  .block-persons {
    height: 215px;
  }
}
@media screen and (max-width: 820px) {
  .person-data-wrap {
    max-width: 320px;
  }
  .persons-data {
    margin-bottom: 0;
  }
  .media {
    max-width: 353px;
  }
  .block-persons {
    height: 199px;
  }
  .persons-icon {
    min-width: 30px;
    min-height: 30px;
    margin: 10px 10px 0 0;
  }
}
@media screen and (max-width: 755px) {
  .block-persons {
    flex-direction: column;
    width: 100%;
    max-height: 450px;
    height: 100%;
  }
  .person-wrapper {
    margin-right: 0;
  }
  .person-data-wrap {
    max-width: 430px;
    width: 100%;
    padding: 10px 0px 10px 10px;
    /* margin-right: 5px; */
  }
  .media {
    max-width: 440px;
    /* display: block; */
  }
}
@media screen and (max-width: 490px) {
  .person-data-wrap {
    max-width: 400px;
    width: 100%;
    /* padding: 10px 0px 10px 10px; */
  }
  .media {
    max-width: 410px;
    /* display: block; */
  }
}
@media screen and (max-width: 460px) {
  .person-data-wrap {
    max-width: 350px;
    width: 100%;
    /* padding: 10px 0px 10px 10px; */
  }
  .media {
    max-width: 360px;
    /* display: block; */
  }
}
@media screen and (max-width: 410px) {
  .person-data-wrap {
    max-width: 300px;
    width: 100%;
    /* padding: 10px 0px 10px 10px; */
  }
  .media {
    max-width: 310px;
    /* display: block; */
  }
}
@media screen and (max-width: 360px) {
  .person-data-wrap {
    max-width: 260px;
    width: 100%;
    /* padding: 10px 0px 10px 10px; */
  }
  .media {
    max-width: 270px;
    /* display: block; */
  }
}
</style>
