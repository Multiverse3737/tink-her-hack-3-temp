function showToast() {
    var toast = document.getElementById("toast");

    // Add 'show' class to display the toast
    toast.className = "toast show";

    // Remove the 'show' class after 3 seconds to hide it
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}