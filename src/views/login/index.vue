<template>
    <div class="icon">
        <van-nav-bar class="page-nav-bar" title="登录" />
        <!-- login表单区 -->
        <van-form>
            <van-cell-group inset>
                <van-field name="用户名" placeholder="请输入手机号">
                    <i slot="left-icon" class="iconfont icon-shouji"></i>
                </van-field>
                <van-field type="password" name="密码" placeholder="请输入验证码">
                    <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
                </van-field>
            </van-cell-group>
            <div class="btn-login">
                <van-button  block type="primary" native-type="submit" >
                    登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
  name: 'loginIndex',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.icon .page-nav-bar {
    background-color: #3692fa;
    color: #fff;
}

.icon i {
    font-size: 37px;
}

.btn-login {
    padding: 33px;
    padding-top: 55px;
}
</style>
