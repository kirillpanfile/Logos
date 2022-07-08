<template>
  <input v-model="name" type="text" name="" id="" placeholder="title" />
  <input type="number" v-model="price" name="" id="" placeholder="price" />
  <input
    v-model="description"
    type="text"
    name=""
    id=""
    placeholder="description"
  />
  <input
    @change="(e) => (image = e.target.files[0])"
    type="file"
    name=""
    id=""
    placeholder="upload image"
  />
  Category :
  <select v-model="category" name="category" id="">
    <option v-for="(item, index) in categories" :key="index" :value="item">
      {{ item }}
    </option>
  </select>
  <input v-model="weight" type="number" name="" id="" placeholder="weight" />
  <input
    v-model="proteins"
    type="number"
    name=""
    id=""
    placeholder="proteins"
  />
  <input v-model="fats" type="number" name="" id="" placeholder="fats" />
  <input
    v-model="carbohydrates"
    type="number"
    name=""
    id=""
    placeholder="carbohydrates"
  />
  <input
    v-model="calories"
    type="number"
    name=""
    id=""
    placeholder="calories"
  />

  <button @click="submit">Submit</button>
</template>

<script setup>
import { ref } from "vue";

const description = ref("");
const name = ref("");
const category = ref("");
const image = ref("");
const weight = ref("");
const proteins = ref("");
const fats = ref("");
const carbohydrates = ref("");
const calories = ref("");
const price = ref("");
const categories = [
  "Холодные закуски  ",
  "Горячие закуски",
  "Мясные блюда",
  "Супы",
  "Напитки",
];

async function submit() {
  const formData = new FormData();
  const filename = Date.now() + image.value.name;
  formData.append("name", filename);
  formData.append("file", image.value);
  try {
    await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });
    const response = await fetch("http://localhost:5000/api/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        category: category.value,
        image: filename,
        weight: weight.value,
        proteins: proteins.value,
        fats: fats.value,
        carbohydrates: carbohydrates.value,
        calories: calories.value,
        price: price.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
}
</style>
