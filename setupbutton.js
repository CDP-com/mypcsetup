// JavaScript Document setupbutton.js

// Use ActiveX to call your button's argument XML file
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.load("C:\\ProgramData\\CDP\\SnapBack\\APPs\\mypcsetup\\btn0arguments.xml");

// Change the tag name to whatever you specified as the btn[i]_arguments[n]xmlName in app-lib.js
var arguments = xmlDoc.getElementsByTagName('argument');
var programs = xmlDoc.getElementsByTagName('program');
var actions = xmlDoc.getElementsByTagName('action');

// Script what you want to happen based upon the arguments returned
if ( xmlDoc.getElementsByTagName("argument").length == 0 ){
	var wsh = new ActiveXObject("WScript.Shell");
	wsh.popup( "No programs were selected to install or be updated automatically. Please select some options and run the app again.", 5, "Selected Vehicle" );

	wsh = null;
}

else if (arguments){

	for (var i = 0; i < arguments.length; i++) {
		var argument = arguments[i];	
		var program = programs[i].firstChild.nodeValue;
		var action = actions[i].firstChild.nodeValue;
		// Note: The "program" name must match the Arguments Values you defined in applib.js
		// Note: The "action" will either always be "install" or "autoupdate"
				
		// Browsers
			// Chrome
			if (program == "Chrome" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Chrome selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Chrome" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Chrome selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Firefox
			else if (program == "Firefox" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Firefox selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Firefox" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Firefox selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Edge
			else if (program == "Edge (Internet Explorer)" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Edge selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Edge (Internet Explorer)" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Edge selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Opera
			else if (program == "Opera" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Opera selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Opera" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Opera selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Vivaldi
			else if (program == "Vivaldi" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Vivaldi selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Vivaldi" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Vivaldi selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			
		// Office 365
			// Office 365 Home
			else if (program == "Office 365 Home" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Home selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Office 365 Home" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Home selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Office 365 Business
			else if (program == "Office 365 Business" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Office 365 Business" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Office 365 Business Premium
			else if (program == "Office 365 Business Premium" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business Premium selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Office 365 Business Premium" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business Premium selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Office 365 Business Essentials
			else if (program == "Office 365 Business Essentials" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business Essentials selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Office 365 Business Essentials" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business Essentials selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
		
		// Productivity Suites
			// OpenOffice
			else if (program == "OpenOffice" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "OpenOffice selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "OpenOffice" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "OpenOffice selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Google Apps
			else if (program == "Google Apps" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Google Apps selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Google Apps" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Google Apps selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			
		// Communication/Messaging Programs
			// Skype
			else if (program == "Skype" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Skype selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Skype" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Skype selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}

		// Sync Programs
			// BitTorrent Sync
			else if (program == "BitTorrent Sync" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "BitTorrent Sync selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "BitTorrent Sync" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "BitTorrent Sync selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// GoodSync
			else if (program == "GoodSync" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "GoodSync selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "GoodSync" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "GoodSync selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// SugarSync
			else if (program == "SugarSync" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "SugarSync selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "SugarSync" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "SugarSync selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Dropbox
			else if (program == "Dropbox" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Dropbox selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Dropbox" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Dropbox selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Google Drive
			else if (program == "Google Drive" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Google Drive selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Google Drive" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Google Drive selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			
		// Popular Dependencies
			// Java
			else if (program == "Java" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Java selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Java" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Java selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Adobe Flash
			else if (program == "Adobe Flash" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Adobe Flash selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Adobe Flash" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Adobe Flash selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			
		// Optimizations
			// Disable Windows 10 Notification
			else if (program == "Disable Windows 10 Notification" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Disable Windows 10 Notification selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Disable Windows 10 Notification" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Disable Windows 10 Notification selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Fix My Lenovo
			else if (program == "Fix My Lenovo" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Fix My Lenovo selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Fix My Lenovo" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Fix My Lenovo selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Optimize Windows
			else if (program == "Optimize Windows" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Optimize Windows selected for Install", 5, "Setup My PC" );

				wsh = null;
			}			
			else if (program == "Optimize Windows" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Optimize Windows selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			
		// Remove Unnecessary OEM Software (Junkware)
			// Remove Unnecessary Lenovo Software
			else if (program == "Remove Unnecessary Lenovo Software" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Remove Unnecessary Lenovo Software selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Remove Unnecessary Lenovo Software" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Remove Unnecessary Lenovo Software selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Remove Unnecessary Dell Software
			else if (program == "Remove Unnecessary Dell Software" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Remove Unnecessary Dell Software selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Remove Unnecessary Dell Software" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Remove Unnecessary Dell Software selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			// Remove Unnecessary HP Software
			else if (program == "Remove Unnecessary HP Software" && action == "install"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Remove Unnecessary HP Software selected for Install", 5, "Setup My PC" );

				wsh = null;
			}
			else if (program == "Remove Unnecessary HP Software" && action == "autoupdate"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Remove Unnecessary HP Software selected for AutoUpdate", 5, "Setup My PC" );

				wsh = null;
			}
			
	}
	

}