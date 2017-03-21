/*
 *  Light on/off device
 *
 */


var lightViewer =
{

    /*  
     * called to create the div that will display the device
     */
    renderContent:function(deviceData, pageID) {
        var deviceID = deviceData.id;
        $div = ($("<div>",{
          'id':"lightswitch"+deviceID,

        }))
        $onSwitcher = $("<a>",{
              'id':deviceID+"-switch-on",
              'href':"#",
              'rel':"external",
            }).append(
                $("<img>",{
                  'src':"devices/light/asset/lighton.png",
                  'width':75,
                  'height':75,
                  'alt':"Switch light"
                })
            )
        
        $offSwitcher = $("<a>",{
              'id':deviceID+"-switch-off",
              'href':"#",
              'rel':"external",
              }).append(
                $("<img>",{
                  'src':"devices/light/asset/lightoff.png",
                  'width':80,
                  'height':100,
                  'alt':"Switch light"
                })
              )
        $div.append($onSwitcher)
        $div.append($offSwitcher)
        $div.draggable();
        $div.resizable();
        $name = $("<h1>",{
          'text':deviceData.name,
          'font-size':'10px'
        });
        $urlName = $("<div>", {
          'text':"Device URL: "+deviceData.url
          })
        $guide = $("<div>", {
          'text':"Press bulb to toggle light"
          })
        $div.append($name);
        $div.append($guide);
        $div.append($urlName);
        $offSwitcher.hide();
        $onSwitcher.show();   
        var url = deviceData.url;
        var self = this;
        deviceDataHandler.makeGET(url+"/status.json",this.change);
        $onSwitcher.click(function (e) {
            alert( "Request sent to " + url + " to turn light off" );
            deviceDataHandler.makePOST(url+"/update.json", 1, self.doNothing);
            self.mockUpdate(0, deviceData);
        });
        $offSwitcher.click(function (e) {
            alert( "Request sent to " + url + " to turn light on" );
            deviceDataHandler.makePOST(url+"/update.json", 0, self.doNothing);
            self.mockUpdate(1, deviceData);

        });
        return $div
    },
    
    
    /*  Configues light to be on or off based on the response from the device
     */
    change: function (data) {
        var value = data.value;
        var deviceID = data.id;
        var $onSwitcher = $("#"+deviceID+"-switch-on");
        var $offSwitcher = $("#"+deviceID+"-switch-off");
        if(value == 1) {
            $offSwitcher.hide();
            $onSwitcher.show();
        }
        if (value == 0) {
            $onSwitcher.hide();
            $offSwitcher.show();
        }
    },

    /*
     * Mock update from POST request because there is not real server
     */
    mockUpdate: function(value, deviceData) {
        var mockResponse = {'id':deviceData.id,'value':value};

        this.change(mockResponse);
    },

    doNothing: function(data) {

    }
    
}