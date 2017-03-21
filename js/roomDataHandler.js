
var roomDataHandler = {

    /*
     * Retrieve room configuration from the server
     */
    getRoomControllers:function(callBackFn) {
        var json = [];
        $.ajax({
            type: 'GET',
            url: "<house-config-url>/house.json",
            dataType:'json',
            success: callBackFn,
            error: function (xhr, ajaxOptions, thrownError) {
                     alert("Could not reach URL: "+url)
              }
        });
        return json;
    },

    /*
     * Update room configuration on the server
     */
    updateRooms:function(newData) {
        console.log("POST");
        $.ajax({
            type: 'POST',
            url: "<house-config-url>/update.json",
            dataType:'json',
            data:newData,
            success: this.onUpdateRoomsSuccess,
            error: function (xhr, ajaxOptions, thrownError) {
                    alert("Could not reach URL: "+url)
              }
        });
    },

    onUpdateRoomsSuccess:function(response){
    	console.log("Update rooms succeeded")
    }
}
