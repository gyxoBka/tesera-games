<template>
    <el-container>
      <el-main class="app">
        <post-list :posts="posts" :isPostsLoading="isPostsLoading" :totalPage="totalPage" @changePage="changePage"/>
      </el-main>
    </el-container> 
</template>

<script>
import PostList from '../../components/PostList';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    PostList
  },
  methods: {
    ...mapMutations({
      setPostsPage: 'games/setPostsPage'
    }),
    ...mapActions({
      fetchGames: 'games/fetchGames',
    }),
    changePage(page) {
      this.setPostsPage(page);
    },
  },
  computed: {
    ...mapState({
      posts: state => state.games.posts,
      isPostsLoading: state => state.games.isPostsLoading,
      page: state => state.games.page,
      limit: state => state.games.limit,
      totalPage: state => state.games.totalPage,
    })
  },
  mounted() {
    this.fetchGames();
  },
  watch: {
    page() {
      this.fetchGames();
    }
  }
}
</script>

<style lang="scss">

</style>
