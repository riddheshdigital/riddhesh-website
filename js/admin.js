function saveContent() {
  const content = {
    title: document.getElementById("title").value,
    description: document.getElementById("desc").value
  };

  localStorage.setItem("siteContent", JSON.stringify(content));
  alert("Content Updated!");
}

const pass = prompt("Enter admin password");
if (pass !== "admin123") {
  document.body.innerHTML = "Access Denied";
}
