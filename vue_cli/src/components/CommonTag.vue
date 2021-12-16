<template>
  <div class="tabs">
    <el-tag 
    v-for="tag in tags" 
    :key="tag.name"
    size="small"
    :closable="tag.name !== 'home'"
    :effect =
    "$router.name ===tag.name ? 'dark' : 'plain'"

    >
        {{tag.label}} 
    </el-tag>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
       ...mapState({           
            tags:(state) =>state.tab.tabsList
        }),
    }
}
</script>

<style lang="scss">
   .tabs{
       padding: 20px;
        .el-tag{
            margin-right: 15px;
            cursor:pointer
        }
   }
</style>>

