<template>
    <el-row class="home" :getter="20"> 
        <!-- 左侧 -->
        <el-col :span="8" style="margin-top:20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg" />
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2021.12.1</span></p>
                    <p>上次登录地点：<span>大连</span></p>
                </div>
            </el-card>

            <el-card style=" margin-top:20px" >
                <el-table :data="tableData" style="height:520px">
                    <el-table-column
                        show-overflow-tooltip 
                        v-for="(val,key) in tableLabel"
                        :key="key"
                        :prop="key"
                        :label="val"
                    >
                    </el-table-column>
                </el-table>
            </el-card>   
        </el-col>

        <!-- 右侧 -->
        <el-col :span="16" style="margin-top:20px">
            <div class="num">
                <el-card 
                    shadow="hover" 
                    v-for="item in countData" 
                    :key="item.name" 
                    :body-style="{display:'flex',padding:0}" 
                >
                    <i class="icon" 
                        :class="`el-icon-${item.icon}`" 
                        :style="{ background: item.color }"
                    ></i>
                    <div class="detail">
                        <p class="num">￥{{item.value}}</p>
                         <p class="txt">￥{{item.name}}</p>
                    </div>
                </el-card>
            </div>

            <el-card shadow="hover" style="height:350px"></el-card>
            <div class="graph">
                <el-card shadow="hover" style="height:300px"></el-card>
                <el-card shadow="hover" style="height:300px"></el-card>
            </div>
        </el-col>
        
    </el-row>
</template>

<script>
import "@/assets/scss/home.scss";
export default {
    data() {
        return {
          userImg:require('../../assets/images/wy.jpg') ,
          tableData:[
                {
                    name:"oppo",
                    todayBuy:100,
                    monthBuy:300,
                    totalBuy:800,
                },
                {
                    name:"vivo",
                    todayBuy:100,
                    monthBuy:300,
                    totalBuy:800,
                },
                {
                    name:"苹果",
                    todayBuy:100,
                    monthBuy:300,
                    totalBuy:800,
                },
                {
                    name:"华为",
                    todayBuy:100,
                    monthBuy:300,
                    totalBuy:800,
                },
                {
                    name:"小米",
                    todayBuy:100,
                    monthBuy:300,
                    totalBuy:800,
                },
                {
                    name:"三星",
                    todayBuy:100,
                    monthBuy:300,
                    totalBuy:800,
                },
                {
                    name:"魅族",
                    todayBuy:100,
                    monthBuy:300,
                    totalBuy:800,
                },          
            ],
            tableLabel:{
                name :"课程",
                totalBuy:"今日购买",
                monthBuy:"本月购买",
                totalBuy:"总购买",
            },
            countData:[
                {
                    name:"今日支付订单",
                    value:1234,
                    icon:'success',
                    color:'#2ec7c9',
                },
                {
                    name:"今日收藏订单",
                    value:120,
                    icon:'star-on',
                    color:'#ffb980',
                },
                {
                    name:"今日未支付订单",
                    value:1234,
                    icon:'s-goods',
                    color:'#5ab1ef',
                },
                {
                    name:"今日支付订单",
                    value:120,
                    icon:'success',
                    color:'#2ec7c9',
                },
                {
                    name:"今日收藏订单",
                    value:1234,
                    icon:'star-on',
                    color:'#ffb980',
                },
                {
                    name:"今日未支付订单",
                    value:1234,
                    icon:'s-goods',
                    color:'#5ab1ef',
                },
            ]
        }
    },
    mounted(){
        this.$http
            .get('/user?ID=12345')
        .then(function (response) {    
            console.log(response);
        })
        .catch(function (error) {
             console.log(error);
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

