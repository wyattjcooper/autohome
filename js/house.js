/*
 *
 * Provides methods to render the house, including rooms and devices 
 *
 */


var house = {

		/* 
		 * Make a GET request to fetch room configuration from the server 
		 */
	    init: function() {
	    	$.ajax({
                type: 'GET',
                dataType:'json',
                url: "server/house.json",
                async: true, 
                success: this.create,
                error: function (xhr, ajaxOptions, thrownError) {
		        	alert(thrownError);
		      }
			});
	    	this.initialized = true;
	    },

	    /* 
	     * Handle retrieval of the room configuration and rendering on the pages
	     */
	    create:function(data) {
	    	var $firstPage = null;
	    	var rooms = {};
	    	var types = {};
	    	for (var i=0;i<data.rooms.length;i++) {
	    		// create room page
	    		$page = createPage(data,data.rooms[i])
	    		$page.appendTo("body")
	    		if(!$firstPage) {
                 	$firstPage = $page;
                }
            }
	    	$.mobile.changePage( $firstPage, { transition: "slideup", changeHash: true });
	    }	
}

	







