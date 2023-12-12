import { isEmail } from '@/lib/helps';
import { defineRule } from 'vee-validate';

defineRule('required', (value:string) => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
});
defineRule('email', (value: string) => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }
    // Check if email
    if (!isEmail(value)) {
        return 'This field must be a valid email';
    }
    return true;
});

defineRule('minLength', (value: string, [limit]: [number]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }
    if (value.length < limit) {
        return `This field must be at least ${limit} characters`;
    }
    return true;
});

defineRule('minMax', (value: string | any[], [min, max]: any) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }
    const numericValue = Number(value);
    if (numericValue < min) {
        return `This field must be greater than ${min}`;
    }
    if (numericValue > max) {
        return `This field must be less than ${max}`;
    }
    return true;
});

defineRule('confirmed', (value: any, [target]: any) => {
    if (value === target) {
        return true;
    }
    return 'Passwords must match';
});