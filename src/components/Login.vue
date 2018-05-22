<template>
    <FlexboxLayout class="page">
        <StackLayout class="form">
            <Image class="logo" src="~/images/logo.jpg"></Image>
            <Label class="header" text="SideDrawer Sample"></Label>
            <StackLayout class="input-field">
                <TextField v-model="user.username" class="input" hint="Username" autocorrect="false"
                           autocapitalizationType="none" returnKeyType="next"></TextField>
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>

            <StackLayout class="input-field">
                <TextField v-model="user.password" class="input" hint="Password" secure="true"></TextField>
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
            <ActivityIndicator :busy="isLogging"/>
            <Button text="Login" @tap="doLogin"
                    :isEnabled="!isLogging && user.username.length > 0 && user.password.length > 0"
                    class="btn btn-primary m-t-20"></Button>
        </StackLayout>
    </FlexboxLayout>
</template>

<script>

    import * as applicationSettings from 'tns-core-modules/application-settings'

    export default {
        name: "login",

        data() {

            return {
                user: {
                    username: '',
                    password: ''
                },

                isLogging: false
            }
        },

        methods: {
            doLogin: function () {
                this.isLogging = true;
                setTimeout(() => {
                    applicationSettings.setBoolean('isLogged', true);
                    this.$router.replace('/home');
                }, 1000);
            }
        }
    }
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .btn-primary {
        height: 50;
        margin: 30 5 15 5;
        background-color: #D51A1A;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
    }


</style>