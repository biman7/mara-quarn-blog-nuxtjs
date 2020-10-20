import cookie from 'cookie'
import { setAuthToken, resetAuthToken } from '~/utils/auth'

export const state = () => ({
    user: null
});

export const mutations = {
    set_user(store, data) {
        store.user = data
    },
    reset_user(store) {
        store.user = null
    }
}

export const actions = {
    nuxtServerInit: ({ dispatch }, context) => new Promise((resolve, reject) => {
        const cookies = cookie.parse(context.req.headers.cookie || '');
        const token = cookies["x-access-token"];
        if (token) {
            setAuthToken(token);
            dispatch("fetch").then((user) => {
                resolve(true);
            }).catch((error) => {
                console.log(error);
                resetAuthToken();
                context.res.setHeader('Set-Cookie', cookie.serialize('x-access-token', '', { maxAge: 0 }));
                resolve(false);
            })
        } else {
            resolve(false);
        }
    }),
    fetch({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.$get("/api/users/@me").then((user) => {
                commit("set_user", user);
                resolve(user);
            }).catch((error) => {
                commit("reset_user");
                reject(error);
            })
        })
    }
}