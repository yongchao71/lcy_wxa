// page/components/waterfall/waterfall.js
Component({
  externalClasses: ['water-selected'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    atabhead: {
      type: Array,
      value: ["已预约", "未预约"]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    aList: [
      {
        url: '/public/images/example4.png',
        name: '《星空》',
        des: "11111这是一段描述，挺好的，是一个不错的选中水电费公司发的水电费换个地方规划泛海国际泛海国际销售方广东省分行"
      },
      {
        url: '/public/images/example4.png',
        name: '《星空》',
        des: "22222这是一段描述，挺好的，是一个不错的选中水电费公司发的水电费换个地方规划泛海国际泛海国际销售方广东省分行"
      },
      {
        url: '/public/images/example0.png',
        name: '《虫师》',
        des: "这是一段描述，挺好"
      },
      {
        url: '/public/images/example4.png',
        name: '《星空》',
        des: "33333这是一段描述，挺好的，是一个不错的选中水电费公司发的水电费换个地方规划泛海国际泛海国际销售方广东省分行"
      },
      {
        url: '/public/images/example4.png',
        name: '《星空》',
        des: "44444这是一段描述，挺好的，是一个不错的选中水电费公司发的水电费换个地方规划泛海国际泛海国际销售方广东省分行"
      },
      {
        url: '/public/images/example1.png',
        name: '《loading》',
        des: "这是一段描述，挺好"
      },
      {
        url: '/public/images/example2.png',
        name: '《冰与火之歌》',
        des: "这是一段描述，挺好"
      },
      {
        url: '/public/images/example3.png',
        name: '《鹿丸》',
        des: "这是一段描述，挺好"
      },
      {
        url: '/public/images/example0.png',
        name: '《虫师》',
        des: "这是一段描述，挺好"
      },
      {
        url: '/public/images/example1.png',
        name: '《loading》',
        des: "这是一段描述，挺好"
      },
      {
        url: '/public/images/example2.png',
        name: '《冰与火之歌》',
        des: "这是一段描述，挺好"
      },
      {
        url: '/public/images/example4.png',
        name: '《星空》',
        des: "5555这是一段描述，挺好sfdgsdfh丹砂访葛洪等同于规划局返回键"
      },
      {
        url: '/public/images/example3.png',
        name: '《鹿丸》',
        des: "这是一段描述，挺好，东莞分行待摊费用发"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})


/**************demo****************/

/**
 * 
 * json
 * "usingComponents": {
 *     "water-fall": "/page/components/waterfall/waterfall"
 * 
 * wxml
 * 
 *     <water-fall></water-fall>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


