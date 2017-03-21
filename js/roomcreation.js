	/*
	 * Add room to the display
	 */
	function addRoom(house, newName) {
	 	  var newRoom = addNewRoomObjectToHouse(house, newName);
	 	  roomDataHandler.updateRooms(newRoom);
	 	  var $pages = $("div[data-role='page']");
	 	  var newIndex = $pages.length;
	 	  var newPageID = newName + newIndex;
	 	  roomBarHandler.addNewNavBarElement(newPageID,newName);
	 	  $newPage = createPage(house,house.rooms[newIndex - 1]);
	 	  $newPage.appendTo("body")
	 	  $.mobile.changePage( $("#"+newPageID), { transition: "slideup", changeHash: true });



	 }

	/*
	 * Create new room object and send it to the server 
	 */
	function addNewRoomObjectToHouse(data, name) {
		var $pages = $("div[data-role='page']");
	 	var newIndex = $pages.length;
		var room = {}
		room["id"] = name + newIndex;
		room["name"] = name;
		room["devices"] = [];
		data.rooms[data.rooms.length] = room;
		return room;
	}

	/**
	  * Pop up the enables room creation
	  */
	function createNewRoomPopUp(content,pageID,data) {
		var $fields = $('<div>');
		addTextField($fields, "Room name",pageID);
		addAddRoomButtonToFields($fields, data, pageID);
		var $form = $('<form>');
		var $formDiv = $('<div>', {
				'data-role':"popup",
				'id':"dialog-form"+pageID,
				'data-theme':"a",
				'style':"max-width:400px;"
			});
		$fields.addClass('ui-corner-all');
		$form.append($fields);
		$formDiv.append($form);
		$formDiv.appendTo(content);
	}
	
	/**
	  * Add text field for room name entry 
	  */
	function addTextField(fields, name,pageID) {
		fields.append($('<label>', {
			'text':name,
			'for':name
		}));
		fields.append($('<input>',{
			'name':name,
			'id':"nameInput"+pageID,
			'class':"text ui-widget-content ui-corner-all"
		}))
	}

	/**
	  * Add button for handling room addition request
	  */
	function addAddRoomButtonToFields(fields,data,pageID) {
		
		fields.append($('<button>', {
			'text':"Add",
			'data-role':"button",
			'id':"addbtn",
			'data-ajax':false,
			'click':(function(e) {
				var enteredName = $("#nameInput"+pageID).val();
				var $popup = $("dialog-form"+pageID)
				e.stopImmediatePropagation();
		    	e.preventDefault();
		    	addRoom(data, enteredName);

			})
		}));
	}