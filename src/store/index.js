import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  state: {
    data: {},
    loading: false,
  },
  getters: {
    title: (state) => state.data.translation.title,
    description: (state) => state.data.translation.description,
    images: (state) => state.data.images.edges.map((eachEdge) => eachEdge.node.modal),
    tableData: (state) => state.data.variants.edges,
    stock: (state) => state.data.inStock,
    noOfVariants: (state) => state.data.variants.edges.length,
  },
  mutations: {
    UPDATE_DATA(state, payload) {
      state.data = payload.data.storefrontBySlug.listing;
    },
  },
  actions: {
    async fetchData({ commit, state }) {
      try {
        state.loading = true;
        let url =
          "https://gist.githubusercontent.com/Vugario/ca7cc468c344494ccae22b2c835e0c9f/raw/fe4669ee0989e78be1ed9ccd78ba178c695c305a/data.json";
        const res = await fetch(url);
        const data = await res.json();
        state.loading = false;
        commit("UPDATE_DATA", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default store;
