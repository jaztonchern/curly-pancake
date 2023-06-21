# curly-pancake

This repository consists of a simple workflow that is executed whenever a change is committed to this repository.

When a change is committed to the main branch of this repository, the following message will be sent to my telegram account via a telegram bot: "A commit has been made to the repository!"

This is an example of the message:</br>
<img width="414" alt="Screenshot 2023-06-21 at 15 11 49" src="https://github.com/jaztonchern/curly-pancake/assets/88361707/ada4854a-cf33-4c2f-bece-994efc4738b9"></br>

The following GitHub secrets need to be updated in order for this to work:
* TELEGRAM_ID - This refers to the ID number of the telegram account, <strong>NOT</strong> the telegram username.

Here are the steps to obtain the ID number in the Telegram app.

</br>1. Search for userinfobot in the search bar, as shown below.</br>
<img width="297" alt="Screenshot 2023-06-21 at 15 41 53" src="https://github.com/jaztonchern/curly-pancake/assets/88361707/64411d84-be51-417f-b5a4-2bce096ebc0a"></br>
</br>2. Click on "Start"</br>
<img width="435" alt="Screenshot 2023-06-21 at 15 43 14" src="https://github.com/jaztonchern/curly-pancake/assets/88361707/a6c0635d-d1d6-4a0b-bf59-b6a1c941902d"></br>
</br>3. You will find your ID number beside the "Id" header.  
  
<strong>DO NOT</strong> edit the following GitHub secrets:
* TELEGRAM_BOT - This GitHub secret points to the HTTP API of the telegram bot that sends out the automated messages.

