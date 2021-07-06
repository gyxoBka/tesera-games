<template>
  <div class="opinions">
    <h2>Отзывы об игре</h2>
    <el-button @click="isAddOpinion = !isAddOpinion">Оставить отзыв</el-button>
    <el-dialog
      title="Оставить отзыв"
      :visible.sync="isAddOpinion"
      width="30%">
        <opinion-form @submitOpinion="submitOpinion"/>
    </el-dialog>
    <div v-for="userOpinion in userOps" :key="userOpinion.id">
      <opinion :opinion="userOpinion"/>
    </div>
    <div v-for="opinion in opinions" :key="opinion.id">
      <opinion :opinion="opinion"/>
    </div>
  </div>
</template>

<script>
import Opinion from './Opinion'
import OpinionForm from './OpinionForm'
import { mapState, mapActions } from 'vuex';

export default {
  components: { Opinion, OpinionForm },
  props: {
    alias: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isAddOpinion: false,
      userOps: {}
    }
  },
  methods: {
    ...mapActions({
      fetchGameOpinion: 'games/fetchGameOpinion',
      addUserOpinion: 'games/addUserOpinion',
    }),    
    submitOpinion(opinion) {
      this.isAddOpinion = false;
      let payLoad = {
        alias: this.alias,
        opinion
      }
      this.addUserOpinion(payLoad);
      this.userOps = this.userOpinions[this.alias];
    },
  }, 
  computed: {
    ...mapState({
      opinions: state => state.games.opinions,
      userOpinions: state => state.games.userOpinions,
    })
  },
  mounted() {
    this.fetchGameOpinion(this.alias);
    this.userOps = this.userOpinions[this.alias];
  }
}
</script>

<style lang="scss" scoped>

</style>