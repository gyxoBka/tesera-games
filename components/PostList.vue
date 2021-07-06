<template>
  <div>
    <h2 v-if="posts.length > 0 || isPostsLoading">Список игр</h2>
    <div v-if="posts.length > 0">
        <post-item
          v-for="post in posts" 
          :post="post" 
          :key="post.id" 
        />
        <el-pagination class="posts_pagination" @current-change="changePage"
            layout="prev, pager, next"
            :total="totalPage">
        </el-pagination>
    </div>
    <div v-else>
      <div class="spinner" v-if="isPostsLoading">
        <div class="spinner__ripple">
          <div></div>
          <div></div>
        </div>
      </div>      
      <h2 v-else>Список игр пуст</h2>
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    isPostsLoading: {
      type: Boolean,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    }
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    }
  }
}
</script>

<style lang="scss" scoped>
.posts_pagination {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
.spinner {
  display: flex;
  justify-content: center;

  &__ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
      position: absolute;
      border: 4px solid #409EFF;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

      &:nth-child(2) {
        animation-delay: -0.5s;
      }
    }
  }
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>