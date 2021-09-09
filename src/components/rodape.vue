<template>
    <footer>
      <h1>{{valorrodape}}</h1>
    </footer>
</template>

<script>
export default {
  props: ["valorrodape"]
};
</script>

<style>
footer {margin: 15px auto;
  background-color: bisque;
  height: 80px;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 0% 1% 2% 1%}
</style>