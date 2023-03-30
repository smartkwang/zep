const npcDialog = document.getElementById("npc-dialog");
const npcDialogText = document.getElementById("npc-dialog-text");
const npcDialogClose = document.getElementById("npc-dialog-close");

function showDialog(text) {
  npcDialogText.textContent = text;
  npcDialog.style.display = "block";
}

function hideDialog() {
  npcDialog.style.display = "none";
}

// Example usage:
showDialog("안녕? 이 숲 끝으로 가면 빨간 모자 집이 있어.");
npcDialogClose.addEventListener("click", hideDialog);
