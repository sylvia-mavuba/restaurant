/*var loadImg = function(inputVal, callback) {
  var API_KEY = '3306654-e899be1c2e611e3eb269e5277' ;
  var URL     = 'restaurant.json';
  debugger
  /*$.ajax({
    url: URL,
    type:'GET'
  })
  .done(function (data) {
    callback(data);
    });*/
    
/*ajax({
        url: URL,
        type:'GET',
        data: inputVal,
        beforeSend: function () {
            debugger
            $('.loader').show();

        },
        success: function (data) {
            //$('.loader').hide();
          callback(data);
        }
    });
}*/

var mongoose = require('mongoose');

var Areas = mongoose.model('Areas', {
  var loadImg = function(inputVal, callback) {
    var URL     = 'restaurant.json';
    debugger
    /*$.ajax({
      url: URL,
      type:'GET'
    })
    .done(function (data) {
      callback(data);
      });*/
      
      $.ajax({
          url: URL,
          type:'GET',
          data: inputVal,
          beforeSend: function () {
              debugger
              $('.loader').show();

          },
          success: function (data) {
              //$('.loader').hide();
            callback(data);
          }
      });
  }
});

module.export.Areas = Areas;