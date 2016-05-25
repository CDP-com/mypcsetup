// JavaScript Document setupbutton.js

// Use ActiveX to call your button's argument XML file
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.load("C:\\ProgramData\\CDP\\SnapBack\\APPs\\mypcsetup\\btn0arguments.xml");

// Change the tag name to whatever you specified as the btn[i]_arguments[n]xmlName in app-lib.js
var argument = xmlDoc.getElementsByTagName('argument');

// Script what you want to happen based upon the arguments returned
if ( xmlDoc.getElementsByTagName("argument").length == 0 ){
	var wsh = new ActiveXObject("WScript.Shell");
	wsh.popup( "No programs were selected to install or be updated automatically. Please select some options and run the app again.", 5, "Selected Vehicle" );

	wsh = null;
}

else if (argument){

	var wsh = new ActiveXObject("WScript.Shell");
	wsh.popup("The selected programs would have been queued for installation and marked for auto updating.", 5, "Setup My PC" );

	wsh = null;

}