<template>
  <div id="app">
    <div class="mainer">
      <header class="header">
        <div class="grid-wrapper">
          <div
            class="grid-wrapper__sort"
            data-aos="fade-in"
            data-aos-delay="1500"
            data-aos-duration="2000"
          >
            <h3 class="title">Сортировка</h3>
            <div>
              <button
                class="btn"
                type="button"
                @click="activeBtn = ''"
                :class="{ active: activeBtn === '' }"
              >
                ID
              </button>
              <button
                class="btn"
                type="button"
                @click="activeBtn = 'Имя'"
                :class="{ active: activeBtn === 'Имя' }"
              >
                Имя
              </button>
              <button
                class="btn"
                type="button"
                @click="activeBtn = 'Возраст'"
                :class="{ active: activeBtn === 'Возраст' }"
              >
                Возраст
              </button>
            </div>
            <div>
              <button class="btn btn--bottom" @click="sortAscending">
                По возростанию
              </button>
              <button class="btn btn--bottom" @click="sortDescending">
                По убыванию
              </button>
            </div>
          </div>
          <div
            class="grid-wrapper__view"
            data-aos="fade-in"
            data-aos-delay="1500"
            data-aos-duration="2000"
          >
            <h3 class="title">Вид</h3>
            <div class="view-link">
              <router-link class="link" to="/" exact>Таблица</router-link>
              <router-link class="link" to="/previews">Превью</router-link>
            </div>
          </div>
        </div>
        <input
          data-aos="fade-in"
          data-aos-delay="1500"
          data-aos-duration="2000"
          type="text"
          v-model="searchName"
          placeholder="Введите имя"
        />
      </header>

      <Loader v-if="loading" />
      <Previews
        v-else
        v-for="person in filteredNames"
        :key="person.id"
        :personName="person.name.ru"
        :personAge="person.age"
        :personNumber="person.phone"
        :src="person.image"
        :personPhrase="person.phrase.ru"
        :video="person.video"
      />
      <router-view />
    </div>
  </div>
</template>

<script>
import Previews from "../components/Previews.vue";
import Loader from "../components/Loader.vue";
export default {
  name: "app",
  data() {
    return {
      persons: [],
      activeBtn: "",
      searchName: "",
      active: "",
      loading: true,
    };
  },
  components: {
    Previews,
    Loader,
  },

  created() {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          this.persons = data;
          this.loading = false;
        }, 500);
      });
  },

  methods: {
    sortAscending() {
      if (this.activeBtn === "Возраст") {
        this.persons.sort(function(a, b) {
          return a.age - b.age;
        });
      } else if (this.activeBtn === "") {
        this.persons.sort(function(a, b) {
          return a.id - b.id;
        });
      } else if (this.activeBtn === "Имя") {
        this.persons.sort(function(a, b) {
          let nameA = a.name.ru.toLowerCase(),
            nameB = b.name.ru.toLowerCase();
          if (nameA < nameB) return -1;
        });
      }
    },

    sortDescending() {
      if (this.activeBtn === "Возраст") {
        this.persons.sort(function(a, b) {
          return b.age - a.age;
        });
      } else if (this.activeBtn === "") {
        this.persons.sort(function(a, b) {
          return b.id - a.id;
        });
      } else if (this.activeBtn === "Имя") {
        this.persons.sort(function(a, b) {
          let nameA = a.name.ru.toLowerCase(),
            nameB = b.name.ru.toLowerCase();
          if (nameA > nameB) return -1;
        });
      }
    },
  },
  computed: {
    filteredNames: function() {
      let person = this.searchName;
      return this.persons.filter(function(elem) {
        if (person === "") return true;
        else
          return elem.name.ru.toLowerCase().indexOf(person.toLowerCase()) > -1;
      });
    },
  },
};
</script>

<style lang="scss">
@import "./src/sass/main.scss";
</style>
