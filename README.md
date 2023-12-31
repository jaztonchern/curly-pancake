# curly-pancake

This repository is a page containing my personal information.

The contents of the page can be found and edited in the *index.html* file.

The contents can be viewed on https://jaztonchern.github.io/curly-pancake/. 

If changes are made and committed, the site will be updated if there are no errors.

</br></br>

Below documents how to edit the webpage locally and push to GitHub after.

## 1. Clone the repository to a local device

`git clone https://github.com/jaztonchern/curly-pancake`

## 2. Make edits to the content

Changes can be made to the *index.html* file from wherever it has been downloaded to. 

## 3. Build the commit space

Enter the directory of the cloned repository `cd curly-pancake`

Add file to the commit space `git add <filename>`, and replace `<filename>` with any relevant name for your container.

## 4. Commit the changes

This can be done using `git commit -m "Commit message"`, where "Commit message" can be replaced with any relevant message.

## 5. Push Changes: 

Finally, push the committed changes to the remote repository. Use the following command: `git push -u origin main`

### Note

This repository consists of two simple DevOps workflows, *telegram.yml* and *test.yml*, that is executed whenever a change is committed to the **main** branch of this repository.

When a change is committed to the main branch of this repository, the following message will be sent to my telegram account via a telegram bot: "A commit has been made to the repository!" 

If changes were made to *index.html* and committed, the html syntax will be checked to evaluate if there are any errors. Depending on whether there are any errors, one of the following message will be sent to my telegram account via the same bot: 

* "Deployment to GitHub Pages was successful!" 

* "Deployment unsuccessful ):"

This is an example of what the message will look like:</br>
<img width="414" alt="Screenshot 2023-06-21 at 15 11 49" src="https://github.com/jaztonchern/curly-pancake/assets/88361707/ada4854a-cf33-4c2f-bece-994efc4738b9"></br>
  
  
  
**DO NOT** edit the following GitHub secrets:
* TELEGRAM_BOT - This GitHub secret points to the HTTP API of the telegram bot that sends out the automated messages.
</br></br>

The following GitHub secrets need to be updated in order for this to work:
* TELEGRAM_ID - This refers to the ID number of the telegram account, **NOT** the telegram username.
</br>
Here are the steps to obtain the ID number in the Telegram app:  </br>
  
</br>1. Search for *@userinfobot* in the search bar.</br>
<img width="297" alt="Screenshot 2023-06-21 at 15 41 53" src="https://github.com/jaztonchern/curly-pancake/assets/88361707/64411d84-be51-417f-b5a4-2bce096ebc0a"></br>
</br>2. Click on "Start"</br>
<img width="435" alt="Screenshot 2023-06-21 at 15 43 14" src="https://github.com/jaztonchern/curly-pancake/assets/88361707/a6c0635d-d1d6-4a0b-bf59-b6a1c941902d"></br>
</br>3. You will find your ID number beside the "Id" header.
