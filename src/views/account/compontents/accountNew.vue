<template>
    <div>  
        <div>
            <group>
            <cell title="我的订单" value="查看全部订单" is-link></cell>
            </group>
        </div>
        <div>
            <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="vux-1px-l vux-1px-r">
                <icon-svg icon-class="money" class="main-icons"></icon-svg>
                <br/>
                <a href="" class="t_size">待付款</a>
                </div>
                <div class="vux-1px-r">
                <icon-svg icon-class="che" class="main-icons"></icon-svg>   
                <br/>
                <a href="" class="t_size">待收货</a> 
                </div>
                <div class="vux-1px-r">
                <icon-svg icon-class="accomplish" class="main-icons"></icon-svg>    
                <br/>
                <a href="" class="t_size">已完成</a> 
                </div>
                <div class="vux-1px-r">
                <icon-svg icon-class="qian" class="main-icons"></icon-svg>  
                <br/>
                <a href="" class="t_size">退款/退货</a>
                </div>
            </div>
        </div>
        <div>
            <group>
            <cell title="我的活动" ></cell>
            </group>
        </div>
        <div>
            <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="vux-1px-l vux-1px-r">
                <icon-svg icon-class="pixelsa" class="main-icons"></icon-svg>
                    
                <br/>
                <a href="" class="t_size">活动详情</a> 
                </div>
                <div class="vux-1px-r">
                <icon-svg icon-class="handshake" class="main-icons"></icon-svg>
                    
                <br/>
                    <a href="" class="t_size">查看盟友</a>
                </div>
                <div class="vux-1px-r">
                <icon-svg icon-class="xing" class="main-icons"></icon-svg>
                    
                <br/>
                <a href="" class="t_size">积分</a>
                </div>
            </div>
        </div>
        <div>
            <group>
            <cell title="我的任务" ></cell>
            </group>
        </div>
        <div>
            <div slot="content" class="card-demo-flex card-demo-content01" style="margin-left:1rem;">
                <div class="vux-1px-l vux-1px-r" style="position:relative;right:9rem">
                <icon-svg icon-class="hearts" class="main-icons"></icon-svg>
                <br/>
                
                <a href="" class="t_size">愿望清单</a>

                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
 import { Group, Cell, CellBox } from 'vux'
 export default {
    components: {
        Group,
        Cell,
        CellBox
    }
 }
 </script>
 <style scoped>
 
 </style>

