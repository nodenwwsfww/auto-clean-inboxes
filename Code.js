const workedLabel = GmailApp.getUserLabelByName('Worked'); // We move each thread (message) to Worked;
function moveAllInboxesToWorked() {
    const nonWorkedThreads = GmailApp.search('Label:Inbox AND NOT Label:Worked');
    nonWorkedThreads.forEach(thread => {
        // Ignore if thread is unread
        if (thread.isUnread()) {
            return;
        }
        if (workedLabel) {
            thread.addLabel(workedLabel);
        }
        thread.moveToArchive();
    });
}
