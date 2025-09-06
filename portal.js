(function() {
    var onLoad = function() {
        var formElement = document.getElementById("loginform");
        if (formElement != null) {
            var validateForm = function(event) {
                event.preventDefault();
                var password = document.getElementById("password").value;
                if (password === "") {
                    alert("Please enter the Wi-Fi password.");
                } else if (password.length < 8) {
                    alert("The password must be at least 8 characters.");
                } else {
                    formElement.submit();
                }
            };
            formElement.addEventListener("submit", validateForm);
        }
    };

    document.readyState != 'loading' ? onLoad() : document.addEventListener('DOMContentLoaded', onLoad);
})();

function redirect() {
    document.location = "index.htm";
}