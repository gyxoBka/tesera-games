<template>
  <form class="form">
    <el-input
    type="textarea"
    :autosize="{ minRows: 2, maxRows: 4}"
    placeholder="Ваше мнение"
    v-model="textarea">
    </el-input>
  <el-button type="primary" class="form__btn" @click="submitOpinion">Оставить отзыв</el-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',
    }
  },
  methods: {
    submitOpinion() {
      this.$emit('submitOpinion', this.textarea);
      this.textarea = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form__btn {
  margin-top: 1.5rem;
  align-self: flex-end;
}
</style>