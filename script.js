let notes = [];

function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        notes.push(noteText);
        displayNotes();
        noteInput.value = '';
    }
}

function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        li.dataset.index = index;
        li.addEventListener('click', editNote);
        const deleteButton = document.createElement('span');
        deleteButton.textContent = ' ❌';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', deleteNote);
        li.appendChild(deleteButton);
        noteList.appendChild(li);
    });
}

function deleteNote(event) {
    const index = event.target.parentElement.dataset.index;
    notes.splice(index, 1);
    displayNotes();
}

function editNote() {
    const index = this.dataset.index;
    const newText = prompt('Edit note:', notes[index]);
    if (newText !== null) {
        notes[index] = newText.trim();
        displayNotes();
    }
}
