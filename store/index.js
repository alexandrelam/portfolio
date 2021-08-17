export const state = () => ({
  imageUrl: "okarito.png"
});

export const mutations = {
  addImageUrl(state, link) {
    state.imageUrl = link;
  },
  resetImageUrl(state) {
    // state.imageUrl = "";
    console.log('reset')
  }
};
