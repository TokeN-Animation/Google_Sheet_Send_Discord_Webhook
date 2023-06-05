# Google Sheet to Discord Webhook Integration

This project allows you to automate the process of retrieving the latest answer from a specific column in a Google Sheet and sending it to a Discord webhook. It can be useful for forwarding form responses or other data from a Google Sheet to a Discord channel.

## Prerequisites

- Google account with access to Google Sheets and Google Apps Script
- Discord account with permissions to create and manage webhooks

## Setup

1. Clone or download this repository.

2. Open the Google Sheets web application and create a new spreadsheet or open an existing one.

3. Note down the **ID** of the Google Sheet from its URL. It is the alphanumeric string between `d/` and `/edit` in the URL.

4. In the `script.js` file, replace the following variables:

   - `webhookmessage`: Add your desired message to append to the latest answer.
   - `discordwebhook`: Replace with the URL of your Discord webhook.

5. Save the `script.js` file.

6. Open the Google Apps Script editor by going to "Tools" > "Script editor" in your Google Sheet.

7. In the script editor, go to "File" > "Project properties" and copy the **Script ID**.

8. In the `clasp.json` file, replace the `scriptId` value with the copied **Script ID**.

9. Install [Node.js](https://nodejs.org) if you haven't already.

10. Install the Clasp command-line tool by running the following command in your terminal or command prompt:

    ```shell
    npm install -g @google/clasp
    ```

11. Authenticate Clasp with your Google account by running the following command:

    ```shell
    clasp login
    ```

12. Navigate to the project directory in your terminal or command prompt.

13. Run the following command to create a new Apps Script project:

    ```shell
    clasp create --type standalone --rootDir ./src
    ```

14. Deploy the Apps Script project by running the following command:

    ```shell
    clasp deploy
    ```

15. In the output of the previous command, copy the **Deployment ID**.

16. Open the `appsscript.json` file and replace the `scriptId` and `webapp.url` values with the **Script ID** and **Deployment ID** respectively.

17. Save the `appsscript.json` file.

18. Enable the Apps Script API by visiting the following link and clicking on the "Enable" button:

    [Enable Apps Script API](https://script.google.com/home/usersettings)

19. In the Google Apps Script editor, go to "Publish" > "Deploy as web app". Choose the following settings:

    - Project version: New
    - Execute the app as: Me
    - Who has access to the app: Anyone, even anonymous

20. Click the "Deploy" button and copy the web app URL generated.

21. In your Discord server, create a new webhook by following the instructions in the [Discord documentation](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).

22. Replace the `YOUR_WEB_APP_URL` placeholder in the webhook URL with the copied web app URL from step 20.

23. Save the changes.

## Usage

1. Make sure the Google Sheet and webhook are properly configured.

2. Test the integration by submitting a response to your Google Form or updating the Google Sheet with data.

3. The latest answer from the specified column will be sent to the Discord channel through the webhook.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
