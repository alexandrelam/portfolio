export const state = () => ({
  imageUrl: "",
  hoverMouse: false,
  hoverMouseSmall: false,
  visited: [],
});

export const getters = {
  hoverMouseStatus: (state) => state.hoverMouse,
  hoverMouseSmall: (state) => state.hoverMouseSmall,
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
  },
  addVisitedPage(state, page) {
    state.visited.push(page);
  },
  resetVisitedPage(state) {
    state.visited = [];
  },
};
