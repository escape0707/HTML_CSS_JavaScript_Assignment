// 确认正确性后方可使用提交按钮
let checkbox_confirm = document.getElementById('confirm');
let button_confirm = document.getElementById('button_confirm');

button_confirm.disabled = !checkbox_confirm.checked;

checkbox_confirm.onchange = function () {
  button_confirm.disabled = !checkbox_confirm.checked;
}