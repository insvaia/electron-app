<template>
  <div class="login">
    <!-- 左侧 -->
    <div class="login_adv">
      <div class="login_adv__title">
        <h2>星雨眠</h2>
        <h4>客户管理系统</h4>
        <p>让业务关系更高效，加速企业数字化升级</p>
      </div>
      <div class="login_mask"></div>
      <div class="login_adv__image">
        <img src="../assets/images/data.png" width="100%" alt="" />
      </div>
      <div class="login_adv__bottom">© 星雨眠客户管理系统 1.0.11</div>
    </div>
    <!-- 右侧 -->
    <div class="login_main">
      <div class="login_form">
        <div class="login_header">
          <div class="login_img">
            <img src="../assets/images/logo.png" alt="Logo" />
            <label>星雨眠客户管理系统</label>
          </div>
        </div>
        <el-tabs>
          <el-tab-pane label="账号登录" name="login" lazy style="height: 300px">
            <passwordForm />
          </el-tab-pane>
          <el-tab-pane label="手机号登录" name="phone" lazy style="height: 300px">
            <PhoneForm />
          </el-tab-pane>
        </el-tabs>
        <template v-if="true">
          <el-divider>其他登录方式</el-divider>
          <div class="login_oauth">
            <!--微信按钮-->
            <el-button type="success" circle size="large">
              <el-icon size="large">
                <ChatDotRound />
              </el-icon>
            </el-button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import passwordForm from '@views/login/components/passwordForm.vue'
import PhoneForm from './login/components/PhoneForm.vue'
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  .login_adv {
    background: url('../assets/images/auth_banner.jpg') no-repeat;
    width: 40%;
    position: relative;
    .login_adv__title {
      color: #fff;
      padding: 40px;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      z-index: 2;
      h2 {
        font-size: 40px;
      }
      h4 {
        font-size: 18px;
        margin-top: 10px;
        font-weight: normal;
      }

      p {
        font-size: 14px;
        margin-top: 10px;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    .login_adv__image {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 80px;
      padding: 40px;
      z-index: 3;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login_adv__bottom {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      color: #fff;
      padding: 0 40px 40px 40px;
      background-image: linear-gradient(transparent, #000);
      z-index: 3;
    }
    .login_adv__mask {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  }
  .login_main {
    flex: 1;
    display: flex;
    overflow: auto;
    .login_form {
      width: 400px;
      margin: auto;
      padding: 80px 0 0 0;
      .login_header {
        margin-bottom: 40px;
        .login_img {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            vertical-align: bottom;
            margin-right: 10px;
          }
          label {
            font-size: 26px;
            font-weight: bold;
          }
        }
      }
    }
    .login_oauth {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
