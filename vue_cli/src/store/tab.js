export default {
    state: {
        isCollapse: false,
        currentMenu: null,
        tabsList: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }, ]

    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            console.log(2);
            val.name === 'home' ? (state.currentMenu = null) : state.currentMenu = val

        }
    }
}