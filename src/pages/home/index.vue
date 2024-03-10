<script setup lang="ts">

import { useRouter } from 'vue-router'
import { RoutePaths } from '@/router/RoutePaths';

const router = useRouter()

const link = () => {
  router.push(RoutePaths.login)
}
</script>

<template>
  <div>home page</div>
  <el-button type="primary" @click="link">跳登陆</el-button>
</template>


<style scoped></style>
