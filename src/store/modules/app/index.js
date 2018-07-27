const state = {
  modal: {
    show: false,
    content: undefined
  }
};

const mutations = {
  showModal(state) {
    state.modal.show = true;
  },
  hideModal(state) {
    state.modal.show = false;
  },
  setModalContent(state, payload) {
    state.modal.content = payload.content;
  }
};

const getters = {
  getModalShow(state) {
    return state.modal.show;
  },
  getModalContent(state) {
    return state.modal.content;
  }
};

const actions = {
  showModal({ commit }) {
    commit("showModal");
  },
  hideModal({ commit }) {
    commit("hideModal");
  },
  setModalContent({ commit }, content) {
    commit("setModalContent", {
      content
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
