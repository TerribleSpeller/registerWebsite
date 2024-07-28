async function sendEmail() {
    const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: 'jasonalexanderyuwono@gmail.com',
            subject: 'Test Email',
            text: 'Hello, this is a test email.',
        }),
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
    } else {
        console.error(result.error);
        alert('Failed to send email');
    }
}
