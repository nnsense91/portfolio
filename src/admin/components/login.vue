<template lang="pug">
    .login__wrap
        .login__content-block
            h2.login__title Авторизация
            label.login__label
                input.login__input
            label.login__label
                input.login__input
</template>

<style lang="postcss">
.login__wrap {
  display: flex;
  justify-content: center;
}

.login__content-block {
  display: flex;
  flex-direction: column;
}
</style>