//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 1;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "mypcsetup";				// This app's name / folder name which must be unique
var apptitle = "Setup My PC";			// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/setup-my-pc/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 1;                            // This is the number of buttons on the App Home tab in main.html

// Setup for Button0 (The First Button)
var btn0_Title = "Setup My PC";		// This is what is displayed on the button.
var btn0_MouseOver = "Clicking this button will return your select arguments in a pop-up.";	// This is what appears upon mouseover for the button.
var btn0_Description = "Setting up a PC has never been easier. Simply select the programs you wish to install from below, select if you want these programs to autoupdate via SnapBack, and click this button. These programs will automatically be installed and kept up-to-date.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Why = "Run this button to see the end results of the options you chose.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "setupbutton.js";	// This is the actual script the button will be calling.
var btn0_Source = "setupbutton.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Button0 Arguments
var btn0_arguments=8; 						// Must specify if your button has any arguments, even if its 0 (zero) 

var btn0_arguments0DisplayName = "Browsers";	// The name of your argument option which is displayed to the user
var btn0_arguments0Description = "<p>A browser is a specific program or application which enables you to visit various websites. There are a number of browsers available for download and use, each with their specific advantages and disadvanges. Our community recommends installing both Chrome and Firefox.</p>";	// The textual description for this argument
var btn0_arguments0Values = ["Chrome","Firefox","Edge (Internet Explorer)","Opera","Vivaldi"];	// The values for this argument, which are in an array
var btn0_arguments0Default = ["Chrome","Firefox"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments0Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments1DisplayName = "Office 365";	// The name of your argument option which is displayed to the user
var btn0_arguments1Description = "<p>Office 365, previously Microsoft Office in previous iterations, is a productivity suite containing a number of well-known programs such as Word, Excel, and Powerpoint. Office 365 requires a monthly subscription, although you receive a free month if you register the product with a credit card. SnapBack can save you money on this subscription. Visit the Office 365 app to learn more and to purchase a subscription directly through SnapBack.</p>";	// The textual description for this argument
var btn0_arguments1Values = ["Office 365 Home","Office 365 Business","Office 365 Business Premium","Office 365 Business Essentials"];	// The values for this argument, which are in an array
var btn0_arguments1Default = ["Office 365 Home"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments1Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments2DisplayName = "Productivity Suites";	// The name of your argument option which is displayed to the user
var btn0_arguments2Description = "<p>Productivity Suites, like Office 365, are packages of programs including document editors, spreadsheet programs, slide presentations, and more. Both OpenOffice and Google Apps are free to use, although Google Apps requires a Google account.</p>";	// The textual description for this argument
var btn0_arguments2Values = ["OpenOffice","Google Apps"];	// The values for this argument, which are in an array
var btn0_arguments2Default = [""];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments2Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments3DisplayName = "Communication/Messaging Programs";	// The name of your argument option which is displayed to the user
var btn0_arguments3Description = "<p>Communication/Messaging programs either allow you to instant message other users over the internet or chat over video/audio. Skype is one of the most popular such programs.</p>";	// The textual description for this argument
var btn0_arguments3Values = ["Skype"];	// The values for this argument, which are in an array
var btn0_arguments3Default = ["Skype"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments3Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments4DisplayName = "Sync Programs";	// The name of your argument option which is displayed to the user
var btn0_arguments4Description = "<p>Sync programs allow you to connect directly to the cloud and, even, other machines. These programs allow you to sync your data to servers in the cloud as well as to other devices. Sync important documents, photos, music, and more. The most popular such programs are listed below.</p>";	// The textual description for this argument
var btn0_arguments4Values = ["BitTorrent Sync","GoodSync","SugarSync","Dropbox","Google Drive"];	// The values for this argument, which are in an array
var btn0_arguments4Default = [""];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments4Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments5DisplayName = "Popular Dependencies";	// The name of your argument option which is displayed to the user
var btn0_arguments5Description = "<p>Dependencies are, essentially, libraries that are stored on your computer and which a number of programs utilize. For example, Java is a programming language a wide number of programs use. Adobe Flash is a library often used to play video content in your browser.</p>";	// The textual description for this argument
var btn0_arguments5Values = ["Java","Adobe Flash"];	// The values for this argument, which are in an array
var btn0_arguments5Default = ["Java","Adobe Flash"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments5Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments6DisplayName = "Optimizations";	// The name of your argument option which is displayed to the user
var btn0_arguments6Description = "<p>SnapBack Optimizations are quick fixes to a number of problems with your PC. Problems may be the result of OEM software, of choices made on your behalf regarding the Operating System, and more. These Optimizations will ensure that your machine is set to work for ideal speed and performance, while ensuring that your data is protected and secure.</p>";	// The textual description for this argument
var btn0_arguments6Values = ["Disable Windows 10 Notification","Fix My Lenovo","Optimize Windows"];	// The values for this argument, which are in an array
var btn0_arguments6Default = ["Optimize Windows"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments6Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments7DisplayName = "Remove Unnecessary OEM Software (Junkware)";	// The name of your argument option which is displayed to the user
var btn0_arguments7Description = "<p>Often, when you buy a new PC it includes a number of programs distributed by the Original Equipment Manufacturer (OEM). These programs are occassionally unnecessary and bog down your machine. In worst case scenarios, these programs may have vulnerabilities that can leave your machine unsecure. The Setup My PC app will remove the worst of these offenders so your machine can work optimally.</p>";	// The textual description for this argument
var btn0_arguments7Values = ["Remove Unnecessary Lenovo Software","Remove Unnecessary Dell Software","Remove Unnecessary HP Software"];	// The values for this argument, which are in an array
var btn0_arguments7Default = [""];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments7Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

// Permissions for Button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn0_KeyValue="button0"; 				// Key value name for the registry
var btn0_DefaultEnableButton=1;
var btn0_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn0_DefaultAllowUser=1;
var btn0_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn0_DefaultCaution=1;
var btn0_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedCaution="";     		// Update timestamp if admin modifies current value

// Service Information for Button0
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn0_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn0( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	alertConfirmation( AppName, ButtonNum, Computername, CurrentUser, sCmd );

}




	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****

// Function to gather all selected install and update values, get confirmation from the user, and run the button script	
function alertConfirmation( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	$("button").click(function(){
		var installPrograms = [];
		$.each($("input[name='install']:checked"), function(){            
			installPrograms.push($(this).val());
		});
		var updatePrograms = [];
		$.each($("input[name='autoupdate']:checked"), function(){            
			updatePrograms.push($(this).val());
		});
		var userConfirm = confirm("You have selected to install: " + installPrograms.join(", ") + "\n\nYou have selected to autoupdate: " + updatePrograms.join(", ") + "\n\nPlease confirm your selections by clicking 'Okay' or click 'Cancel' to stop the process and reselect.");
		if (userConfirm == true) {
			RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		// This function executes your script.  Do not edit this line
			setTimeout(function(){ location.reload();}, 4000);
		} else {
			location.reload();
		}
	});
}

// Function to Display the Button and Its Arguments - This Overwrites the Common Function in btnpermlogic.js
function CreateButtonPCSetup()
{	
	for (i=0,j=1; i<btncount; i++,j++){
		var s="<table class='main-table'>";
		// Create each button
		s+="<td style='width: 32%;'>";
		s+="<div id='cdpbutton"+j+"' class='button-wrapper'>";
		s+="<button package='";
		btnPackage="appname";
		s+=eval(btnPackage);
		s+="' title='";
		btnMouse="btn"+i+"_MouseOver";
		s+=eval(btnMouse);
		s+="' onclick='javascript:RunBtn"+i+"(appname, "+i+", DName, UName, btn"+i+"_Command)'>";
		btnTitle="btn"+i+"_Title";
		s+=eval(btnTitle);
		s+="</button>";
		s+="</div>";
		s+="<a href='#' id='button"+i+"job' class='add-to-job-img' title='Add this Button to your Job List'></a><a id='button"+i+"why' class='whyButton why-run-img'></a><div class='whyDialog'>";
		btnWhy="btn"+i+"_Why";
		s+=eval(btnWhy);
		s+="</div></a>";		
		s+="</td>";
		s+="<td><div class='more'>"
		btnDescription="btn"+i+"_Description";
		s+=eval(btnDescription);
		s+="</div></td>";
		s+="</tr>";
		s+="</table>";
		
		// Load any arguments specified
		try {
			var btnarguments="btn"+i+"_arguments";
			var btnargumentsNum=eval(btnarguments); 		
			if (btnargumentsNum > 0) {	
				for (n=0,o=1; n<btnargumentsNum; n++,o++){
					s+="<div id='btn"+i+"_arguments' class='btn_arguments'>";
					s+="<div class='accordion'>";
					s+="<h3>";
					s+=eval("btn"+i+"_arguments"+n+"DisplayName");
					s+="</h3>";
					s+=eval("btn"+i+"_arguments"+n+"Description");
					s+="</div>";
					s+="<table class='setup_table'>";
					s+="<tr><th class='program_heading'>Program Name</th><th class='other_heading'>Install</th><th class='other_heading'>Auto Update</th></tr>";
					var argumentsValue = eval("btn"+i+"_arguments"+n+"Values");
					for (v = 0; v < argumentsValue.length; v++) {
						
						// Try and Load any arguments which are fixed
						try {
							var valuesFixed = eval("btn"+i+"_arguments"+n+"Fixed");
							if( $.inArray(argumentsValue[v], valuesFixed) != -1){
								s+="<tr>";
									s+="<td class='table_name_td'>";
										s+=argumentsValue[v];
									s+="</td>";
									
									s+="<td class='table_other_td'>";
										s+="<input disabled checked id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="' class='install' type='checkbox' name='install' value='";
										s+=argumentsValue[v];
										s+="' title='Check this box to install the program via SnapBack.' onClick='javascript:uncheckAutoUpdate(this);'>";
									s+="</td>";
									
									s+="<td class='table_other_td'>";
										s+="<input disabled checked id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="_autoupdate' class='autoupdate' type='checkbox' name='autoupdate' value='";
										s+=argumentsValue[v];
										s+="'>";
									s+="</td>";
								s+="</tr>";
							} 
							else {
								s+="<tr>";
									s+="<td class='table_name_td'>";
										s+=argumentsValue[v];
									s+="</td>";
								
									s+="<td class='table_other_td'>";
										s+="<input id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="' class='install' type='checkbox' name='install' value='";
										s+=argumentsValue[v];
										s+="' title='Check this box to install the program via SnapBack.' onClick='javascript:uncheckAutoUpdate(this);'>";
									s+="</td>";
									s+="<td class='table_other_td'>";
										s+="<input id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="_autoupdate' class='autoupdate' type='checkbox' name='autoupdate' value='";
										s+=argumentsValue[v];
										s+="'>";
									s+="</td>";								
								s+="</tr>";
							}
						}
						// Catch if any values aren't fixed
						catch (e) {
							s+="<tr>";
								s+="<td class='table_name_td'>";
									s+=argumentsValue[v];
								s+="</td>";
							
								s+="<td class='table_other_td'>";
									s+="<input id='argument";
									s+=n;
									s+="_value";
									s+=v;
									s+="' class='install' type='checkbox' name='install' value='";
									s+=argumentsValue[v];
									s+="' title='Check this box to install the program via SnapBack.' onClick='javascript:uncheckAutoUpdate(this);'>";
								s+="</td>";
								s+="<td class='table_other_td'>";
									s+="<input id='argument";
									s+=n;
									s+="_value";
									s+=v;
									s+="_autoupdate' class='autoupdate' type='checkbox' name='autoupdate' value='";
									s+=argumentsValue[v];
									s+="'>";
								s+="</td>";								
							s+="</tr>";
						}	
					}
					s+="</table>";
					s+="</div>";					
				}			
			}
		}
		catch (e) {
		
		}
		
	}
	
	document.write(s);
}

// Function to Write Arguments in a XML File for Each Button - This Overwrites the Common Function in jslib.js
function writeArguementsXML(ButtonNum){
	try {
		var btnarguments="btn"+ButtonNum+"_arguments";
		var btnargumentsNum=eval(btnarguments); 		
		if (btnargumentsNum > 0) {
			var curDateTime = new Date();
			var modTime = curDateTime.toUTCString();
			
			//Create new file to write to
			var fso = new ActiveXObject("Scripting.FileSystemObject");
			var FILENAME="..\\"+ appname +"\\btn"+ ButtonNum +"arguments.xml";
			var file = fso.CreateTextFile(FILENAME, true);
			
			file.WriteLine('<?xml version="1.0" encoding="utf-8"?>\n');
			file.WriteLine('<btn'+ ButtonNum + 'arguments>');
			
			//For each argument selected, create its own section
			$("#btn"+ ButtonNum + "_arguments input:checked").each(function (index, value) {
				file.WriteLine('     <argument>');
				file.WriteLine('          <program>'+ $(this).val() +'</program>');
				file.WriteLine('          <' + $(this).attr("name") + '>Yes</' + $(this).attr("name") + '>');
				file.WriteLine('          <modtime>' + modTime + '</modtime>');
				file.WriteLine('     </argument>');
			});
			
			file.WriteLine('</btn'+ ButtonNum + 'arguments>');
			file.Close();
		}
	}
	catch (e){
		return;
	}
}

// Function to Load Default Argument Values - This Overwrites the Common Function in templib.js
$(document).ready(function() {
	try {
		//Loop through all buttons
		for (i=0,j=1; i<btncount; i++,j++){
			//See if any arguments are specified
			var btnarguments="btn"+i+"_arguments";
			var btnargumentsNum=eval(btnarguments);
			//Loop through all arguments
			if (btnargumentsNum > 0) {	
				for (n=0,o=1; n<btnargumentsNum; n++,o++){
					//Try to see if we're running in an HTA
					try {
						//See if an arguments XML file exists and, if so, load XML file to get default values
						var xmlExists;
						xmlExists = new ActiveXObject("Scripting.FileSystemObject");
						if(xmlExists.FileExists("..\\"+ appname +"\\btn"+i+"arguments.xml")){
							var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
							xmlDoc.async="false";
							xmlDoc.load("..\\"+ appname +"\\btn"+i+"arguments.xml");
							var argumentsDefault = xmlDoc.getElementsByTagName("argument"); 

							if (argumentsDefault){
								for (var i = 0; i < argumentsDefault.length; i++) { 
									var programTag = argumentsDefault[i].getElementsByTagName("program");
									var defaultProgram = programTag[0].firstChild.nodeValue;
									
									try {
										var installTag = argumentsDefault[i].getElementsByTagName("install");
										var defaultInstall = installTag[0].firstChild.nodeValue;
										$("input[type='checkbox'][name='install'][value='"+defaultProgram+"']").prop("checked",true);
									}
									catch(e){
									
									}
									try {
										var updateTag = argumentsDefault[i].getElementsByTagName("autoupdate");
										var defaultUpdate = updateTag[0].firstChild.nodeValue;
										$("input[type='checkbox'][name='autoupdate'][value='"+defaultProgram+"']").prop("checked",true);
									}
									catch(e){
									
									}
									
								}
							}
							
							}
						//If button has not been run, load default values from app-lib.js
						else {
							var defaultsCoded = eval("btn"+i+"_arguments"+n+"Default");
							jQuery.each(defaultsCoded, function(index, item) {
								$("input[type='checkbox'][name='install'][value='"+item+"']").prop("checked",true);
								$("input[type='checkbox'][name='autoupdate'][value='"+item+"']").prop("checked",true);
							});
						}
					}
					//Catch if running in any other browser
					catch (e){
						var defaultsCoded = eval("btn"+i+"_arguments"+n+"Default");
						jQuery.each(defaultsCoded, function(index, item) {
							$("input[type='checkbox'][name='install'][value='"+item+"']").prop("checked",true);
							$("input[type='checkbox'][name='autoupdate'][value='"+item+"']").prop("checked",true);
						});
					}
				}		
			}
		}
	}
	catch (e) {
	
	}
});

// If, on page load, an install option is checked by default, enable the autoupdate option 
$(document).ready(function() {
	try {
		//Loop through all buttons
		for (i=0,j=1; i<btncount; i++,j++){
			//See if any arguments are specified
			var btnarguments="btn"+i+"_arguments";
			var btnargumentsNum=eval(btnarguments);
			//Loop through all arguments
			if (btnargumentsNum > 0) {	
				for (n=0,o=1; n<btnargumentsNum; n++,o++){
					var argumentsValue = eval("btn"+i+"_arguments"+n+"Values");
					for (v = 0; v < argumentsValue.length; v++) {
						if ($('#argument'+n+'_value'+v+'').is(':checked')) {
							$('#argument'+n+'_value'+v+'_autoupdate').removeAttr('disabled').attr("title", 'Check this box to force the program to Auto Update via SnapBack.'); //enable input
						} else {
							$('#argument'+n+'_value'+v+'_autoupdate').attr('disabled', true).attr("title", 'You cannot select to Auto Update a program if the install option is not selected as well.'); //disable input
						}
					}
				}
			}
		}
	}
	catch (e) {
	
	}
});

// Function to enable the autoupdate option if the install option is checked
function uncheckAutoUpdate(obj){
	if (obj.checked == true){
		var checkboxID = $(obj).attr('id');
		$('#' + checkboxID + '_autoupdate').removeAttr('disabled').attr("title", 'Check this box to force the program to Auto Update via SnapBack.'); //enable input
	}
	if (obj.checked == false){
		var checkboxID = $(obj).attr('id');
		$('#' + checkboxID + '_autoupdate').prop('checked', false).attr('disabled', true).attr("title", 'You cannot select to Auto Update a program if the install option is not selected as well.'); //disable input
	}
}

// Set different row colors for ease of reading
$(document).ready(function()
{
  $(".setup_table tr:nth-child(even)").css("background-color", "#e3e3e3");
});
