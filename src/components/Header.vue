<template>
  <header>
    <h1 style="font-size: 52px">Don´t be late, aluxioner</h1>
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder="Name"
        name="name"
        id="name"
        required
      />
      <label for="name" class="form__label">¿Cuál es tu parada?</label>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>
