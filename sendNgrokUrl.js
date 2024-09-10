const axios = require('axios');

// Your external API endpoint (Replace with your actual API URL)
const EXTERNAL_API_URL = 'https://39343eaf-3ef0-4bce-9d26-caa730c7e7f8-00-2grgov8crrtd2.kirk.replit.dev/update-ngrok-url';

// Function to fetch ngrok public URL and send it to external API
async function fetchAndSendNgrokUrl() {
    try {
        // Fetch ngrok URL from localhost API
        const response = await axios.get('http://localhost:4040/api/tunnels');
        
        // Extract the public URL from the response
        const publicUrl = response.data.tunnels[0].public_url;

        console.log('Public ngrok URL:', publicUrl);

        // Send the ngrok URL to the external API
        await axios.post(EXTERNAL_API_URL, {
            ngrokUrl: publicUrl
        });

        console.log('ngrok URL sent to external API successfully');
    } catch (error) {
        console.error('Error fetching or sending ngrok URL:', error.message);
        process.exit(1);
    }
}

// Call the function
fetchAndSendNgrokUrl();
