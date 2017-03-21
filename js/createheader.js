   


   /**
	 * Render header of the jQuery mobile page
	 */
	function createHeader(devices, room) {
		var $ul = createAddDeviceBar(devices, room);

		//  add the header
	    var $header = $('<div>',{
	       'data-role':'header',
	       'data-id':'header',
	       'data-theme':'a',
	       'data-position':'fixed'
	    })
	    .append($('<h1>')
	        .text(room.name)
	    )
	    .append($('<div>',{
	              'data-role':'navbar',
	              'id':'navbar-controls'
	              })
	            .append($ul)
	            )
	    return $header
	}


	/**
	 * render create new control bar
	 * return a ul with buttons to add new devices
	 */

 function createAddDeviceBar(devices, room) {
 	var pageID = room.id;
    var $ul = $('<ul>');
    
    
    for(var i=0;i<devices.length;i++) {
        var type = devices[i].type;
    	var id = devices[i].name + pageID;
    	var title = devices[i].name ;
    	var image = devices[i].img;
    	var $name = $('<h1>', {
    		'text':title,
    	})
    	var $img = $('<img>', {
    		'src':image,
    		'width':20,
    		'height':20,


    	});
        // button to display
        var $controlDiv  = $('<a>',{
                    'id':id,
                    'text':"Add",
                    'data-rel':'popup',
                    'href':"#dialog-form"+type+pageID
                    })
        .append($img);
        
        $ul.append($('<li>').append($controlDiv));
    }
	return $ul
 }