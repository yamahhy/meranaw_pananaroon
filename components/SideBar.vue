<template>
    <div class="sidebar">
        <button @click="toggle">☰</button>
    </div>
</template>

<script setup>
const toggle = () => {
    console.log("Sidebar clicked");
};
</script>

<style scoped>
.sidebar {
    width: 60px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
}
</style>