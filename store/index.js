export const state = () => ({
  imageUrl: ""
});

export const mutations = {
  addImageUrl(state, link) {
    state.imageUrl = link;
  },
  resetImageUrl(state) {
    state.imageUrl = "";
  }
};
