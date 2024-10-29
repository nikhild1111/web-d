var a=prompt("Enter your password");

// let k=a;
// // There is a mistake in the regex pattern you're using. Specifically, (?=.*\w_) is incorrect because \w is used to match any word character (letters, digits, or underscores), and the underscore (_) is already part of \w. You should instead use (?=.*[\W_]) to match non-word characters (i.e., special characters) and underscores.
// const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
// if (regex.test(a)) {
//     alert("Password is correct!");
// } else {
//     alert("Enter the correct password. It must be at least 8 characters long, start with an uppercase letter, and contain at least one lowercase letter, one digit, and one special character.");
// }

// another why to give write spesific error

function validatePassword(password) {
    let messages = [];

    if (password.length < 8) {
        messages.push("Your password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
        messages.push("Your password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        messages.push("Your password must contain at least one lowercase letter.");
    }
    if (!/\d/.test(password)) {
        messages.push("Your password must contain at least one digit.");
    }
    if (!/[\W_]/.test(password)) {
        messages.push("Your password must contain at least one special character (e.g., !, @, #, $, %, ^, &, *).");
    }

    if (messages.length == 0) {//if we write === then it also check address
        return "Password is valid!";
    } else {
        return messages.join("\n");
    }
}

var password = prompt("Enter your password");
alert(validatePassword(password));

