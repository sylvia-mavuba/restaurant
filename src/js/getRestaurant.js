var loadResult = function(inputValue, callback) {

    var URL = '/api/restaurants';

    $.ajax({
        url: URL,
        type: 'GET',
        data: JSON.stringify(inputValue),
        contentType: "application/json; charset=UTF-8",
        success: function(data) {
        
            callback(data);
        }
    });
};

module.exports.getRestaurant = loadResult;
