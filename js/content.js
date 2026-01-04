const data = JSON.parse(localStorage.getItem("siteContent")) || {
  title: "Welcome to My Website",
  description: "This is my website description."
};

document.getElementById("siteTitle").innerText = data.title;
document.getElementById("siteDesc").innerText = data.description;
