const password = document.getElementById('password');
const passwordLine = document.getElementById('password-line');
const strengthText = document.getElementById('strength-text');
const togglePassword = document.getElementById('toggle-password');

password.addEventListener('input', () => {
    const strength = checkPasswordStrength(password.value);
    updatePasswordLine(strength);
    updateStrengthText(strength);
});

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;
    return strength;
}

function updatePasswordLine(strength) {
    const passwordLine = document.getElementById('password-line');
    passwordLine.classList.remove('weak-line', 'moderate-line', 'strong-line');
    
    if (strength <= 2) {
        passwordLine.classList.add('weak-line');
    } else if (strength === 3 || strength === 4) {
        passwordLine.classList.add('moderate-line');
    } else if (strength === 5) {
        passwordLine.classList.add('strong-line');
    }
}

function updateStrengthText(strength) {
    strengthText.classList.remove('weak-text', 'moderate-text', 'strong-text');
    
    if (strength <= 2) {
        strengthText.textContent = 'Zayıf Şifre';
        strengthText.classList.add('weak-text');
    } else if (strength === 3 || strength === 4) {
        strengthText.textContent = 'Orta Şifre';
        strengthText.classList.add('moderate-text');
    } else if (strength === 5) {
        strengthText.textContent = 'Güçlü Şifre';
        strengthText.classList.add('strong-text');
    } else {
        strengthText.textContent = '';
    }
}
