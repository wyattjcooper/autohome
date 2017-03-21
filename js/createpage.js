/**
  *
  * jQuery Mobile Page Creator
  * a jQuery Mobile page has a header, content, and footer component
  * 
  */
  var pageCount = 1;
  
  var viewers = {}
  viewers['Light'] = lightViewer;
  viewers['Thermostat'] = tempViewer;

  var serverURL = "server/status"

  /*
   * Code for creating jQuery mobile page with data from room configuration
   * Takes in the house data and an index into the rooms component
   * Returns a page rendered with the data from the room
   */ 

  function createPage(house,room) {
	    var pageID = room.id	    
	    var $page = $('<div>',{
	        'data-role':'page',
	        id:pageID,
	    })
	    $header = createHeader(house.deviceTypes,room)
	    $content = createContent(house, room)
	    $footer = createFooter(house.rooms, room)
	    $page.append($header)
	    $page.append($content)
	    $page.append($footer)   
	    return $page;
	}

  
	/*
	 * Auxilary functions from online
	 */ 
   
	/*
	 * http://stackoverflow.com/questions/7176908/how-to-get-index-of-object-by-its-property-in-javascript
	 */
	function findWithAttr(array, attr, value) {
		for(var i = 0; i < array.length; i += 1) {
			if(array[i][attr] === value) {
				return i;
			}
		}
		return -1;
	}


	/*
	 * http://stackoverflow.com/questions/3562493/jquery-insert-div-as-certain-index
	 */
	jQuery.fn.insertAt = function(index, element) {
		var lastIndex = this.children().size();
		if (index < 0) {
			index = Math.max(0, lastIndex + 1 + index);
		}
		this.append(element);
		if (index < lastIndex) {
			this.children().eq(index).before(this.children().last());
		}
		return this;
	}
