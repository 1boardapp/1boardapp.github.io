function redirect() {
    console.log("Redirecting to Oneboard...");
    var appUrl = "Oneboard://";
    var fallbackUrl = "https://apps.apple.com/de/app/oneboard/id6474271576"; // Replace with your fallback URL

    // Attempt to open the app
    window.location.href = appUrl;

    // Set a timeout to redirect to the fallback URL if the app doesn't open
    setTimeout(function() {
        if (!document.hidden) {
            window.location.href = fallbackUrl;
        }
    }, 2000); // Wait for 2 seconds before redirecting
}

redirect("Oneboard://");