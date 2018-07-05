
/**
 * 入参为字符串或者函数
 */
function wxPromise(params) {
  if (typeof (params)=="function"){
    return (oParams = {})=> {
      return new Promise((resolve, reject) => {
        oParams.success = function (res) {
          resolve(res);
        }
        oParams.fail = function (res) {
          //reject(res);
          resolve(res);
        }
        params(oParams);
      });
    }
  }else{
    return new Promise((resolve, reject) => {
      resolve(params);
    });    
  }
};
Promise.prototype.finally = function (callback) {
  let _This=this;
  let P = _This.constructor;
  return _This.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason;})
  );
};

function wxPromiseAll(){
  let aArguments = Array.prototype.slice.call(arguments);
  return Promise.all(aArguments);

}

module.exports = {wxPromise,wxPromiseAll};