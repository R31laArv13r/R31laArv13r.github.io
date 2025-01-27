// Function to load and display notes
function loadNotes() {
    const notesList = document.getElementById('notesList');
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('card');
        noteItem.innerHTML = `
            <div class="content">${note}</div>
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        `;
        noteItem.addEventListener('click', () => showNoteDetails(note));
        notesList.appendChild(noteItem);
    });
}

// Function to show the note details in a modal
function showNoteDetails(note) {
    const noteModal = document.getElementById('noteModal');
    const noteContent = document.getElementById('noteContent');
    noteContent.textContent = note;
    noteModal.style.display = 'flex';
}

// Function to close the note modal
function closeModal() {
    const noteModal = document.getElementById('noteModal');
    noteModal.style.display = 'none';
}

// Function to add a new note
function addNote() {
    const newNote = document.getElementById('newNote').value;
    if (!newNote) return;

    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));

    loadNotes();
    document.getElementById('newNote').value = '';
}

// Function to delete a note
function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));

    loadNotes();
}

// Function to load and display reminders
function loadReminders() {
    const remindersList = document.getElementById('remindersList');
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    remindersList.innerHTML = '';
    reminders.forEach((reminder, index) => {
        const reminderItem = document.createElement('div');
        reminderItem.classList.add('card');
        reminderItem.innerHTML = `
            <div class="content">${reminder.content} - ${new Date(reminder.dateTime).toLocaleString()}</div>
            <button class="delete-btn" onclick="deleteReminder(${index})">Delete</button>
        `;
        remindersList.appendChild(reminderItem);
    });
}

// Function to add a new reminder
function addReminder() {
    const reminderContent = document.getElementById('newReminder').value;
    const reminderDateTime = document.getElementById('reminderDate').value;

    if (!reminderContent || !reminderDateTime) return;

    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.push({ content: reminderContent, dateTime: reminderDateTime });
    localStorage.setItem('reminders', JSON.stringify(reminders));

    loadReminders();
    document.getElementById('newReminder').value = '';
    document.getElementById('reminderDate').value = '';
}

// Function to delete a reminder
function deleteReminder(index) {
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.splice(index, 1);
    localStorage.setItem('reminders', JSON.stringify(reminders));

    loadReminders();
}

// Event listeners
document.getElementById('addNoteBtn').addEventListener('click', addNote);
document.getElementById('addReminderBtn').addEventListener('click', addReminder);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);

// Load notes and reminders on page load
window.onload = () => {
    loadNotes();
    loadReminders();
};
