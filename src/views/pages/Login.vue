<template>
  <div>
    <h4>Login Form</h4>
    <form>
      <div class="mb-3">
        <label for="txtEmail" class="form-label ps-2">Email</label>
        <CustomInput name = "email" v-model="email" rules="required|email|minLength:8"/> {{ email }}
        <CustomCheckBox name="drinks" checked-value="coffee" /> Coffee
        <CustomCheckBox name="drinks" checked-value="tea" /> tea
      </div>
      <div class="mb-3">
        <label for="txtPassword" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="txtPassword"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="onSubmit">
        Submit
      </button>

      {{ values }}
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useForm } from 'vee-validate';
import CustomInput from '@/components/atomics/CustomInput.vue';
import CustomCheckBox from '@/components/atomics/CustomCheckBox.vue';
import { isEmail } from '@/lib/validation';

  export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    components: {CustomInput, CustomCheckBox },
    setup(props, { emit }) {
      const email = ref('');
      const { values,errors, defineField, setValues,handleSubmit,resetForm,setFieldError } = useForm({
          // initialValues: {
          //   email: 'test@example.com',
          //   password: 'p@$$w0rd',
          // },
          // validationSchema: {
          //   // email: (val:string) => (isEmail(val) ? true : 'Invalid email'),
          //   email: 'required|email|min:8'
          // },
      })

      // const [email, emailProps] = defineField('email');
      
      const login = async () => {
        console.log("login");
      };

      // const updateValue = () =>{
      //   setValues({ 
      //     email: 'test@example.com',
      //     password: 'p@$$w0rd',
      //   });
      // }

      // const fetchData = async () =>{
      //   return new Promise(resolve => {
      //     setTimeout(() => {
      //       resolve({
      //       email: 'test@example.com',
      //       password: 'p@$$w0rd',
      //       });
      //     }, 1500);
      //   });
      // }

      const onSubmit = handleSubmit((values, { resetForm }) => {

        // const response:any={
        //   errors:{
        //     email: 'Invalid email',
        //   }
        // }

        // if (!response.errors) {
        // resetForm();
        //   return;
        // }
  
        // if (response.errors.email) {
        //   setFieldError('email', response.errors.email);
        // }

      });

      // onMounted(async () => {
      //   const data = await fetchData();
      //   resetForm({
      //     values: data,
      //     errors: {
      //       email: '',
      //       }, 
      //     });
      // });

      return {
        login, onSubmit, email, values, errors,
        // email,emailProps,errors,
      };
    },
  });
</script>