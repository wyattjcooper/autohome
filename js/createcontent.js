/**
	 * render room content
	 */

   function createContent(data, room) {
		var pageID = room.id;

		var $content = $('<div>',{
		        'role':'main',
		        'id':'content'+pageID,
		        'width':'1000px',
  				'height': '1000px' 
		    })
		    .addClass('ui-content')

		// render the devices
		$deviceUl = $("<ul>",{
			'id':"deviceList"+pageID,
			'date-role':"listview"
		})
		for (var i = 0; i < room.devices.length; i++){
			var deviceData = room.devices[i]
			var deviceType = deviceData.type
			var device = new deviceConstructor(viewers[deviceType])
			$deviceContent = device.renderContent(deviceData,pageID)
			$deviceUl.append($deviceContent)
		}  
		$content.append($deviceUl)
		// create the pop up that allows addition of another room
		createNewRoomPopUp($content,pageID, data)

		// create the pop ups to add new devices
		for (var i = 0; i < data.deviceTypes.length; i++){
			var type = data.deviceTypes[i].type
        	createNewControlPopUp(type, $content, pageID, data,room)
		}

		return $content
   }