<template>
    <div id="cart">
        <div class="cart_head">
            <div class="cart_line">
                <div class="cart_left">
                    <a href="" v-text="$t('登录')"></a>
                    <span v-text="$t('登录后可同步购物车里的商品')"></span>
                </div>
                <div class="cart_left">
                    <icon-svg icon-class="more1" class="main-icons"></icon-svg>
                </div>
            </div>
        </div>
        <div class="cart_content">
            <img src="../../assets/images/cart.png" alt="">
            <p v-text="$t('您的购物车空空如也，快去装满它')"></p>
            <a href="" v-text="$t('去逛逛')"></a>
        </div>
    </div>
</template>

<i18n>
登录:
  en: Login
登录后可同步购物车里的商品:
  en: Login shopping cart synchronize
您的购物车空空如也，快去装满它:
 en: Your cart is empty. Go and fill up sit
去逛逛:
 en: Go to shopping
</i18n>

<script>
export default {
    data() {
        return {
            title: '购物车'
        }
    }
}
</script>

<style lang="scss">
.cart_head{
    height: 50px;
    box-sizing: border-box;
    background-color:#fff;
    border-bottom: 1px solid #ececec;
    line-height: 25px;
    padding: .6rem .6rem .5rem;
}
.cart_line{
    display: flex;
    justify-content: space-between;
}
.cart_line .cart_left a{
    padding:5px 10px;
    border:1px solid #FF4863;
    color: #FF4863;
    border-radius: 3px;
    font-size: 14px;
}
.cart_line .cart_left span{
    display: inline-block;
    font-size: 14px;
    color: #3d4145;
    width: 200px;
    line-height: 15px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
}
.main-icons{
    color: #3d4145;
}
.cart_content{
    padding: 3rem .5rem;
    text-align: center;
}
.cart_content img{
    width: 160px;
    height: 160px;
}
.cart_content p{
    font-size: 14px;
    margin:30px 0;
}
.cart_content a{
    display: block;
    height: 48px;
    color:#fff;
    border-radius: 5px;
    background: #FF4863;
    line-height: 48px;
}
</style>


