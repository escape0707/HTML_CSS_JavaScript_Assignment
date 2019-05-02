let experienceList = document.getElementById('experienceList');
let button_addEntry = document.getElementById('button_addEntry');
let button_removeEntry = document.getElementById('button_removeEntry');


let initEntryCount = 3;
let entryCount = 0; // Counting from 0. 
while (entryCount < initEntryCount) {
  appendEntry();
}

button_addEntry.onclick = function () {
  appendEntry();
}

button_removeEntry.onclick = function () {
  removeEntry();
}

function appendEntry() {
  let br = document.createElement('br');
  let entry = document.createElement('textarea');
  entry.name = 'cv_experience' + entryCount.toString();
  entry.id = 'experience' + entryCount.toString();
  entry.placeholder = '请填写学习与工作履历，如需增删条目，请点击“++”，“--”按钮。';

  experienceList.appendChild(br);
  experienceList.appendChild(entry);

  entryCount++;
}

function removeEntry() {
  if (entryCount > 1) {
    let id = 'experience' + (--entryCount).toString();
    let entry = document.getElementById(id);
    let br = experienceList.getElementsByTagName('br')[entryCount];

    experienceList.removeChild(entry);
    experienceList.removeChild(br);
  }
}