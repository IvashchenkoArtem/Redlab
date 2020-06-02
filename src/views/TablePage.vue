<template>
  <div id="app">
    <div class="mainer">
      <header class="header">
        <div class="grid-wrapper">
          <div
            class="grid-wrapper__sort"
            data-aos="fade-in"
            data-aos-delay="300"
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
            data-aos-delay="300"
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
          data-aos-delay="300"
          data-aos-duration="2000"
          type="text"
          v-model="searchName"
          placeholder="Введите имя"
        />
      </header>
      <!-- <Loader v-if="loading" /> -->
      <Table
        v-for="person in filteredNames"
        :key="person.id"
        :personName="person.name.ru"
        :personAge="person.age"
        :personNumber="person.phone"
        :src="person.image"
      />

      <router-view />
    </div>
  </div>
</template>

<script>
import Table from "../components/Table.vue";
export default {
  name: "app",
  data() {
    return {
      persons: [],
      activeBtn: "",
      searchName: "",
    };
  },

  components: {
    Table,
  },

  created() {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.persons = data;
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

//
<style lang="scss">
@import "./src/sass/main.scss";
</style>
