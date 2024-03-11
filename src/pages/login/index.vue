<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance } from 'element-plus'
import { User, Key, Hide, View } from '@element-plus/icons-vue'
import logoicon from '@/assets/login_bg.png'
import { validateHeaderValue } from 'http';

const isShow = ref(false)
const psdType = ref('password')
const ruleFormRef = ref<FormInstance>()

const formData = reactive({
  phone: '',
  psd: '',
  code: '',
})

const handleShow = () => {
  isShow.value = !isShow.value
  psdType.value = isShow.value ? 'text' : 'password'
}
 
const submitForm = (formEl: FormInstance | undefined) => {

  if (!formEl) return

  formEl.validate((valid) => {
    debugger
    if (valid) {
      console.log(formData)
    } else {
      console.log('error submit!')
      return false
    }
  })

}
</script>

<template>
  <div class="login">
    <div class="login_form_box">
      <div class="login_content">
        <h1 class="login_title">机组疲劳实时监测和预警系统</h1>
        <el-form ref="ruleFormRef" :model="formData" class="login_form">
          <el-form-item :rules="[
          { required: true, message: 'qing ' },
          { type: 'number', message: 'age must be a number' },
        ]">
            <el-input type="text" v-model="formData.phone" autocomplete="off" maxlength="11" :prefix-icon="User" />
          </el-form-item>
          <el-form-item>
            <el-input :type="psdType" v-model="formData.psd" autocomplete="off" :prefix-icon="Key">
              <!-- !!! -->
              <template v-slot:suffix>
                <el-icon @click="handleShow">
                  <View v-if="isShow" />
                  <Hide v-else />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <div class="code_box">
            <el-form-item class="code_input">
              <el-input type="text" v-model="formData.code" />
            </el-form-item>
            <img class="code_icon" :src="logoicon" alt="">
          </div>
          <div class="btns">
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  height: 100%;
  background-image: url('../../assets/login_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1000px;

  .login_form_box {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(71, 132, 245, 0.43) 0px 8px 18px 0px;
    padding: 50px 80px;
  }

  .login_content {
    border: 1px solid #e5e5ee;
    border-radius: 10px;
    padding: 30px;

    .login_title {
      text-align: center;
      font-size: 30px;
      padding: 10px 0 30px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .login_form {
      .code_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .code_input {
        flex-grow: 1;
      }

      .code_icon {
        margin-top: -20px;
        margin-left: 16px;
        width: 100px;
        height: 32px;
      }

      .btns {
        padding: 0 32px;

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
