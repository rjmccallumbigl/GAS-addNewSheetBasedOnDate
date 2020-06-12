/** 
* 
* Create a menu option for script functions
*
* References
* https://developers.google.com/apps-script/reference/document/document-app#getui
*/

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Functions')
  .addItem('Function: Create New Sheet (Increment By Date)', 'updateSheetsByDate')
  .addToUi();
}

/**
* 
* Create a new sheet in your spreadsheet that is incremented from the name of your current sheet (time wise).
*
* References
* https://developers.google.com/apps-script/reference/utilities/utilities#formatdatedate,-timezone,-format
* https://webcache.googleusercontent.com/search?q=cache:ucIjh7N76QcJ:https://developers.google.com/google-ads/scripts/docs/features/dates+&cd=1&hl=en&ct=clnk&gl=us
* 
*/

function updateSheetsByDate(){
  
  //  Declare variables
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var sheetName = sheet.getName();
  var timezone = Session.getScriptTimeZone();
  
  //  Calculate number milliseconds in a day
  var MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
  
  //  Parse the current sheet as a Date
  var sheetNameDate = new Date(sheetName);    
  
  //  Get tomorrow's date
  var tomorrow = new Date(sheetNameDate.getTime() + MILLIS_PER_DAY);  
  var formattedDate = Utilities.formatDate(tomorrow, timezone, "MMM dd, yyyy");
  
  //  Create a new sheet in your spreadsheet with tomorrow's date
  spreadsheet.insertSheet(formattedDate);  
  
  // Create a sheet using our active sheet as a template
//  spreadsheet.insertSheet(formattedDate, {template: sheet});
}
