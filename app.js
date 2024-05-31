document.getElementById("trackButton").addEventListener("click", function () {
  console.log("Button clicked! Sending event to GA4...");
  gtag("event", "button_click", {
    event_category: "Button",
    event_label: "Track Event Button Clicked",
  });
});
