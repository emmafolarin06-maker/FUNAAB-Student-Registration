document.getElementById('registrationForm').addEventListener('submit', function(event) {
        // Intercept default browser action
            event.preventDefault();

                // Data elements selection mapping
                    const password = document.getElementById('password').value;
                        const confirmPassword = document.getElementById('confirmPassword').value;
                            const email = document.getElementById('studentEmail').value;
                                const feedbackBox = document.getElementById('formFeedback');

                                    // Default configuration refresh
                                        feedbackBox.className = "status-message hidden";
                                            feedbackBox.textContent = "";

                                                // 1. Structural Password parity checking
                                                    if (password !== confirmPassword) {
                                                            feedbackBox.textContent = "Validation Failure: Creation Passwords do not match.";
                                                                    feedbackBox.classList.remove('hidden');
                                                                            feedbackBox.classList.add('error');
                                                                                    return;
                                                                                        }

                                                                                            // 2. Strict University Email Domain format requirement validation
                                                                                                if (!email.endsWith('@student.funaab.edu.ng')) {
                                                                                                        feedbackBox.textContent = "Access Blocked: Please use your designated university email ending with '@student.funaab.edu.ng'.";
                                                                                                                feedbackBox.classList.remove('hidden');
                                                                                                                        feedbackBox.classList.add('error');
                                                                                                                                return;
                                                                                                                                    }

                                                                                                                                        // 3. Execution confirmation state simulation trigger
                                                                                                                                            feedbackBox.textContent = "Verification Successful! Your account has been initialized.";
                                                                                                                                                feedbackBox.classList.remove('hidden');
                                                                                                                                                    feedbackBox.classList.add('success');

                                                                                                                                                        // Flush form layout values after confirmation complete
                                                                                                                                                            document.getElementById('registrationForm').reset();
                                                                                                                                                            });
                                                                                                                                                            
})