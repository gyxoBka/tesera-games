<template>
  <el-container>
    <el-main class="app">
      <div v-if="!isPostsLoading">
        <post-page-item
          :post="post" 
        />
        <game-opinions :alias="alias" />
      </div>
      <div v-else>
        посты загрузжаются
      </div>
    </el-main>
  </el-container>
</template>

<script>
import PostPageItem from '../../components/PostPageItem';
import { mapState, mapMutations, mapActions } from 'vuex';
import GameOpinions from '../../components/GameOpinions';

export default {
  components: { PostPageItem, GameOpinions },
  data() {
    return {
      alias: this.$route.params.alias,
    }
  },
  methods: {
    ...mapActions({
      fetchGame: 'games/fetchGame',
    })
  },
  computed: {
    ...mapState({
      post: state => state.games.post,
      isPostsLoading: state => state.games.isPostsLoading,
    })
  },
  mounted() {
    this.fetchGame(this.alias);
  }
}
</script>

<style>

</style>