const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1jElEI8IUjCscc01GG-h5nc3BQu9xOtBgimlvTWS6qEM/edit#gid=0");
const sheet = sheets.getSheetByName('Sheet1');
function doPost(e){
  let data = e.parameter;
  sheet.appendRow([data.name, data.email, data.phone, data.submissionTime]);
  return ContentService.createTextOutput("Success");
}