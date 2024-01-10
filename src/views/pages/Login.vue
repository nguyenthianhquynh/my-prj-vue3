<template>
  <div>
    <div class="l-form">
      <form action="" class="form">
        <h1 class="form__title">Sign In</h1>

        <div class="form__div">
          <CustomInput name = "email" v-model="email" rules="required|email|minLength:8"/> 

          <label for="" class="form__label">Email</label>
        </div>

        <div class="form__div">
          <input id="txtPassword" type="password" class="form__input" placeholder=" ">
          <label for="txtPassword" class="form__label">Password</label>
        </div>

        <input type="submit" class="form__button" value="Sign In" @click="onSubmit">
       {{ values }}

      </form>
    </div>
      <div class="login-page">
      <div class="w-full">
        <h1 class="title">Login Form</h1>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useForm } from 'vee-validate';
import CustomInput from '@/components/atomics/CustomInput.vue';
import RepositoryFactory from '@/lib/https/repositoryFactory';
import AuthRepository from '@/lib/https/repositories/authRepository';
import router from '@/router';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: { CustomInput },
  setup(props, { emit }) {
    const { login } = RepositoryFactory.getRepository<AuthRepository>(AuthRepository)
    const email = ref('');
    const { values, errors, defineField, setValues, handleSubmit, resetForm, setFieldError } = useForm({
      // initialValues: {
      //   email: 'test@example.com',
      //   password: 'p@$$w0rd',
      // },
      // validationSchema: {
      //   // email: (val:string) => (isEmail(val) ? true : 'Invalid email'),
      // },
    })

    // const updateValue = () =>{
    //   setValues({ 
    //     email: 'test@example.com',
    //     password: 'p@$$w0rd',
    //   });
    // }

    const fetchData = async () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            email: 'johndoe@gmail.com',
            password: 'password123',
          });
        }, 1500);
      });
    }

    const onSubmit = handleSubmit(async (values, { resetForm }) => {
      const response = await login(values["email"], values["password"])

      if (!response.errors) {
        resetForm();
        router.push({ name: 'home' });
        return;
      }

      if (response.errors.email) {
        setFieldError('email', response.errors.email);
      }

    });

    onMounted(async () => {
      const data = await fetchData();
      resetForm({
        values: data,
        errors: {
          email: '',
        },
      });
    });

    return {
      login, onSubmit, email, values, errors,
    };
  },
});
</script>

<style lang="scss">
.login-page {
  padding: 40px 0 80px;
  min-height: calc(100vh - 140px);
  flex: 1;

  @include flex(center, center);
  flex-direction: column;

  @include mq(l) {
    padding: 0;
    justify-content: flex-start;
  }
}

.title {
  //@include fz(xl);
  //@include fw(bold);
  margin-top: 5px;
  color: $secondary4;

  @include mq(l) {
    //@include fz(s);
  }
}

/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

/*===== VARIABLES CSS =====*/

:root {
    /*===== Colores =====*/
    --first-color: #1A73E8;
    --input-color: #80868B;
    --border-color: #DADCE0;

    /*===== Fuente y tipografia =====*/
    --body-font: 'Roboto', sans-serif;
    --normal-font-size: 1rem;
    --small-font-size: .75rem;
}

/*===== BASE =====*/
*,::before,::after{
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
}
h1{
    margin: 0;  
}

/*===== FORM =====*/
.l-form{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form{
    width: 360px;
    padding: 3rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(92, 99, 105, .2);

    &__title{
        font-weight: 500;
        margin-bottom: 2.5rem;
    }
    &__div{
        position: relative;
        height: 52px;
        margin-bottom: 1.5rem;
    }
    &__input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: var(--normal-font-size);
        border: 2px solid var(--border-color);
        border-radius: .5rem;
        outline: none;
        padding: 1rem;
        background: none;
        z-index: 1;
    }
    &__label{
        position: absolute;
        left: 1rem;
        top: 1rem;
        padding: 0 .25rem;
        background-color: #fff;
        color: var(--input-color);
        font-size: var(--normal-font-size);
        transition: .3s;
    }
    &__button{
        display: block;
        margin-left: auto;
        padding: .75rem 2rem;
        outline: none;
        border: none;
        background-color: var(--first-color);
        color: #fff;
        font-size: var(--normal-font-size);
        border-radius: .25rem;
        cursor: pointer;
        transition: .3s;

        &:hover{
            box-shadow: 0 10px 36px rgba(0, 0, 0, .15);
        }
    }
}

</style>