/**
 * 格式化时间
 */
const formatTime = function (date, formater) {
  formater = formater || "yyyy-MM-dd hh:mm:ss";
  date = date || new Date().valueOf();
  date = new Date(date);
  let year = date.getFullYear();
  let month = formatNumber(date.getMonth() + 1);
  let day = formatNumber(date.getDate());
  let hour = formatNumber(date.getHours());
  let minute = formatNumber(date.getMinutes());
  let second = formatNumber(date.getSeconds());
  return formater.replace("yyyy", year).replace("MM", month).replace("dd", day).replace("hh", hour).replace("mm", minute).replace("ss", second);
}
/**
 * 时间转字符串
 */
const str2Date = function (dateStr) {
  if (!dateStr) {
    return "";
  }
  // var arr = "2016-11-11 11:11:11".split(/[-:\s+\/]/);
  let arrDate = dateStr.split(/[-:\s+\/]/);
  let resultDate = new Date(arrDate[0], arrDate[1] - 1, arrDate[2], arrDate[3] || "00", arrDate[4] || "00", arrDate[5] || "00");
  return resultDate;
};
const formatNumber = function (n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}


// 显示繁忙提示
const showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 4000
});

// 显示成功提示
const showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
});

// 显示失败提示
const showModel = (title, content) => {
  wx.hideToast();
  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  });
};
let timeoutPromise=(second)=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(); }, second);
  });
}

module.exports = { formatTime, showBusy, showSuccess, showModel, timeoutPromise }
