document.getElementById("trackButton").addEventListener("click", function () {
  gtag("event", "button_click", {
    event_category: "Button",
    event_label: "Track Event Button Clicked",
  });
});
