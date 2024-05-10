<template>
    <div>
        <input class="form__input" v-model="value" :type="type || 'text'" @input="handleChange" />
        <div class="error-msg-style" v-if="errorMessage">
            <OptionDropdown>
                {{ errorMessage }}
            </OptionDropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import OptionDropdown from "@/components/atomics/OptionDropdown.vue";

const props = defineProps({
    type: String,
    name: {
        type: String,
        required: true
    },
    rules: {
        type: String,
        default: ""
    },
    modelValue: String,
})

const { value, errorMessage, handleChange } = useField(() => props.name, props.rules, {
    //validateOnValueUpdate: true,
    syncVModel: true
});

</script>

<style lang="scss">
/*Input focus move up label*/
.form__input:focus+.form__label {
    top: -.5rem;
    left: .8rem;
    color: var(--first-color);
    font-size: var(--small-font-size);
    font-weight: 500;
    z-index: 10;
}

/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus)+.form__label {
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

.error-msg-style {
    @include fz(xs);
    @include fw(medium);
    width: 100%;
    text-align: left;
}
</style>