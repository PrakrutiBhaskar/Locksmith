function checkPassword() {
    const password = document.getElementById("password").value;
    const scoreDiv = document.getElementById("score");
    const strengthDiv = document.getElementById("strength");
    const suggestionsDiv = document.getElementById("suggestions");
    
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
    if (length >= 20) score++; // Extra point for strong length

    // Character diversity scoring
    score += characters.filter(Boolean).length;

    // Bonus if all character categories are present
    if (characters.every(Boolean)) score++;

    // Display score and strength separately
    scoreDiv.textContent = `Score: ${score}/9`;

    let strength = '';
    let color = '';

    // Strength interpretation and color mapping
    if (score <= 2) {
        strength = "Very Weak";
        color = "red"; // deep red
    } else if (score <= 4) {
        strength = "Weak";
        color = "orange"; // reddish orange
    } else if (score <= 5) {
        strength = "Moderate";
        color = "yellow"; // orange
    } else if (score <= 7) {
        strength = "Strong";
        color = "#22c55e"; // green
    } else {
        strength = "Very Strong";
        color = "#16a34a"; // darker green
    }

    strengthDiv.textContent = `Password strength: ${strength}`;
    strengthDiv.style.color = color;

    // Feedback for improvement
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
