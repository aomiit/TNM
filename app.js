var qcloud = require('./vendor/wxapp-client-sdk/index');
var config = require('./etc/config');
App({
  globalData: {
    bannerList: null,
    areaList:null,
    userInfo:null,
    linkList:null,
    indexArea:{hname:'',hprice:''},    

    objectArray: [
      { id: 1, url: '../lung/index', caption: '肺癌分期工具', collected: false },
      { id: 2, url: '../thyroid/index', caption: '甲状腺肿瘤分期工具', collected: false },
      { id: 3, url: '../liver/index', caption: '肝癌分期工具', collected: false },
      { id: 4, url: '../pancreas/index', caption: '胰腺癌分期工具', collected: false },
      { id: 5, url: '../colorectal/index', caption: '结直肠癌分期工具', collected: false },
      { id: 6, url: '../cervical/index', caption: '宫颈肿瘤分期工具', collected: false },
      { id: 7, url: '../npc/index', caption: '鼻咽癌分期工具', collected: false },
      { id: 8, url: '../stomach/index', caption: '胃癌分期工具', collected: false }      
            
    ]
  },

  onLaunch() {
    qcloud.setLoginUrl(config.service.loginUrl);
    this.getConfig();

    var postsCollected = wx.getStorageSync('posts_Collected')
    if (postsCollected) {
      if (postsCollected.length == this.globalData.objectArray.length) {

        this.globalData.objectArray = postsCollected

        //console.log(this.globalData.objectArray);
      }
      else {
        for (var i = 0; i < postsCollected.length; i++) {
          let currentIndex = this.globalData.objectArray.findIndex(item => item.id == postsCollected[i].id)
          this.globalData.objectArray[currentIndex].collected = postsCollected[i].collected;
        }

        wx.setStorageSync('posts_Collected', this.globalData.objectArray);
      }
    }
    else {
      wx.setStorageSync('posts_Collected', this.globalData.objectArray);
    }
    
  },
  getAppConfig: function(fn,bool) {
    var that = this;
    if(that.globalData.bannerList && that.globalData.linkList && !bool){
      typeof fn == "function" && fn(that.globalData)
    }else{
      that.getConfig(function(data){
        typeof fn == "function" && fn(data);
      });
    }
  },
  getConfig: function (fn) {
    var that = this;
    qcloud.request({
      url: config.service.configUrl,
      method: 'POST',
      login: true,
      success(res){
        console.log('程序配置项', res);
        let data=res.data.data;
        if (res.data.success) {
          that.globalData.bannerList=data.banner;
          that.globalData.areaList=data.areaList;
          that.globalData.userInfo=data.userInfo;
          that.globalData.linkList=data.linkList;
          typeof fn == "function" && fn(that.globalData);
        }
      }
    });
  },
});