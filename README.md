# CruzHacks2019

## Inspiration
Looking at Amazon Turk, and how they crowdsource labeling for their datasets, we wanted to aim at a similar crowdsourcing model for reinforcement learning where imitation learning could be outsourced to the public and users could be rewarded with micropayments each time they successfully improved an existing model. This could very well turn into an App Crowd play system similar to Twitch live gaming. For example, if we were using autonomous self-driving car simulations, we could run an autonomous race league where 1000's of users would participate and compete (while training our model) and turn the event into a "Gamified micropayments for model reinforcement".

## What it does
CrowdLearning is an application that outsources imitation learning using dagger to the public wherein a user can help training a model and earn micropayments through Hedera each time they help improve the existing model. To demo our project, we will be using an autonomous self-driving car simulation which is currently not 100% accurate. As users helps improve the model's accuracy in a game simulation, they earn hbar credits each time the model is improved. Conversely, if they make suggestions that potentially make the model worse than it currently is, they would be paying hbars using hedera instead.

## How we built it
For the micro-payments, we used Hedera's golang sdk and turned it into a micro-service that is first dockerized into a container and then hosted on a kubernetes cluster to handle load balancing.

For the imitation learning, the initial autonomous self-driving car model is not fully trained. This simulation is then deployed on a unity frontend as a driving simulation game where the user can correct the autonomous simulation and help improve its accuracy. We use tensorflow to test the users input against the model (almost in real time) to check if it has improved the model or not and accordingly instantly issue a micropayment to the user's account.

## What's next for CrowdLearning
Turn this into a full-fledged online app crowd play where 1000+ users would join in to play the simulation and help model reinforcement.



