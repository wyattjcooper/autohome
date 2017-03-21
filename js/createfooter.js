   

   /**
	 * Render footer of page
	 */

   function createFooter(rooms, room) {
   		var $ul = createRoomBar(rooms, room);
	    var $footer = $('<div>',{
	                   'data-role':'footer',
	                   'data-theme':'a',
	                   'data-position':'fixed',
	                   'data-tap-toggle':'false',
	                   'data-id':'footer'
	                   })
	    .append($('<div>',{
	              'data-role':'navbar',
	              'id':'navbar'
	              })
	    		.addClass('roombar')
	            .append($ul)
	            )
	    
	    return $footer

   }

   /**
	 * render room navigation bar 
	 */

 function createRoomBar(rooms, room) {
 	var $pages = $("div[data-role='page']");
 	var pageID = room.id

 	
    var $ul = $('<ul>');
    
    
    for(var i=0;i<rooms.length;i++) {
        var $p = $pages.eq(i);
    	var id = rooms[i].name + (i+1)
    	var title = rooms[i].name 
        
        var $a  = $('<a>',{
                    'href':id?"#"+id:"#",
                    'data-prefetch':true,
                    'data-transition':"fade",
                    })
        .text(title);
        
        $ul.append($('<li>').append($a));
    }
	var $a = $('<a>', {
                    'href':"#dialog-form"+pageID,
                    'data-icon':"plus",
                    'data-rel':"popup",
                    })
        .addClass('ui-link ui-btn');
	$ul.append($('<li>').append($a));
	return $ul
 }


    /**
	 * roomBar handler
	 */
	var roomBarHandler = {
		  addNewNavBarElement:function(newPageID, name) {
		    var navbars = $(".roombar");
		    for(var i=0;i<navbars.length;i++) {
		        var $navbar = navbars.eq(i);
		        var $li = $("<li>");
		        var $a  = $('<a>',{
		                   'id':"nav_"+newPageID,
		                   'href':'#'+newPageID,
		                   'data-prefetch':true,
		                   'data-transition':"fade",
		                   'text':name
		                   })
		        $li.append($a);
		        
		        $navbar.navbar("destroy");
		        var $ul = $navbar.find('ul');
		        var $children = $ul.children('li');
		        
		        // insert before the last element because it is the plus button
		        $ul.insertAt(($children.length - 1), $li);
		        $navbar.navbar();
		    }
		  }
	}