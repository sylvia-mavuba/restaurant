var loadResult = function(inputValue, callback) {

    var URL = '/api/restaurants';

    $.ajax({
        url: URL,
        type: 'GET',
        data: inputValue,
        success: function(data) {
        
            callback(data);
        }
    });
};

module.exports.getRestaurant = loadResult;
