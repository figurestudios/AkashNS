# AkashNS
AkashNS is being developed to make deployments easier on Akash. Read [this](https://forum.akash.network/t/akashns-making-node-js-deployments-easier/916) for more info.

## Installation
Please note that it's only:
> Tested on Docker v.20.10.5.

> Tested on Windows 10.

> Other pre-requisites are: Akashlytics Deploy, min. 5 AKT + fees, Node.

> Tested with an application that requires no open ports.

To install/set it up:
 - Clone the repository.
 - Drag and drop the files to a pre-existing node project.
 - Create a .env file with `skylink=` and `scriptname=`.
 - The scriptname is the name of your main script. The skylink is the URL ending you get after uploading your main script to any Skynet Portal.
 - If you're using any packages, edit the DOCKERFILE and add it under the other npm installs like this `RUN npm install <package>`. You could also make sure all packages are installed in the hierachy when building, as that would have the same effect for now.
 - Run `docker build`. (optional) verify that you can run it locally with `docker run`.
 - Run `docker push`. This will make it possible for Akash nodes to find your files.

## To deploy:
 - Using Akashlytics Deploy, I started with a blank image.
 - Using [this](https://github.com/figurestudios/AkashNS/blob/main/deploy.yaml) file, I was able to run my testing image. You should swap out the `figureprod/akash-bot:1.0.0` to your own image.
 - You might want to tweak it further right now to support other features, following the [Stack Definition Language](https://docs.akash.network/sdl).

## Upcoming Features
> Read the [forum post](https://forum.akash.network/t/akashns-making-node-js-deployments-easier/916) for a better general idea, as here, ideas will be all over the place!

 - The biggest and first change will be making it possible to make an `install.sh` file where you can specify packages. I will spin it up from inside the `appstarter.js`, and while it's open it'll do nothing as it's installing, and afterwards it will run your main script.
 - Then, I will make it possible to have directorys worth of environment files from Skynet. I will also dabble around with the possibility of using SkyDB/Registry for pushing changes. This can lead to downtime while it's updating the environment & packages, and then re-start the application.
 - Another big change is utilizing .yaml environment variables in the deployment. This would mean that there would be an actual reason to use the app - unlike now where people basically build their own Docker image (with assistance).
 - A web-app will be built to make the deployment part much easier. People will be able to specify packages, files, configurations, etcetera - and the web-app will spin it up on Akash.
