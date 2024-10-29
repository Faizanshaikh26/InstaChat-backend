<h1>InstaChat - Backend</h1>

<p><strong>InstaChat</strong> is a chat application backend built with Express.js and MongoDB, designed to support real-time messaging, user authentication, friend management, and multimedia messaging. It works with the frontend to provide a complete chat experience.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="about-the-project">About the Project</h2>
<p>The backend server for <strong>InstaChat</strong> handles all core functionalities for the chat application, including user authentication, friend management, multimedia messaging, and real-time notifications via Socket.io. It is built to ensure data security, quick response times, and a seamless user experience.</p>

<h2 id="features">Features</h2>
<ul>
    <li><strong>Authentication:</strong> Secure user login and signup with JWT.</li>
    <li><strong>Real-Time Messaging:</strong> Supports instant messaging using Socket.io.</li>
    <li><strong>Friend Management:</strong> Allows users to send, accept, and manage friend requests.</li>
    <li><strong>Group Chats:</strong> Users can create groups, with only group admins having permissions to change group details.</li>
    <li><strong>Multimedia Support:</strong> Allows users to send images, videos, and documents.</li>
    <li><strong>Profile Management:</strong> Enables users to update their profile information.</li>
</ul>

<h2 id="tech-stack">Tech Stack</h2>
<ul>
    <li><strong>Node.js:</strong> JavaScript runtime environment for server-side development.</li>
    <li><strong>Express.js:</strong> Web application framework for creating RESTful APIs.</li>
    <li><strong>MongoDB:</strong> NoSQL database for storing user, chat, and group data.</li>
    <li><strong>Socket.io:</strong> Real-time communication library for instant messaging functionality.</li>
</ul>

<h3>Key Dependencies</h3>
<ul>
    <li><strong>bcrypt:</strong> Hashes user passwords for secure authentication.</li>
    <li><strong>cloudinary:</strong> Handles cloud-based storage for multimedia files.</li>
    <li><strong>compression:</strong> Compresses HTTP responses for faster load times.</li>
    <li><strong>cookie-parser:</strong> Parses cookies for handling session data.</li>
    <li><strong>cors:</strong> Enables Cross-Origin Resource Sharing.</li>
    <li><strong>dotenv:</strong> Manages environment variables securely.</li>
    <li><strong>express-validator:</strong> Validates and sanitizes input data.</li>
    <li><strong>jsonwebtoken:</strong> Provides token-based authentication using JWT.</li>
    <li><strong>mongoose:</strong> MongoDB object modeling for data storage.</li>
    <li><strong>multer:</strong> Middleware for handling file uploads.</li>
    <li><strong>nodemailer:</strong> Manages email notifications.</li>
</ul>

<h2 id="installation">Installation</h2>
<p>To set up the backend locally, follow these steps:</p>

<h3>Prerequisites</h3>
<ul>
    <li><strong>Node.js:</strong> Install <a href="https://nodejs.org/">Node.js</a> on your machine.</li>
    <li><strong>MongoDB:</strong> Install MongoDB or set up a MongoDB Atlas account.</li>
</ul>

<h3>Steps</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/Faizanshaikh26/InstaChat-backend.git</code></pre>
        <pre><code>cd server</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file with your environment variables:
        <pre><code>
            MONGODB_URI=your_mongodb_uri
            JWT_SECRET=your_jwt_secret
            CLOUDINARY_URL=your_cloudinary_url
            SOCKET_PORT=4000
        </code></pre>
    </li>
</ol>

<h2 id="usage">Usage</h2>
<p>To start the server in development mode:</p>
<pre><code>npm run dev</code></pre>
<p>The server will run on <code>http://localhost:9000</code> by default.</p>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! Follow these steps to contribute:</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a feature branch: <code>git checkout -b feature/new-feature</code>.</li>
    <li>Commit your changes: <code>git commit -m 'Add new feature'</code>.</li>
    <li>Push to the branch: <code>git push origin feature/new-feature</code>.</li>
    <li>Open a pull request.</li>
</ol>

<h2 id="license">License</h2>
<p>Distributed under the MIT License. See <code>LICENSE</code> for more details.</p>

<h2 id="contact">Contact</h2>
<p>For questions or feedback, please contact:</p>
<ul>
    <li><strong>Faizan</strong> - <a href="https://github.com/Faizanshaikh26">@Faizanshaikh26</a> - Faizansheikh8209@gmail.com</li>
</ul>
