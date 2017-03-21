/*
 *  Temperature changing
 *
 */


var tempViewer =
{
    
    /*
     * called to create the div that will display the device
     */
    renderContent:function(deviceData,pageID) {
        var deviceID = deviceData.id;
        $div = ($("<div>",{
          'id':"tempcontroller"+deviceID,
          'width':200,
          'height':100
        }));
        var $image = $("<img>", {
          'src':"devices/temp/asset/temp.png",
          'width':75,
          'height':75,
        });
        var $select = $("<select>",{
              'id':deviceID+"temperature",
              
            });
        for (var i = 20; i <= 80; i++){
            $select.append($('<option></option>').val(i).html(i))
        }
        $div.draggable();
        $div.resizable();
        $div.append($image);
        $div.append($select);
        $name = $("<h1>",{
          'text':deviceData.name,
          'font-size':'10px'
        });
        $guide = $("<div>", {
          'text':"Select desired temperature for thermostat"
        })
        $urlName = $("<div>", {
          'text':"Device URL: "+ deviceData.url
          })
        $div.append($name);
        $div.append($guide);
        $div.append($urlName);
        var self = this;
        $select.on('change', function() {
            alert( "Request sent to " + url + " to update temperature to " + this.value );
            deviceDataHandler.makePOST(url+"/update.json", this.value, self.doNothing);
            self.mockUpdate(this.value, deviceData)

        });
        var url = deviceData.url;
        deviceDataHandler.makeGET(url+"/status.json",this.change);
        return $div
    },
        
    /*  
     * Configues temp based response from the microprocessor
     */
    change: function (data) {
        var value = data.value;
        var controllerID = data.id;
        var tempController = "#"+controllerID+"temperature"; 
        $(tempController).val(value); 
    },

    /*
     * Mock update from POST request because there is not real server
     */    
    mockUpdate: function(value, controllerData) {
        var mockResponse = {'id':controllerData.id,'value':value};
        this.change(mockResponse);
    },

    doNothing: function(data) {

    }
    
}