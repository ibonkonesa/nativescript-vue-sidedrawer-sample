<template>
    <StackLayout>
        <ActionBar height="0"></ActionBar> <!--THIS ACTION BAR DOES THE HACK! -->
        <RadSideDrawer ref="drawer" showOverNavigation="true">
            <StackLayout ~drawerContent>
                <Button text="Hello" @tap="$router.push('/hello'); $refs.drawer.nativeView.closeDrawer() "/>
                <Button text="Counter" @tap="$router.push('/counter'); $refs.drawer.nativeView.closeDrawer()"/>
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

    export default {
        name: 'home',
        created() {

            this.$router.push('/hello');
        }
    }

</script>