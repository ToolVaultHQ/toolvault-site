// ===== ToolVault App.js =====
// Loads tools from tools.json and displays them as cards

document.addEventListener("DOMContentLoaded", function () {
  loadTools();
});
function loadTools() {
  const grid = document.getElementById("toolGrid");
  fetch("tools.json")
    .then(function (response) {
      if (!response.ok) { throw new Error("Could not load tools.json"); }
      return response.json();
    })
  .then(function (tools) {
      grid.innerHTML = "";
      tools.forEach(function (tool) {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML =
          '<span class="badge">' + (tool.badge || "Recommended") + '</span>' +
          '<h3>' + tool.name + '</h3>' +
          '<p class="tool-category">' + (tool.category || "") + '</p>' +
          '<p>' + tool.description + '</p>' +
          '<a href="' + tool.link + '" class="btn" target="_blank" rel="noopener">View Tool</a>';
        grid.appendChild(card);
      });
    })
  .catch(function (error) {
      grid.innerHTML =
        '<div class="tool-card"><h3>Tools coming soon</h3>' +
        '<p>We are updating our list. Please check back shortly.</p></div>';
      console.error("Error loading tools:", error);
    });
}
