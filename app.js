document.getElementById("trackButton").addEventListener("click", function () {
  console.log("Button clicked! Sending event to GA4...");
  gtag("event", "button_click", {
    event_category: "Button",
    event_label: "Track Event Button Clicked",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("trackButton");
  if (btn) {
    btn.addEventListener("click", function () {
      console.log("Button clicked! Event listener is working.");
    });
  } else {
    console.log("Button element not found.");
  }
});
