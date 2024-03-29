import { Home } from '../../models/home.js';

Page({
    data: {
        loadingHidden: false
    },
    onLoad: function () {
        this._loadData();
    },

    /*加载所有数据*/
    _loadData:function(callback){
        var that = this;

        // 获得bannar信息
        Home.getBannerData((data) => {
            that.setData({
                bannerArr: data,
            });
        });

        /*获取主题信息*/
        Home.getThemeData((data) => {
            that.setData({
                themeArr: data,
                loadingHidden: true
            });
        });

        /*获取单品信息*/
        Home.getProductorData((data) => {
            that.setData({
                productsArr: data
            });
            callback&&callback();
        });
    },

    /*跳转到商品详情*/
    onProductsItemTap: function (event) {
        var id = Home.getDataSet(event, 'id');
        wx.navigateTo({
            url: '../product/product?id=' + id
        })
    },

    /*跳转到主题列表*/
    onThemesItemTap: function (event) {
        var id = Home.getDataSet(event, 'id');
        var name = Home.getDataSet(event, 'name');
        wx.navigateTo({
            url: '../theme/theme?id=' + id+'&name='+ name
        })
    },

    /*下拉刷新页面*/
    onPullDownRefresh: function(){
        this._loadData(()=>{
            wx.stopPullDownRefresh()
        });
    },

    //分享效果
    onShareAppMessage: function () {
        return {
            title: '零食商贩 Pretty Vendor',
            path: 'pages/home/home'
        }
    }

})


