import { reactive } from 'vue';

export const store = reactive({

    baseUrl: 'http://127.0.0.1:8000',
    menu: [
        {
            routeName: 'home',
            label: 'Home',
        },
        {
            routeName: 'projects',
            label: 'Projects',
        },
        {
            routeName: '',
            label: 'About Me',
        },
        {
            routeName: '',
            label: 'Blog',
        },
    ]

});