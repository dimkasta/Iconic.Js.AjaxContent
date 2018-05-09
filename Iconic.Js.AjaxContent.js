var RemoteContentService = function (url, selector, fallbackContent, errorSelector, errorMessage, callback) {
    if (typeof jQuery === 'undefined') {
        console.error("MAKE SURE JQUERY IS LOADED BEFORE THE CONSENT SCRIPT")
        return false;
    }
    else {
        if ( typeof $().modal !== 'function') {
            console.error("MAKE SURE BOOTSTRAP JS IS LOADED BEFORE THE CONSENT SCRIPT")
            return false;
        }
    }

    return {
        init: function() {
            $.get(url, function (data) {
                $(selector).html(data);
                callback();
            }).error(function(){
                var error = $('<div/>').addClass('alert alert-danger').html(errorMessage);
                $(errorSelector).append(error);
                $(selector).html(fallbackContent);
            });

        }
    };
};