const promisic = function(func) {
    return function(params = {}) {
      return new Promise((resolve, reject) => {
        const args = Object.assign(params, {
          success: (res) => {
            resolve(res);
          },
          fail: (error) => {
            reject(error);
          }
        });
        func(args);
      });
    };
  };
   /*获得元素上的绑定的值*/
   const getDataSet= function(event, key) {
    return event.currentTarget.dataset[key];
};
  export {
    promisic,
    getDataSet
}
 