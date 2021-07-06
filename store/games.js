import axios from 'axios';

export const state = () => ({
  posts: [],
  post: {
    game: {}
  },
  opinions: [],
  userOpinions: {},
  isPostsLoading: false,
  page: 0,
  limit: 10,
  totalPage: 0,
  _alias: '',
})

export const getters = {
  getUserOpinion(state, getters) {
    return state.userOpinions[getters.getAlias];
  },
  getAlias(state) {
    return state._alias;
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setPost(state, post) {
    state.post = post;
  },
  setAlias(state, alias) {
    state._alias = alias;
  },
  setPostsLoading(state, isPostsLoading) {
    state.isPostsLoading = isPostsLoading;
  },
  setPostsPage(state, page) {
    state.page = page > 0 ? page - 1 : 0;
  },
  setPageLimit(state, limit) {
    state.limit = limit;
  },
  setTotalPage(state, totalPage) {
    state.totalPage = totalPage;
  },
  setGameOpinions(state, opinions) {
    state.opinions = opinions;
  },
  setUserOpinion(state, {alias: key, newOpinion: opinion}) {
    if(state.userOpinions.hasOwnProperty(key)) {
      state.userOpinions[key].unshift(opinion);
    } else {
      state.userOpinions[key] = [opinion];
    }
  }
}

export const actions = {
  async fetchGames({state, commit}) {
    try {
      commit('setPostsLoading', true);

      const response = await axios.get('https://api.tesera.ru/games', {
        params: {
          offset: state.page,
          limit: state.limit,
        }
      });

      commit('setPosts', response.data);
      commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit))
    } catch(e) {
      console.warn(e);
    } finally {
      commit('setPostsLoading', false);
    }
  },
  async fetchGame({commit}, alias) {
    try {
      commit('setPostsLoading', true);
      const response = await axios.get('https://api.tesera.ru/games/' + alias);
      commit('setPost', response.data);
    } catch(e) {
      console.warn(e);
    } finally {
      commit('setPostsLoading', false);
    }
  },
  async fetchGameOpinion({commit}, alias) {
    try {
      // const response = await axios.get('https://private-9c71eb-teseratest.apiary-mock.com/opinions' + alias);
      const response = await axios.get('https://private-9c71eb-teseratest.apiary-mock.com/opinions');
      commit('setGameOpinions', response.data);
    } catch(e) {
      console.warn(e);
    } finally {
      commit('setPostsLoading', false);
    }
  },
  addUserOpinion({commit}, {alias, opinion}) {
    commit('setAlias', alias);

    const newOpinion = {
      id: Date.now(),
      published_at: new Date().toISOString(),
      comment: opinion
    }

    const userOpinions = { alias, newOpinion };
    commit('setUserOpinion', userOpinions);
  },
}


