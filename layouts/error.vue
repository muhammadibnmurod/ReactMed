<template>
  <div>
    <h1>{{ error?.statusCode }}</h1>
    <p>{{ error?.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useError } from "#app";

const error = useError();
</script>
