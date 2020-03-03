<template lang="pug">
    .login__wrap
        form(@submit.prevent="login").login__content-block
          h2.login__title Авторизация
          label.login__label Логин
            .login__input-block
              .login__ico.login__ico--login
              input(v-model="user.name").login__input
          label.login__label Пароль
            .login__input-block
              .login__ico.login__ico--password
              input(v-model="user.password" type="password").login__input
          button(type="submit").login__btn отправить
</template>

<script>
import $axios from "../requests";

export default {
  data() {
    return {
      user: {
        name: "EgorovIvan",
        password: "7773900"
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await $axios.post("/login", this.user);
        const token = response.data.token;

        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.push("/");
      } catch (error) {
        console.log(error.response);
        //ошибка логин
      }
    }
  }
};
</script>

<style lang="postcss">
.login__title {
  font-size: 36px;
  font-weight: 600;
  text-align: left;
  color: #414c63;
}

.login__wrap {
  background-color: rgb(233, 233, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.login__content-block {
  background-color: #fff;
  padding: 50px 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login__btn {
  text-transform: uppercase;
  width: 300px;
  height: 80px;
  margin-top: 40px;
  border-radius: 40px 5px;
  background-color: #fff;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  background-image: linear-gradient(90deg, #ad00ed, #5500f2);
}
.login__label {
  margin-top: 30px;
  width: 100%;
  border-bottom: 1px solid #000;
  position: relative;
  padding-bottom: 10px;
}

.login__input-block {
  display: flex;
}

.login__input {
  margin-left: 20px;
  display: block;
  width: 80%;
  border: none;
  padding: 0;
}

.login__ico {
}

.login__ico--login {
  width: 26px;
  height: 30px;
  background: svg-load("user.svg", fill=#000, width=100%, height=100%) 0 100% /
    contain no-repeat;
}

.login__ico--password {
  width: 27px;
  height: 28px;
  background: svg-load("key.svg", fill=#000, width=100%, height=100%) 0 100% /
    contain no-repeat;
}
</style>