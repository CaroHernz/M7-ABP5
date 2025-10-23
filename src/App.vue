<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/bootstrap">BootstrapVue</router-link> |
      <router-link to="/vuetify">Vuetify</router-link> |
      <router-link to="/buefy">Buefy</router-link> |
      <router-link to="/element">Element UI</router-link>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;  
}
.content {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(238, 238, 238);
}
.main-nav {
  padding: 20px;
  text-align: center;
  background: #2c3e50;
  margin-bottom: 0;
}

.main-nav a {
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s;
}

.main-nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}

.main-nav a:hover {
  color: #42b983;
}
</style>