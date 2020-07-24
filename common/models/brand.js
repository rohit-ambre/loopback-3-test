'use strict';

module.exports = function(Brand) {
  Brand.getOne = function() {
    Brand.findOne({
      where: {
        id: 1,
      },
    }).then(function(LG) {
      console.log(LG);
      return LG;
    }).catch(e => console.log(e));
  };

  // Remote method
  Brand.remoteMethod('getOne', {
    description: 'get LG brand',
    returns: {
      type: 'object',
      root: true,
      // description: '{success: true, msg: "message", data: result}',
    },
    http: {
      verb: 'get',
    },
  });
};
