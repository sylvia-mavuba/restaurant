var loadResult = function(inputValue, callback) {

    var URL = '/api/restaurants';

    $.ajax({
        url: URL,
        type: 'GET',
        data: inputValue,
        success: function(data) {
            console.log(data);
        }
    });
};

module.exports.getRestaurant = loadResult;
