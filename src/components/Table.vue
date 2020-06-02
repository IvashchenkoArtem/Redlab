<template>
  <div>
    <div class="persons-data" data-aos="fade-in" data-aos-duration="2000">
      <div class="persons-icon">
        <img :src="require(`../assets/images/${src}.svg`)" />
      </div>
      <div class="persons-info">
        <span class="person-name">{{ personName }}</span>
      </div>
      <div class="persons-info">
        <span class="person-age">{{ personAge }} лет</span>
      </div>
      <div class="persons-info">
        <span class="person-phone">{{ personNumber }}</span>
      </div>

      <div class="persons-info">
        <button
          @click="isActive = !isActive"
          v-bind:class="{ active: isActive }"
        >
          <i class="fas fa-star"></i>
        </button>
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
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
.persons-data {
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: rgb(236, 230, 230);
  border-bottom: 2px solid #ccc;
  padding: 20px;
}

.persons-icon {
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
}

.persons-info {
  max-width: 200px;
  width: 100%;
  text-align: center;
  padding-left: 20px;
}

.persons-info:nth-child(2) {
  text-align: left;
}

.persons-info:last-child {
  text-align: right;
  width: 100%;
}

.person-age {
  padding-left: 40px;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: rgb(160, 158, 158);
}

.active {
  color: black;
}

@media screen and (max-width: 600px) {
  .persons-data {
    padding: 20px 5px;
  }

  .persons-icon {
    min-width: 30px;
    min-height: 30px;
  }

  .persons-info,
  .person-age {
    padding: 0;
  }

  .persons-info:last-child {
    text-align: center;
    max-width: 50px;
    width: 100%;
  }
  .persons-info:nth-child(3) {
    max-width: 50px;
  }

  .persons-icon {
    margin-right: 5px;
  }
}

@media screen and (max-width: 425px) {
  .person-name,
  .person-age,
  .person-phone {
    font-size: 12px;
  }
}
</style>
