Page({
  data: {
    category: [
      { name: '眼部整形', id: 'yan' },
      { name: '鼻部整形', id: 'bi' },
      { name: '面部轮廓', id: 'mian' },
      { name: '唇部整形', id: 'chun' },
      { name: '胸部整形', id: 'xiong' },
      { name: '美体塑形', id: 'mei' }
    ],
    detail: [
      {
        "id": "yan",
        "banner": "/public/images/video.png",
        "cate": "眼部整形",
        "detail": [
          {
            "thumb": "/public/images/video.png",
            "name": "开内眼角"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "开外眼角"
          },
 
          {
            "thumb": "/public/images/video.png",
            "name": "定点双眼皮"
          }
        ]
      },
      {
        "id": "bi",
        "banner": "/public/images/video.png",
        "cate": "鼻部整形",
        "detail": [
          {
            "thumb": "/public/images/video.png",
            "name": "膨体隆鼻"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "硅胶隆鼻"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "玻尿酸隆鼻"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "手术缩鼻头"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "埋线双眼皮"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "切开双眼皮"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "鼻综合"
          }
        ]
      }, {
        "id": "mian",
        "banner": "/public/images/video.png",
        "cate": "面部轮廓",
        "detail": [
          {
            "thumb": "/public/images/video.png",
            "name": "假体丰额头"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "额头缩小"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "硅胶垫下巴"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "下巴截骨术"
          }
        ]
      }, {
        "id": "chun",
        "banner": "/public/images/video.png",
        "cate": "唇部整形",
        "detail": [
          {
            "thumb": "/public/images/video.png",
            "name": "厚唇改薄"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "嘴角上扬术"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "唇部修复"
          }, 
          {
            "thumb": "/public/images/video.png",
            "name": "M唇手术"
          }
        ]
      }, {
        "id": "xiong",
        "banner": "/public/images/video.png",
        "cate": "胸部整形",
        "detail": [
          {
            "thumb": "/public/images/video.png",
            "name": "假体隆胸"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "自体脂肪隆胸"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "吸脂去副乳"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "乳晕缩小"
          }
        ]
      }, {
        "id": "mei",
        "banner": "/public/images/video.png",
        "cate": "美体塑形",
        "detail": [
          {
            "thumb": "/public/images/video.png",
            "name": "假体丰臀"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "优立塑"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "吸脂瘦腹部"
          },
          {
            "thumb": "/public/images/video.png",
            "name": "背部吸脂"
          }
        ]
      }
    ],
    curIndex: 0,
    isScroll: true,
    toView: 'yan'
  },
  onReady() {
     let _This=this;
     wx.getSystemInfo({
       success: function (res) {
           console.log("get sys info---------",res);
           let windowHeight = res.windowHeight;
           _This.setData({
             windowHeight:windowHeight,
             iBottom: (80-windowHeight)
           });
       }
     })
    //{ bottom:-500, top:0 }
  for(let i=0;i<6;i++){
    wx.createIntersectionObserver().relativeToViewport({ bottom: _This.data.iBottom}).observe(`.cate-item-${i}`, (res) => {
      if (res.intersectionRatio>0){
            _This.setData({
              curIndex:i
            });
      }
     })

  }


  },
  switchTab(e) {
    const _This = this;
    _This.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })

  },
  fBindToLower(e){
    let _This=this;
    let { detail, curIndex}=_This.data;
    let aLength = detail.length;
     if (curIndex != aLength){
       _This.setData({
         curIndex: 5
       });
     }
    //   console.log("e-----------bindscroll-------------",e.detail.scrollTop);
  }

})