import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    console.log(images);
    const promise = await api.uploadImages(images, token);
    console.log(promise, "promise");
    router.push("/");
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};
export default { state, getters, actions, mutations };
