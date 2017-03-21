

 /*
  * Add a new device to the page
  */

function addDeviceToPage(pageID, type, data, newName, newUrl, room) {
 	  var newDeviceData = addNewDeviceObjectToHouse(type, room, data, newName, newUrl)
 	  var $deviceUl = $("#"+pageID).find("#deviceList"+pageID)
 	  var deviceType = newDeviceData.type
	  var device = new deviceConstructor(viewers[deviceType])
	  $deviceContent = device.renderContent(newDeviceData,pageID)
	  $deviceUl.append($deviceContent)
 }

 /*
  * Adds a new device to the house JSON data model and return it
  */

 function addNewDeviceObjectToHouse(type, room,data, name, url) {
	// make some sort of POST request
	var $pages = $("div[data-role='page']");
 	var roomIndex = findWithAttr(data.rooms, "id", room.id)+1
 	var deviceIndex = room.devices.length + 1
	var device = {}
	currentDevicesInRoom = room.devices
	device["id"] = type+"_"+roomIndex + deviceIndex
	device["name"] = name
	device["type"] = type
	device["url"] = url
	currentDevicesInRoom[currentDevicesInRoom.length] = device
	return device
}

/**
  * Create the pop up that enables the user to make a new controller
  */
function createNewControlPopUp(type,content,pageID,data,room) {
	var $fields = $('<div>')
	addControlTextField(type,$fields, "New " + type + " Name",pageID)
	addAddControlButtonToFields(type,$fields, data, pageID,room)
	var $form = $('<form>');
	var $formDiv = $('<div>', {
			'data-role':"popup",
			'id':"dialog-form"+type+pageID,
			'data-theme':"a",
			'style':"max-width:400px;"
		});
	$fields.addClass('ui-corner-all')
	$form.append($fields)
	$formDiv.append($form)
	$formDiv.appendTo(content)
}

/*
 * Create text inputs so user can enter the controller name and the URL of its processor
 */

function addControlTextField(type,fields, name,pageID) {
	fields.append($('<label>', {
		'text':name,
		'for':name
	}));
	fields.append($('<input>',{
		'name':name,
		'id':"controlNameInput"+type+pageID,
		'class':"text ui-widget-content ui-corner-all"
	}));
	fields.append($('<label>', {
		'text':type + " Device URL",
		'for':"urlinput"
	}));
	fields.append($('<input>',{
		'name':"urlinput",
		'id':"controlUrlInput"+type+pageID,
		'class':"text ui-widget-content ui-corner-all"
	}))
}

/*
 * Button on pop up to handle creation of a new controller
 */ 

function addAddControlButtonToFields(type, fields,data,pageID,room) {
	fields.append($('<button>', {
		'text':"Add",
		'data-role':"button",
		'id':"addbtn",
		'data-ajax':false,
		'click':(function(e) {
			var enteredName = $("#controlNameInput"+type+pageID).val();
			var enteredUrl = $("#controlUrlInput"+type+pageID).val();
			e.stopImmediatePropagation();
	    	e.preventDefault();
	    	addDeviceToPage(pageID,type, data, enteredName,enteredUrl,room);
		})
	}));
}