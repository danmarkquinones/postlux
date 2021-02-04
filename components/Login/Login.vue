<template>
    <div >
        <div class="login-container">
            <!-- <h1>LOGIN PAGE</h1> -->
            
            <!-- <p>{{$store.state.userStores.isLoggedIn}}</p> -->
            <a-form class="form" layout="inline" :form="form" @submit="handleSubmit">
                <img src="~assets/imgs/vector/default-monochrome.svg" />

                <!-- <img src="" alt=""> -->
                <a-form-item class="f-field" :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
                    <a-input
                        class="shadow"
                        v-decorator="[
                            'userName',
                            { rules: [{ required: true, message: 'Please input your username!' }] },
                        ]"
                        placeholder="Username"
                    >
                        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item class="f-field" :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
                    <a-input
                        class="shadow"
                        v-decorator="[
                            'password',
                            { rules: [{ required: true, message: 'Please input your Password!' }] },
                        ]"
                        type="password"
                        placeholder="Password"
                    >
                        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <small class="err-msg" v-if="message!==''">{{message}}</small>
                <a-form-item class="f-field">
                    <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
                        Log in
                    </a-button>
                </a-form-item>
            </a-form>
            <!-- <button @click="login">LOGIN</button> -->
        </div>
    </div>
</template>

<script>
import bg1 from '../../assets/bg1.jpg'
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
    head(){
        return{
            title:'PostLux',
        }
    },
    data() {
        return {
            hasErrors,
            form: this.$form.createForm(this, { name: 'vetical_login' }),
            message:'',
            bg1
        }
    },
    mounted() {
        this.$nextTick(() => {
            // To disabled submit button at the beginning.
            this.form.validateFields()
            document.querySelector('body').style.backgroundImage=`url(${bg1})`
            document.querySelector('body').style.backgroundPosition="center"
            document.querySelector('body').style.backgroundRepeat="no-repeat"
            document.querySelector('body').style.backgroundSize="cover"
        })
    },
    watch: {
        message: function(v) {
            console.log('login',v)
        }
    },
    methods : {
        userNameError() {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched('userName') && getFieldError('userName');
        },
    
        // Only show error after a field is touched.
        passwordError() {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched('password') && getFieldError('password');
        },

        handleSubmit(e) {
        e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    if(values.userName==='test' && values.password==='test'){
                        this.$store.commit('userStores/login')
                    }else{
                        this.message=`please input 'test' as username and password`
                    }
                    
                }
            });
        },
    },
    
}
</script>
<style scoped>
    .login-container{
        background:blue;
        height: 100%;
        width: 100%;
        /* position: relative; */
    }
    .err-msg{
        padding:10px;
        color:tomato;
    }
    .form{
        background: rgb(0, 74, 102);
        padding: 20px;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        border-radius: 5px;
    }
    /* input[type=text]>#vetical_login_userName{
        box-shadow: 0px 0px 5px #000 inset;
    } */
    .f-field{
        display: block;
        margin:10px;
    }
</style>