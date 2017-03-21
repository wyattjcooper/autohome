/* 
 * Handles server communication for devices
 */ 

var deviceDataHandler = {
    
    /*  
     * Make a POST request to the device to update its status
     */
    makePOST: function(url,value, callBackFn) {

        $.ajax({
            type: 'POST',
            url: url,
            dataType:'json',
            data:value,
            success: callBackFn,
            error: function (xhr, ajaxOptions, thrownError) {
                    //alert(xhr.status);
                    alert("Could not reach the URL:" +url);
              }
        });
    },

    /*  Make a GET request to the device to check its status
     */
    makeGET: function(url, callBackFn) {
        //var url = controllerData.url + "/status.json"
        $.ajax({
            type: 'GET',
            url: url,
            dataType:'json',
            success: callBackFn,
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Could not reach the URL: "+url + " .This may be because the user has not configured the server for the device yet.");

              }
        });
    }
};


