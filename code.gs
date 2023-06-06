var webhookmessage = " ส่งแบบฟอร์มแล้ว"
var discordwebhook = "https://discord.com/api/webhooks/************/******************************************************"

function getLatestAnswerFromSheet() {
  // Open the Google Sheet by its ID
  var sheetId = "1P_tcKg5iH4d2gN1IltyFVrNqtIAiZaxTBuRyTiE0wEA";
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

  // Get the last row with data in column F
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("F" + lastRow);
  var latestAnswer = range.getValue();

  return latestAnswer;
}


function myFunction() {
  // Get the response value from the form (replace "responseValue" with the actual variable holding the response)
  var responseValue = getLatestAnswerFromSheet(); // Retrieve the latest answer

  // Create the message content
  var messageContent = responseValue + webhookmessage;

  // Create a payload object with the message content
  var payload = {
    content: messageContent
  };

  // Send the payload to the Discord webhook
  var webhookUrl = discordwebhook;
  var options = {
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  UrlFetchApp.fetch(webhookUrl, options);
}
