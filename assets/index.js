////////////---Search By Author----/////////////////////////

const searchByAuthor = () => {
  const searchAuthor = document
    .getElementById("search-name")
    .value.toLowerCase();

  const issueDetails = document.querySelectorAll("#issue-details");
  for (let issueDetail of issueDetails) {
    const issueAuthorSpan = issueDetail.querySelector("#issueAuthor");
    if (issueAuthorSpan.textContent.toLowerCase().includes(searchAuthor)) {
      issueDetail.style.display = "block";
    } else {
      issueDetail.style.display = "none";
    }
  }
};

const searchNameInput = document.getElementById("search-name");
searchNameInput.addEventListener("keyup", searchByAuthor);

////////////---Search By Title----/////////////////////////

const searchByTitle = () => {
  const searchTitle = document
    .getElementById("search-title")
    .value.toLowerCase();

  const issueDetails = document.querySelectorAll("#issue-details");
  for (let issueDetail of issueDetails) {
    const issueTitleSpan = issueDetail.querySelector("#issueTitle");
    if (issueTitleSpan.textContent.toLowerCase().includes(searchTitle)) {
      issueDetail.style.display = "block";
    } else {
      issueDetail.style.display = "none";
    }
  }
};

const searchTitleInput = document.getElementById("search-title");
searchTitleInput.addEventListener("keyup", searchByTitle);

////////////---Search By Description----/////////////////////////

const searchByDescription = () => {
  const searchDescription = document
    .getElementById("search-description")
    .value.toLowerCase();

  const issueDetails = document.querySelectorAll("#issue-details");
  for (let issueDetail of issueDetails) {
    const issueDescriptionSpan = issueDetail.querySelector("#issueDescription");
    if (
      issueDescriptionSpan.textContent.toLowerCase().includes(searchDescription)
    ) {
      issueDetail.style.display = "block";
    } else {
      issueDetail.style.display = "none";
    }
  }
};

const searchDescriptionInput = document.getElementById("search-description");
searchDescriptionInput.addEventListener("keyup", searchByDescription);

///////----selected by labels-----/////////

const searchByLabels = () => {
  const labels = document.querySelectorAll(
    ".labels-container input[type=checkbox]"
  );
  const selectedLabels = [];

  for (let label of labels) {
    if (label.checked) {
      selectedLabels.push(label.value.toLowerCase());
    }
  }

  const issueDetails = document.querySelectorAll("#issue-details");
  for (let issueDetail of issueDetails) {
    const issueLabelsSpan = issueDetail.querySelector("#issueLabels");
    if (
      selectedLabels.length === 0 ||
      selectedLabels.some((label) =>
        issueLabelsSpan.textContent.toLowerCase().includes(label)
      )
    ) {
      issueDetail.style.display = "block";
    } else {
      issueDetail.style.display = "none";
    }
  }
};

const labelsInput = document.querySelectorAll(
  ".labels-container input[type=checkbox]"
);
for (let labelInput of labelsInput) {
  labelInput.addEventListener("change", searchByLabels);
}
