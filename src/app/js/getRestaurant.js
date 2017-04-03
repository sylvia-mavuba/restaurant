var loadResult = function(inputValue, resp) {

    var URL = '/api/restaurants';

    $.ajax({
        url: URL,
        type: 'GET',
        data: JSON.stringify(inputValue),
        contentType: "application/json; charset=UTF-8",
        success: function(data) {
        
            resp(data);
        }
    });
};

module.exports.getRestaurant = loadResult;
