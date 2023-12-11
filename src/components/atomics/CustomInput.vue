<template>
    <input v-model="value" :type="type || 'text'" @input="handleChange"/>
    {{ errorMessage }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
    name: 'CustomInput',
    props: {
        name: {
            type: String,
            required: true
        },
        type: String,
        modelValue: String, //binding value of v-model with the parent component
        rules: { type: String, default: "" },
    },
    setup(props) {
        const { value, errorMessage, handleChange } = useField(() => props.name, props.rules,{
            //validateOnValueUpdate: true,
            syncVModel: true
        });

        // const { value, errorMessage } = useField('email', isEmail);
        return {
            value,
            errorMessage,
            handleChange
        }
    }
});
</script>