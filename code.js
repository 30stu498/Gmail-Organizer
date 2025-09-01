function labelImportantEmails() {
  const senders = [
    { email: "example1@gmail.com", label: "example1"},
    { email: "example2@outlook.com", label: "example2"},
    { email: "example3@example.com", label: "example3"}
  ];
  for (let i = 0; i < senders.length; i++) {
    const sender = senders[i];

    let label = GmailApp.getUserLabelByName(sender.label);
    if (!label) {
      label = GmailApp.createLabel(sender.label);
    }
    const threads = GmailApp.search('is:unread from:' + sender.email);
    for (let j = 0; j < threads.length; j++) {
      threads[j].addLabel(label);
      threads[j].moveToArchive();
    }
    Logger.log(threads.length + " emails from " + sender.email + " labeled " + sender.label + " and archived.");
  }
}
