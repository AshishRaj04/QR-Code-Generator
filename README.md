<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        p {
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>QR Code Generator</h1>
        <p>Welcome to the QR Code Generator! This simple command-line tool allows you to create QR codes for your favorite URLs.</p>

        <h2>How it Works</h2>
        <ol>
            <li>Install the required npm modules: <code>inquirer</code> and <code>qr-image</code>.</li>
            <li>Run the program in your terminal.</li>
            <li>Enter the URL for which you want to generate a QR code.</li>
            <li>The program will generate a PNG file containing the QR code in the root directory of your project.</li>
            <li>You can scan the QR code with a compatible app or device, and it will redirect you to the specified URL.</li>
        </ol>

        <h2>Getting Started</h2>
        <p>Follow these steps to get started with the QR Code Generator:</p>
        <pre>
            <code>
                # Clone the repository
                git clone https://github.com/yourusername/qr-code-generator.git
                
                # Navigate to the project directory
                cd qr-code-generator
                
                # Install the required npm modules
                npm install
                
                # Run the program
                npm start
            </code>
        </pre>

        <h2>Dependencies</h2>
        <p>This project relies on the following npm modules:</p>
        <ul>
            <li><a href="https://www.npmjs.com/package/inquirer">inquirer</a></li>
            <li><a href="https://www.npmjs.com/package/qr-image">qr-image</a></li>
        </ul>

        <h2>License</h2>
        <p>AshishRaj04</p>
    </div>
</body>
</html>
