<script setup lang="ts">
</script>

<template>
  <div class="login">
    <div class="login_form">
      <el-form ref="ruleFormRef">
        <el-form-item label="Password" prop="pass">
          <el-input type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Age" prop="age">
          <el-input />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
