<template>
  <div>
    <div class="">
      <form action="" class="form">
        <h1 class="form__title">Sign In</h1>

        <!-- <div class="form__div">
          <CustomInput name="email" v-model="email" rules="required|email|minLength:8" />

          <label for="" class="form__label">Email</label>
        </div>

        <div class="form__div">
          <input id="txtPassword" type="password" class="form__input" placeholder=" ">
          <label for="txtPassword" class="form__label">Password</label>
        </div>

        <input type="submit" class="form__button" value="Sign In" @click="onSubmit">
        {{ values }} -->

      </form>
    </div>
    <div class="login-page">
      <div class="w-full">
        <h1 class="title">Login Form</h1>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from 'vue';
import { useForm } from 'vee-validate';
import CustomInput from '@/components/atomics/CustomInput.vue';
import RepositoryFactory from '@/lib/https/repositoryFactory';
import AuthRepository from '@/lib/https/repositories/authRepository';
import router from '@/router';

// export default defineComponent({
//   // eslint-disable-next-line vue/multi-word-component-names
//   name: "Login",
//   components: { CustomInput },
//   setup(props, { emit }) {
//     const { login } = RepositoryFactory.getRepository<AuthRepository>(AuthRepository)
//     const email = ref('');
//     const { values, errors, defineField, setValues, handleSubmit, resetForm, setFieldError } = useForm({
//       // initialValues: {
//       //   email: 'test@example.com',
//       //   password: 'p@$$w0rd',
//       // },
//       // validationSchema: {
//       //   // email: (val:string) => (isEmail(val) ? true : 'Invalid email'),
//       // },
//     })

//     // const updateValue = () =>{
//     //   setValues({ 
//     //     email: 'test@example.com',
//     //     password: 'p@$$w0rd',
//     //   });
//     // }

//     const fetchData = async () => {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           resolve({
//             email: 'johndoe@gmail.com',
//             password: 'password123',
//           });
//         }, 1500);
//       });
//     }

//     const onSubmit = handleSubmit(async (values, { resetForm }) => {
//       const response = await login(values["email"], values["password"])

//       if (!response.errors) {
//         resetForm();
//         router.push({ name: 'home' });
//         return;
//       }

//       if (response.errors.email) {
//         setFieldError('email', response.errors.email);
//       }

//     });

//     onMounted(async () => {
//       const data = await fetchData();
//       resetForm({
//         values: data,
//         errors: {
//           email: '',
//         },
//       });
//     });

//     return {
//       login, onSubmit, email, values, errors,
//     };
  // },
// });
</script>

<style lang="scss">

/*===== FORM =====*/
.l-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>