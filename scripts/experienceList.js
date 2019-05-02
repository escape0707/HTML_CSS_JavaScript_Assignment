const experienceList = document.getElementById('experienceList');
const button_addEntry = document.getElementById('button_addEntry');
const button_removeEntry = document.getElementById('button_removeEntry');


const initEntryCount = 3;
let entryCount = 0; // Counting from 0. 
while (entryCount < initEntryCount) {
  appendEntry();
}
// 必须填写至少一条经历
document.getElementById('experience0').required = true;

button_addEntry.onclick = function () {
  appendEntry();
}

button_removeEntry.onclick = function () {
  removeEntry();
}

function appendEntry() {
  const entry = document.createElement('textarea');
  entry.name = 'cv_experience' + entryCount.toString();
  entry.id = 'experience' + entryCount.toString();
  entry.placeholder = '请填写学习与工作履历，如需增删条目，请点击“++”，“--”按钮。';

  experienceList.appendChild(document.createElement('br'));
  experienceList.appendChild(entry);

  entryCount++;
}

function removeEntry() {
  if (entryCount > 1) {
    const id = 'experience' + (--entryCount).toString();
    const entry = document.getElementById(id);

    experienceList.removeChild(entry.previousElementSibling);
    experienceList.removeChild(entry);
  }
}