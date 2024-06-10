<script setup lang="ts"></script>

<template>
  <r-grid :desktop-gaps="[24]" :tablet-gaps="[32]" :mobile-gaps="[40]" desktop-column="1">
    <slot />
  </r-grid>
</template>

<style module lang="scss"></style>
