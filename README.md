# Favoura | IOU Tracker Server
The back-end server for the Favoura IOU tracker web application. This application runs on Node.JS and makes use of __________ .

For a video tutorial on how to setup and run this server, see this video: ________________ <br>


<h2>Application contents:</h2>

<h3>ReqHandlers Directory</h3>
<ul> 
  <li><b>GET-Handlers</b> - A folder containing the GET handlers used in the app.</li>
  <li><b>POST-Handlers</b> - A folder containing the POST handlers used in the app.</li>
</ul>

<h3>Utility Directory</h3>
<ul>
  <li><b>appUtil.js</b> - Provides functionality used throughout the code base, such as ________________</li>
</ul>
  
<h3>App Working Directory</h3>
<ul>
  <li><b>Node-Modules</b> - Generated when running 'npm install'. A folder containing the npm module dependencies used by the application.</li>
  <li><b>server.js</b> - The main server file that utilises Express to start a web server.</li>
  <li><b>package.json</b> - Package.json file used with NPM.</li>
  <li><b>package-lock.json</b> - Package-lock.json file used with NPM.</li>
</ul>

Installation and Usage
----------------------
<h3>Instructions:</h3>
<ol>
  <li>Clone this repository.</li>
  <li>In the newly cloned repository, open your command line and run the 'npm install' command to download the required modules.</li>
  <li>Run the 'npm run server' command to run the server.</li>
  <li>The server is now ready. Try out the following unauthenticated REST requests below.</li>
  <li>To test out the authenticated routes, run the server alongside the Favoura front-end web application and then generate an access token by logging in.</li>
</ol>



<h2>HTTP REST Routes (unauthenticated):</h2>

    GET  /routeBeHere
    
    GET  /routeBeHere
    
    POST /routeBeHere

<h2>HTTP REST Routes (authenticated):</h2>

    GET  /routeBeHere
    
    GET  /routeBeHere
    
    POST /routeBeHere

## License

AIP-A2-IOU-Tracker-Server is copyright (c) 2020, Aryan Nateghnia <38933061+aryannateq@users.noreply.github.com>.
