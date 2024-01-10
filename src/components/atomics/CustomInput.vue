<template>
    <input class="form__input" v-model="value" :type="type || 'text'" @input="handleChange"/>
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

        return {
            value,
            errorMessage,
            handleChange
        }
    }
});
</script>

<style lang="scss">
/*Input focus move up label*/
.form__input:focus + .form__label {
    top: -.5rem;
    left: .8rem;
    color: var(--first-color);
    font-size: var(--small-font-size);
    font-weight: 500;
    z-index: 10;
}

/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
    top: -.5rem;
    left: .8rem;
    z-index: 10;
    font-size: var(--small-font-size);
    font-weight: 500;
}

/*Input focus*/
.form__input:focus {
    border: 2px solid var(--first-color);
}
</style>