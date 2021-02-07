# Dummydog - Send Test Logs & Events

Dummydog allows you to ship "dummy" logs and events to your Datadog sandbox for testing. You can shape up logs and events to any format accepted by Datadog with most of the available options right in front of you! Could you use Postman? Sure, but why pass up this log and event sending experiance!? Bugs shipped free!

# Before You Start: 
Please verify that Docker Desktop is installed on your machine with the following command

`docker --version`

If Docker Desktop is not installed, please follow this link: https://www.docker.com/products/docker-desktop

# Steps to Start Dummydog:

1. Download the Dummydog `docker-compose.yaml` or copy/paste to a local file
2. Run the command `docker-compose up` to download and start the container. This step may take a few minutes as the images download from Docker hub
3. Open Google Chrome and head to `http://localhost:3000` to view the Dummydog application
4. You can verify the container is running with the command `docker ps`

# How To:
1. Add your Datadog sandbox `API key`
2. Select `Logs` or `Events` 

**Logs**
1. You can choose a specific log format from the Datadog OOB log pipelines by clicking the `Custom Log?` dropdown. This will load a log format for you to ship or alter to your liking
2. Want to ship a custom log? Feel free to fill out the nessesary fields! 
3. If you would like to save a log format, click the `save format` button at the bottom of the screen. Once a format has been saved, you may access it from the `Saved Logs` drop down
4. To delete a saved format, first select a log from `Saved Logs` and then click `delete log` at the bottom of the screen

**Events**
1. All options for events are included!
2. Form up your event to your liking and hit the `send event` button at the bottom of the screen

**Please note that this application saves logs to your Chrome local storage**
1. Never save sensitive infomration such as API keys
2. Avoid saving customer log lines 

To stop Dummydog, please run the command `docker-compose down`. This will kill and remove the Docker container

# Next Up:
- Error handling 
- Metrics
- Traces

**Problems?**
Feel free to reach out to zach.gwirtz@datadoghq.com