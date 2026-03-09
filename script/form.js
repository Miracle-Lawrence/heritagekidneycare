// Elements
const form = document.getElementById("heritageForm");
const successMsg = document.getElementById("successMsg");
const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("files");
const fileList = document.getElementById("fileList");

// ---------- File Upload Preview ----------
function updateFileList(files) {
  fileList.innerHTML = "";
  Array.from(files).forEach((file) => {
    const li = document.createElement("li");
    li.textContent = file.name;
    li.style.padding = "4px 0";
    li.style.fontSize = "13px";
    li.style.color = "#334a5f";
    li.style.listStyle = "disc inside";
    fileList.appendChild(li);
  });
}

// Drag & drop events
uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.style.background = "#f0f6ff";
  uploadArea.style.borderColor = "#1e88e5";
});

uploadArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  uploadArea.style.background = "#fff";
  uploadArea.style.borderColor = "#d6e0ea";
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  fileInput.files = files;
  updateFileList(files);
  uploadArea.style.background = "#fff";
  uploadArea.style.borderColor = "#d6e0ea";
});

// Click to trigger input
uploadArea.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => updateFileList(fileInput.files));

// ---------- Form Validation & Submission ----------
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic validation
  let valid = true;
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const confirmEmail = document.getElementById("confirmEmail").value.trim();
  const checkbox = document.getElementById("confirmUpload").checked;

  // Check required fields
  if (!firstName || !lastName || !email || !confirmEmail) valid = false;

  // Check email match
  if (email !== confirmEmail) {
    alert("Emails do not match.");
    valid = false;
  }

  // Check checkbox
  if (!checkbox) {
    alert("Please confirm that you have uploaded all required documents.");
    valid = false;
  }

  // Check at least one file uploaded
  if (fileInput.files.length === 0) {
    alert("Please upload at least one supporting document.");
    valid = false;
  }

  if (valid) {
    successMsg.style.display = "block";
    form.reset();
    fileList.innerHTML = "";
    // Reset floating labels manually
    document
      .querySelectorAll(".floating-label input, .floating-label select")
      .forEach((el) => {
        el.dispatchEvent(new Event("input"));
      });
  }
});
