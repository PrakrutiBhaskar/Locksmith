
const passwordInput = document.getElementById("password");
const scoreDiv = document.getElementById("score");
const strengthDiv = document.getElementById("strength");
const suggestionsDiv = document.getElementById("suggestions");

function checkPassword() {
    const password = passwordInput.value;

    // Reset output
    suggestionsDiv.innerHTML = '';
    scoreDiv.textContent = '';
    strengthDiv.textContent = '';

    // Character type checks
    const upper_case = /[A-Z]/.test(password);
    const lower_case = /[a-z]/.test(password);
    const special = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const digits = /\d/.test(password);

    const characters = [upper_case, lower_case, special, digits];
    const length = password.length;
    let score = 0;

    // Length scoring
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (length >= 20) score++;

    // Character diversity scoring
    score += characters.filter(Boolean).length;

    // Bonus if all character categories are present
    if (characters.every(Boolean)) score++;

    // Display score
    scoreDiv.textContent = `Score: ${score}/9`;

    // Strength interpretation
    let strength = '';
    let color = '';

    if (score <= 2) {
        strength = "Very Weak";
        color = "red"; 
    } else if (score <= 4) {
        strength = "Weak";
        color = "orange"; 
    } else if (score <= 5) {
        strength = "Moderate";
        color = "yellow"; 
    } else if (score <= 7) {
        strength = "Strong";
        color = "#22c55e";
    } else {
        strength = "Very Strong";
        color = "#16a34a"; 
    }

    strengthDiv.textContent = `Password strength: ${strength}`;
    strengthDiv.style.color = color;

    // Feedback
    if (score <= 5) {
        let suggestions = "<strong>Suggestions:</strong><br>";
        if (!upper_case) suggestions += "- Add uppercase letters.<br>";
        if (!lower_case) suggestions += "- Add lowercase letters.<br>";
        if (!digits) suggestions += "- Include numbers.<br>";
        if (!special) suggestions += "- Use special characters (!@#$...).<br>";
        if (length < 12) suggestions += "- Consider using at least 12 characters.<br>";
        if (characters.filter(Boolean).length < 4) suggestions += "- Use all character types for maximum strength.<br>";
        if (length < 20) suggestions += "- Extend your password to 20+ characters to make it very strong.<br>";
        suggestionsDiv.innerHTML = suggestions;
    }
}

// Trigger check when Enter is pressed
passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // avoid form submission if inside a form
        checkPassword();
    }
});

