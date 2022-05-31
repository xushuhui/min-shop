// var productObj = require('product-model.js');

import {Product} from '../../models/product.js';
import {Cart} from '../../models/cart.js';
import {
    getDataSet
} from "../../utils/util"

Page({
    data: {
        loadingHidden:false,
        hiddenSmallImg:true,
        countsArray:[1,2,3,4,5,6,7,8,9,10],
        productCounts:1,
        currentTabsIndex:0,
        cartTotalCounts:0,
    },
    async onLoad (option) {
        var id = option.id;
        this.data.id=id;
        this._loadData();
    },

    /*加载所有数据*/
    async _loadData(){
       
       product= Product.getDetailInfo(this.data.id);
        this.setData({
            cartTotalCounts:Cart.getCartTotalCounts().counts1,
            product:product,
            loadingHidden:true
        });
    },

    //选择购买数目
    async bindPickerChange(e) {
        this.setData({
            productCounts: this.data.countsArray[e.detail.value],
        })
    },

    //切换详情面板
    async onTabsItemTap(event){
        var index=getDataSet(event,'index');
        this.setData({
            currentTabsIndex:index
        });
    },

    /*添加到购物车*/
    async onAddingToCartTap(events){
        //防止快速点击
        if(this.data.isFly){
            return;
        }
        this._flyToCartEffect(events);
        this.addToCart();
    },

    /*将商品数据添加到内存中*/
    async addToCart(){
        var tempObj={},keys=['id','name','main_img_url','price'];
        for(var key in this.data.product){
            if(keys.indexOf(key)>=0){
                tempObj[key]=this.data.product[key];
            }
        }

        cart.add(tempObj,this.data.productCounts);
    },

    /*加入购物车动效*/
    async _flyToCartEffect(){
        //获得当前点击的位置，距离可视区域左上角
        var touches=events.touches[0];
        var diff={
                x:'25px',
                y:25-touches.clientY+'px'
            },
            style='display: block;-webkit-transform:translate('+diff.x+','+diff.y+') rotate(350deg) scale(0)';  //移动距离
        this.setData({
            isFly:true,
            translateStyle:style
        });
        var that=this;
        setTimeout(()=>{
            that.setData({
                isFly:false,
                translateStyle:'-webkit-transform: none;',  //恢复到最初状态
                isShake:true,
            });
            setTimeout(()=>{
                var counts=that.data.cartTotalCounts+that.data.productCounts;
                that.setData({
                    isShake:false,
                    cartTotalCounts:counts
                });
            },200);
        },1000);
    },

    /*跳转到购物车*/
    async onCartTap(){
        wx.switchTab({
            url: '/pages/cart/cart'
        });
    },

    /*下拉刷新页面*/
    async onPullDownRefresh(){
        this._loadData(()=>{
            wx.stopPullDownRefresh()
        });
    },

    //分享效果
    async onShareAppMessage () {
        return {
            title: '零食商贩 Pretty Vendor',
            path: 'pages/product/product?id=' + this.data.id
        }
    }

})


