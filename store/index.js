export const state = () => ({
  imageUrl: "okarito.png",
  hoverMouse: false,
  hoverMouseSmall: false
});

export const getters = {
  hoverMouseStatus: state => state.hoverMouse,
  hoverMouseSmall: state => state.hoverMouseSmall
};

export const mutations = {
  addImageUrl(state, link) {
    state.imageUrl = link;
  },
  resetImageUrl(state) {
    state.imageUrl = "";
  },
  setMouseHover(state, bool) {
    state.hoverMouse = bool;
  },
  setMouseSmall(state, bool) {
    state.hoverMouseSmall = bool;
  }
};
