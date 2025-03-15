<template>
    <div class="proverb-box">
        <p>{{ proverb }}</p>
    </div>
</template>

<script setup>
defineProps({
    proverb: String
});
</script>

<style scoped>
.proverb-box {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    color: white;
}
</style>