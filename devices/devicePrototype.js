/*
 *
 * Prototype that all devices inherit from
 *
 */



/* 
 * Every device must implement the following functions
 */
function deviceConstructor(device) {
	
	this.renderContent = device.renderContent
	this.change = device.change
	this.mockUpdate = device.mockUpdate

};