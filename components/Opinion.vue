<template>
  <div class="opinion">
    <div class="opinion__date">{{parseDate(opinion.published_at)}}</div>
    <div class="opinion__comment">{{opinion.comment}}</div>
  </div>
</template>

<script>
export default {
  props: {
    opinion: {
      type: Object,
      required: true,
    }
  },
  methods: {
    parseDate(date) {
      const opinionDate = new Date(Date.parse(date))
      return opinionDate.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
    }
  }
}
</script>

<style lang="scss">
.opinion {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1.5rem;
  border: 1px solid rgba(#ccc, .3);
  border-radius: .5rem;
  box-shadow: 0 4px 5px rgba(#000, .1);
  background: #fff;

  &__item {
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
}
</style>