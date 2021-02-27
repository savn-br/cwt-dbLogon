<template lang="pug">
div
  .error500
    .error500
      .error500-404
        h2 500
  .Wrapper
    h1 Error :(
    p {{ error.message }}
</template>

<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

body {
  background-color: #000;
  color: red;
}
.error500 {
  //max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}
#error500 {
  position: relative;
  height: 100vh;
  background: #030005;
}

#error500 .error500 {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.error500 .error500-404 {
  position: relative;
  height: 180px;
  margin-bottom: 20px;
  z-index: -1;
}

.error500 .error500-404 h2 {
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 224px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -12px;
  color: #030005;
  text-transform: uppercase;
  text-shadow: -1px -1px 0 #8400ff, 1px 1px 0 #ff005a;
  letter-spacing: -20px;
}

.Wrapper {
  width: 540px;
  height: 200px;
  //display:none;
  margin: 4% auto 0;
  max-width: 100%;
  max-height: 100%;
  position: relative;
  overflow: hidden;
}

#five {
  z-index: 10;
  position: absolute;
}

.left {
  z-index: 1;
  width: 550px;
  height: 200px;
  position: absolute;
  overflow: hidden;
}

.right {
  z-index: 1;
  width: 550px;
  height: 200px;
  position: absolute;
  overflow: hidden;
  left: 80%;
}

h1 {
  color: #000;
  background: red;
  padding: 10px;
  border-radius: 50px;
  width: 150px;
  margin: 30px auto 10px;
  text-align: center;
  font-size: 1em;
  font-family: 'Righteous', sans-serif;
  //display:none;
}

p {
  width: 350px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Righteous', sans-serif;
  //display:none;
}
</style>
