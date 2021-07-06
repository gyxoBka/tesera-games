<template>
<div>
  <h1>{{post.game.title}}</h1>

<div class="card">
  <div class="card__image">
    <img :src="post.game.photoUrl" :alt="post.game.title" />
  </div>
  <div class="card__description">
    <div v-html="post.game.description"></div>
    <el-button @click="$router.back()" class="card__btn">Назад</el-button>
  </div>
</div>
</div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 1rem;

  border: 1px solid rgba(#ccc, .3);
  border-radius: .5rem;
  box-shadow: 0 4px 5px rgba(#000, .1);
  background: #fff;

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  &__description {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    width: 100%;
  }

  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    justify-content: flex-start;
  }

  &__body {
    flex-grow: 1;
  }

  &__btn {
    align-self: flex-end;
    width: 150px;
  }

  &__image {
    display: block;
    width: min-content;
    height: 150px;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>