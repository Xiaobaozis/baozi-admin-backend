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
                <el-table :data="tableData" style="height:540px">
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

            <el-card shadow="hover" style="height:360px" >
                <div style="height:350px" ref="echart"></div>
            </el-card>
            <div class="graph">
                <el-card shadow="hover" style="height:310px">
                    <div style="height:300px" ref="echartUser"></div>
                </el-card>
                <el-card shadow="hover" style="height:310px">
                     <div style="height:300px" ref="echartVideo"></div>
                </el-card>
            </div>
        </el-col>
        
    </el-row>
</template>

<script>
//引入css
import "@/assets/scss/home.scss";

import { getHome } from "../../api/data";
import * as echarts from 'echarts'
export default {
    data() {
        return {
            userImg:require('../../assets/images/wy.jpg') ,
            tableData:[],
            tableLabel:{
                name :"课程",
                totalBuy:"今日购买",
                monthBuy:"本月购买",
                totalBuy:"总购买",
            },
            countData:[
                {
                    name:"今日支付订单1",
                    value:1234,
                    icon:'success',
                    color:'#2ec7c9',
                },
                {
                    name:"今日收藏订单2",
                    value:120,
                    icon:'star-on',
                    color:'#ffb980',
                },
                {
                    name:"今日未支付订单1",
                    value:1234,
                    icon:'s-goods',
                    color:'#5ab1ef',
                },
                {
                    name:"今日支付订单2",
                    value:120,
                    icon:'success',
                    color:'#2ec7c9',
                },
                {
                    name:"今日收藏订单1",
                    value:1234,
                    icon:'star-on',
                    color:'#ffb980',
                },
                {
                    name:"今日未支付订单2",
                    value:1234,
                    icon:'s-goods',
                    color:'#5ab1ef',
                },
            ],
            echartsData:{
                order: {
                    legend:{
                        textStyle:{
                        color:"#333"
                        }
                    },
                    grid:{
                        left:"20%"
                    },
                    tooltip:{
                        trigger: "axis"
                    },
                    xAxis:{
                        type:"category",
                        data:[],
                        axisLine:{
                            LineStyle:{
                                color:"#17b3a3"
                            }
                        },
                        axisLable:{
                            interval:0,
                            color:"#333"
                        }      
                    },
                    yAxis:[
                        {
                            type:"value",
                            axisLine:{
                                LineStyle:{
                                    color:"#17b3a3",
                                },
                            }
                        }
                    ],
                    color:["#2ec7c9","#b6a2de","#5ab1ef","#fffb980","#d87a80","#8d98b3"],
                    series:[]
                },
                user:{
                    //图例文字颜色
                    legend:{
                        textStyle:{
                            color:"#333"
                        }
                    },
                    grid:{
                        left:"20%"
                    },
                    tooltip:{
                        trigger:"axis"
                    },
                    xAxis:{
                        type:"category", //类目轴
                        data:[],
                        axisLine:{
                            LineStyle:{
                                color:"#17b3a3"
                            }
                        },
                        axisLable:{
                            interval:0,
                            color:"#333"
                        }
                    },
                    yAxis:[
                        {
                            type:"value",
                            axisLine:{
                                LineStyle:{
                                    color:"#17b3a3"
                                }
                            }
                        }
                    ],
                    color:["#2ec7c9","#b6a2de"],
                    series:[],

                },
                video:{
                    tooltip:{
                        trigger:"item"
                    },
                    color:[
                        "#0f78f4",
                        "#dd536b",
                        "#9462e5",
                        "#a6a6a6",
                        "#e1bb22",
                        "#39c362",
                        "#3ed1cf",
                    ],
                    series:[]
                }
            }   
        } 
    },
    methods:{
      getTableData(){
          getHome().then((res) => {
              console.log(res);
           this.tableData=res.data.tableData  
           
           
           //折线图展示
           const order=res.data.orderData
           console.log(res.data.orderData);
           this.echartsData.order.xAxis.data=order.date
           let keyArray = Object.keys(order.data[0])
           keyArray.forEach((key)=>{
               this.echartsData.order.series.push({
                   name:key,
                   data:order.data.map((item) => item[key]),
                   type:"line"
               })
           })
           const myEcharsOrder = echarts.init(this.$refs.echart)
           myEcharsOrder.setOption(this.echartsData.order)

           //用户图
            this.echartsData.user.xAxis.data = res.data.userData.map((item)=>item.date) 
            
            this.echartsData.user.series.push({
                name:'新增用户',
                data:res.data.userData.map((item)=>item.new),
                type:"bar"
            })
            this.echartsData.user.series.push({
                name:'活跃用户',
                data:res.data.userData.map((item)=>item.active),
                type:"bar"
            })

            const myEcharsUser = echarts.init(this.$refs.echartUser)
            myEcharsUser.setOption(this.echartsData.user)

            //饼状图
            this.echartsData.video.series.push({
                data:res.data.videoData,
                type:"pie",
            })

            const myEcharsVideo = echarts.init(this.$refs.echartVideo)
            myEcharsVideo.setOption(this.echartsData.video)

        })
      }  
    },


    mounted(){
       this.getTableData()
    }
}
</script>

<style lang="scss" scoped>

</style>

