<template>
    <StackLayout>
        <RadSideDrawer ref="drawer" showOverNavigation="true" style="height:100%">
            <StackLayout ~drawerContent>
                <Button text="Hello" @tap="$router.push('/hello'); $refs.drawer.nativeView.closeDrawer() "/>
                <Button text="Counter" @tap="$router.push('/counter'); $refs.drawer.nativeView.closeDrawer()"/>
                <Button text="Logout" @tap="logout()"/>
            </StackLayout>
            <StackLayout ~mainContent>
                <ActionBar title="Drawer Sample">
                    <ActionItem text="Menu" @tap="$refs.drawer.nativeView.showDrawer()"/>
                </ActionBar>
                <router-view></router-view>
            </StackLayout>
        </RadSideDrawer>

    </StackLayout>
</template>

<script>

    import * as applicationSettings from 'tns-core-modules/application-settings'

    export default {
        name: 'home',
        created() {

            this.$router.push('/hello');
        },

        methods: {
            logout: function () {
                applicationSettings.setBoolean('isLogged', false);
                this.$router.replace('/login');
            }
        }
    }

</script>

