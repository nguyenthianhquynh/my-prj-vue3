<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
    <button type="button" class="bg-indigo-200 px-3 py-1 font-medium" @click="showModal = true">
        Show modal
    </button>

    <BaseModal :show="showModal">
        <div class="p-4">
            <div class="text-lg">Hello Modal World!</div>

            <div class="py-2 text-sm">Click to close:</div>

            <button type="button" class="bg-indigo-200 px-3 py-1 font-medium" @click="showModal = false">
                Hide modal
            </button>
        </div>
    </BaseModal>
</template>