
var roomDataHandler = {

    /*
     * Retrieve room configuration from the server
     */
    getRoomControllers:function(callBackFn) {
        var json = [];
        $.ajax({
            type: 'GET',
            url: "server/house.json",
            dataType:'json',
            success: callBackFn,
            error: function (xhr, ajaxOptions, thrownError) {
                    //alert(xhr.status);
                    alert(thrownError);
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
            url: "server/update.json",
            dataType:'json',
            data:newData,
            success: this.onUpdateRoomsSuccess,
            error: function (xhr, ajaxOptions, thrownError) {
                    alert("Could not reach server");
              }
        });
    },

    onUpdateRoomsSuccess:function(response){
    	console.log("Update rooms succeeded")
    }
}
