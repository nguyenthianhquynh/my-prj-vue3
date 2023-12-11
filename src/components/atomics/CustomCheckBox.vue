<template>
      <input :value="checkedValue" :checked="checked" @change="handleChange" type="checkbox" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
    name: 'CustomCheckBox',
    props: {
        name: {
            type: String,
            required: true
        },
        checkedValue: String,
    },
    setup(props) {
        const { handleChange, checked } = useField(() => props.name, undefined, {
            type: 'checkbox',
            checkedValue: props.checkedValue,
        });

        // const { value, errorMessage } = useField('email', isEmail);
        return {
            handleChange,
            checked
        }
    }
});
</script>