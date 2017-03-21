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

Bedroom and LivingRoom are pre-defined rooms for a house.  These are displayed in the tabs in the bottom section of the page.  The highlighted tab (Bedroom in the above picture) is active and displays the controllable devices in that room.   
The app is written to support two device types, a ‘Lamp’ and a ‘Thermostat’.  The code can be easily leveraged to add and support additional devices.   
The bedroom has a predefined ‘Desk Lamp’ device, and the LivingRoom has a predefined ‘Thermostat’ device.   

In the tab line there is a ‘+’ symbol.  Click on the ‘+’ to add a new room.   

The Kitchen room will now display as a new tab at the bottom of the page.

You can add a new device in any room by clicking on either the Add Lamp icon or the Add Thermostat icon.  For example, To add a new thermostat device in the Kitchen, click the  button.

Then add a name for the thermostat, and add its URL locator name as specified by the device manufacturer.

(Note that the URLs are mocked for this sample code as the devices don’t actually exist. URL errors will display when the code makes a call to this URL).  

A Kitchen Thermostat control display is then created.          

Change the temperature using the drop down list.

When a new temperature is selected, the thermostat temperature is changed and a confirmation message is sent.

The thermostat temperature now shows the new temperature that has been sent to the (mocked) device.  

# Coding the display for a new device

A new device can be created using the following functions:
	
	renderContent : returns a div rendering the content of the device, takes in the JSON data specifying the device and a pageID
	this.change : reacts to changes to the devices controller
	this.mockUpdate : mock update because the device does not reach a real HTTP server
  
  

# References 

Light bulb on: http://icons.iconarchive.com/icons/iconleak/or/256/light-bulb-icon.png

Light bulb off: http://simpleicon.com/wp-content/uploads/light-bulb-3.png

Temp icon: http://www.iconsdb.com/icons/preview/black/temperature-2-xxl.png


