<template>
    <form @submit.prevent="handleSubmit">
        <div v-for="(field, index) in props.fields" :key="index">
            <label :for="field.name">{{ field.label }}:</label>
            <input :type="field.type" :id="field.name" v-model="formData[field.name]">
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</template>

<script setup>
import { reactive } from 'vue';

//#region [PROPS & EMIT]
const props = defineProps({
    fields: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['change', 'update','submit'])
//#endregion

const formData = reactive({});

const handleSubmit = () => {
    emit('submit', formData);
};

</script>
