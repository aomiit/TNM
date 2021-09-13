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
      { id: 1, url: '../lung/index', caption: '肺癌', collected: false },
      { id: 2, url: '../thyroid/index', caption: '甲状腺肿瘤', collected: false },
      { id: 3, url: '../liver/index', caption: '肝癌', collected: false },
      { id: 4, url: '../icc/index', caption: '肝内胆管细胞癌', collected: false },
      { id: 5, url: '../pancreas/index', caption: '胰腺癌', collected: false },
      { id: 6, url: '../colorectal/index', caption: '结直肠癌', collected: false },
      { id: 7, url: '../cervical/index', caption: '宫颈肿瘤', collected: false },
      { id: 8, url: '../npc/index', caption: '鼻咽癌', collected: false },
      { id: 9, url: '../nasal/index', caption: '鼻腔和鼻窦肿瘤', collected: false },
      { id: 10, url: '../hpvp16/index', caption: 'HPV相关性(P16+)口咽癌', collected: false },
      { id: 11, url: '../stomach/index', caption: '胃癌', collected: false },	  
      { id: 12, url: '../SmallIntestine/index', caption: '小肠癌', collected: false },     
      { id: 13, url: '../vaginal/index', caption: '阴道癌', collected: false },     
      { id: 14, url: '../vulva/index', caption: '外阴癌', collected: false },     
      { id: 15, url: '../uteri/index', caption: '子宫体肿瘤', collected: false },     
      { id: 16, url: '../ovary/index', caption: '卵巢、输卵管肿瘤和原发性腹膜癌', collected: false },
      { id: 17, url: '../trophoblastic/index', caption: '滋养叶细胞肿瘤', collected: false },
      { id: 18, url: '../penis/index', caption: '阴茎癌', collected: false },
      { id: 19, url: '../kidney/index', caption: '肾肿瘤', collected: false },
      { id: 20, url: '../renal/index', caption: '肾盂和输尿管癌', collected: false },
      { id: 21, url: '../bladder/index', caption: '膀胱癌', collected: false },
      { id: 22, url: '../urethra/index', caption: '尿道癌', collected: false },
      { id: 23, url: '../pancreasneuro/index', caption: '胰腺神经内分泌肿瘤', collected: false },
      { id: 24, url: '../gastricneuro/index', caption: '胃神经内分泌肿瘤', collected: false },
      { id: 25, url: '../duodenumneuro/index', caption: '十二指肠和Vater壶腹神经内分泌肿瘤', collected: false },
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
        //console.log('程序配置项', res);
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