document.getElementById('registrationForm').addEventListener('submit', function(event) {
        // 1. Prevent default form action
            event.preventDefault();

                // 2. Get input values from form fields
                    const password = document.getElementById('password').value;
                        const confirmPassword = document.getElementById('confirmPassword').value;
                            const email = document.getElementById('studentEmail').value;
                                const messageBox = document.getElementById('formMessage');

                                    // 3. Reset message element status
                                        messageBox.className = "message-box hidden";
                                            messageBox.textContent = "";

                                                // 4. Validate matching passwords
                                                    if (password !== confirmPassword) {
                                                            messageBox.textContent = "Error: Passwords do not match. Please verify.";
                                                                    messageBox.classList.remove('hidden');
                                                                            messageBox.classList.add('error');
                                                                                    return;
                                                                                        }

                                                                                            // 5. Validate school student email address extension
                                                                                                if (!email.endsWith('@student.funaab.edu.ng')) {
                                                                                                        messageBox.textContent = "Error: Registration requires a valid university email matching '@student.funaab.edu.ng'.";
                                                                                                                messageBox.classList.remove('hidden');
                                                                                                                        messageBox.classList.add('error');
                                                                                                                                return;
                                                                                                                                    }

                                                                                                                                        // 6. Output successful action response
                                                                                                                                            messageBox.textContent = "Registration successful! Account activated.";
                                                                                                                                                messageBox.classList.remove('hidden');
                                                                                                                                                    messageBox.classList.add('success');

                                                                                                                                                        // 7. Clear fields automatically
                                                                                                                                                            document.getElementById('registrationForm').reset();
                                                                                                                                                            });

