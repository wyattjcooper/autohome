# Home Automation Controller Web Application

Developed by Wyatt Cooper

Try it out at https://wyattjcooper.github.io/autohome/

# Functionality:

Define and add rooms where your devices reside

Add devices identified by rooms (or areas).

Send controls to the devices (on/off, set temperature, etc.)

In this sample app there are two devices defined, 
a lamp or light, with on/off control
a thermostat, with digital temperature control

# How to use the application:

Bedroom and LivingRoom are pre-defined rooms for a house.  These are displayed in the tabs in the bottom section of the page.  The highlighted tab is active and displays the controllable devices in that room.   
The app is written to support two device types, a ‘Lamp’ and a ‘Thermostat’.  The code can be easily leveraged to add and support additional devices.   
The bedroom has a predefined ‘Desk Lamp’ device, and the LivingRoom has a predefined ‘Thermostat’ device.   

In the tab line there is a ‘+’ symbol.  Click on the ‘+’ to add a new room.   

The new room will now display as a new tab at the bottom of the page.

You can add a new device in any room by clicking on either the Add Lamp icon or the Add Thermostat icon.  For example, To add a new thermostat device in the new room, click the  button.

Then add a name for the thermostat, and add its URL locator name.  

(Note that the URLs are mocked for this sample code as the devices don’t actually exist. URL errors will display when the code makes a call to this URL).  

A Thermostat control display is then created.          

Change the temperature using the drop down list.

When a new temperature is selected, the thermostat temperature is changed and a confirmation message is sent.

The thermostat temperature now shows the new temperature that has been sent to the (mocked) device at the URL that was given upon creation.  

# JSON format used to render the house 
The "house-config-url" folder contains the following JSON document that specifies the house configuration:
```javascript
{
    "rooms": [{
        "name": "Bedroom",
        "id": "Bedroom1",
        "devices": [{
            "name": "Desk Lamp",
            "type": "Light",
            "id": "light_11",
            "url": ""
        }]
    }, {
        "name": "LivingRoom",
        "id": "LivingRoom2",
        "devices": [{
            "name": "Thermostat",
            "type": "Thermostat",
            "id": "temp_21",
            "url": ""
        }]
    }],
    "deviceTypes": [{
        "name": "Light",
        "type": "Light",
        "img": "devices/light/asset/lighton.png"
    }, {
        "name": "Thermostat",
        "type": "Thermostat",
        "img": "devices/temp/asset/temp.png"
    }]
}
```

# Coding the display for a new device

A new device can be created by making a variable that implements the following functions (specified in the devices/devicePrototype.js file.  The deviceConstructor function in this file will construct the device):
	
	renderContent : returns a div rendering the content of the device, takes in the JSON data specifying the device and a pageID
	this.change : reacts to changes to the devices controller. For instance, this can be used as a callback function for a POST request made to the device's URL
	this.mockUpdate : mock update because the device does not reach a real HTTP server

 The JSON data encoding the device must include the following properties: 
 
 ```javascript
 {
	"value":"value of some data that is used to display the status of the device"
	"id":"unique identifier of the device"
	"name":"name of the device"
	"url": "URL where the device can be reached via http requests"
}
 ```
 The device must be added to the "deviceTypes" data in the house.json file.  This must include name, type, and img to display the icon of the device on the "Add Devices" bar on the top of the screen.
 
 In addition, there is a dictionary in js/createpage.js that maps the device variable to the name given to the 'type' property for the device in the house.json file. 

# References 

Light bulb on: http://icons.iconarchive.com/icons/iconleak/or/256/light-bulb-icon.png

Light bulb off: http://simpleicon.com/wp-content/uploads/light-bulb-3.png

Temp icon: http://www.iconsdb.com/icons/preview/black/temperature-2-xxl.png


