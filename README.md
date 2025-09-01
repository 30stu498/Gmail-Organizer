# Gmail-Organizer
### Created by Vihan Raman

## What?

This simple Javascript code is a program that when run on Google Apps Script, can automatically seperate new emails from your cluttered inbox to organized "folders" called labels that are manually set.

## Why?

A lot of us have had the problem of opening up your gmail and seeing *999+ new messages* on your Inbox tab, full of subscriptions, notifications, verification codes, and random scam emails. And then, we are supposed to findd actual important emails in this mess. It's time to declutter your Inbox.

## Setting up

To get started, first open [Google Apps Script](https://script.google.com/home/). Google Apps Script is the main IDE where we can test and deploy programs like our organizer.

### Step 1: Creating a New Project

Pretty straightforward, press the *New Project* button on the top-left corner

### Step 2: Integrating the Code into the New Project

Next up, we now should copy paste the [code.js](https://github.com/30stu498/Gmail-Organizer/blob/main/code.js) code into our new project, and save our changes (**Ctrl+S**)

### Step 3: Managing your labels

Now, we have to manage our labels. Unfortunately, this code doesn't automatically generate labels based on some sort of AI (potential new version/update???) and we have to manually set these.

In the `const senders` variable, we have example emails and labels. Replace these with your preferred emails, and create more "senders" if your want to. 

To create a new "sender", make sure that there is a comma at the previous sender's end curly bracket. Next, use the template

`{ email: "SENDER_EMAIL_HERE", label: "LABEL_NAME_HERE"}`.

Remember to remove the comma if it is the last "sender", and keep the comma if it is not.

### Step 4: Testing

To test, first rememeber that you have saved your code (**CTRL+S**). Next, press the *Run* Button above the code.

Google Apps Script will have a pop-up saying *Authorization Required*. Click *Review Permissions* to continue.

Next, you will have to sign in to your google account. Be sure to choose the google account that you have writted the script on.

Following that, it will prompt you saying *Google Hasn't Verified this app*. Click *Advanced*, and then *Go to "PROJECT_NAME"(unsafe)*

Next, press *Continue*.

Now, all the permissions are allowed. Press *Run* to finally test your code. Make sure to send your test email before you run the code and leave the email unread.

To see if the test is successful or not, check the console. If it says "1 emails from [TEST_EMAIL] labeled [TEST_LABEL] and archived.", congrats! Your program functions correctly. The next step is full integration.

If it says there are 0 emails or there is an error, be sure to check your code again, as there is probably a typo.

### Step 5: Full integration

Instead of pressing the *Run* button every minute manually, which would be very tedious, we can set up something called a "trigger" to automate it.

In your Google Apps Script Project, hover over the sidebar and press the tab named "Triggers". Press the button *Add Trigger*.

As you can see, most of the Dropdowns are filled out. The only thing you have to fill out is the type of time-based trigger, which I would reccomend to choose the *Minutes timer* to make sure all the random emails are filtered out. Finish this trigger by pressing *Save*, and you have your organizer set up.

## DONE!

After some work and permission authorization, you have now fully integrated a Gmail organizer! 

You can always add and remove labels as you choose to. Now, whenever you look at your Gmail, instead of seeing a cluttered inbox of unread notifications, you see a clean space where all your emails are seperated into different folders. Finally, you can brag to your friends how organized you are. 

### If you liked this repo and you thought it was useful, please consider a star! It really benefits me.
