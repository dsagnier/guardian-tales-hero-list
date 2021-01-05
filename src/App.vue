<template>
    <div id="nav">
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Home</router-link>
            </div>
        </nav>
    </div>
    <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
