---
title: 'Starting your own peertube instance'
description: 'how to start your own tube instance using fedihost'
draft: true
---

# introduction 
Peertube is a fediverse video broadcasting platform capable of live streaming videos. It takes most users between 5-10 minutes to start an instance depending on their level of experience with changing DNS records.

## Login or Signup
Login or sign up for Fedihost using an email address and password. This email address will recieve important billing and administrative emails in relation to the instance.

## Choose Add Service
On the left menu, navigate to the "Add" tab and choose "Peertube" as the service you would like to add.

## Select Plan
You can now choose, which plan you would like for your peertube server.

### Encoder Count
On fedihost because we have dedicated encoding machines which covert your uploaded videos into all the different resolutions that viewers may steam. More encoders mean a shorter wait for your videos to be ready to share.
Each video that is uploaded often requires several encoding jobs to produce each resolution that you wish to offer users. 
With only one dedicated encoder it can take a while to process a video, especially if you have enabled every resolution or if the videos are long. For example, if you offer 480p, 720p and 1080p with 3 encoders this will be processed concurrently. 
Another factor is the number of users you have uploading at once it can also create a bottleneck.
We recommend starting with a lower number of encoders, and if you find it is taking too long for your videos to encode, upgrade to a plan with a higher number of encoders. Both upgrading and downgrading is possible so you can figure out what is right for you.

### Video Studio
Peertube has a simple built in video editing studio, which lets you edit uploaded video. It requires a more powerful server to edit and encode the video file.

### Livestreams 
Peertube also offers live streaming which can be connected to common streaming tools like OBS. It also requires a more powerful server due to the resource usage of receiving and encoding video streams.

### Storage 
if you don't already have a Fedihost storage plan you may select one here. It is easy to upgrade and downgrade storage as you go, which is often the case with a peertube instance over time.

## Domain Settings
Domain settings let you decide what address you would like your peertube instance to appear at. You can bring a custom domain or use a fedihost domain.

### Custom Domain
If you own your own domain, you will need to have access to the DNS settings for the donain in order to point them to Fedihosts servers. These are usually something you can configure in the same place that you registered the domain, but not always.
The domain cannot be at the same address as a website that already exists. For example, consultatron.com already has a website at this address, so changing the DNS settings would replace this website with peertube. 
<aside>It would not delete the website, but the website would not be discoverable anymore on the internet.</aside>
If you already have a website at the address like this the most common solution is to use a subdomain such as videos.consulatatron.com for your peertube instance. 
<aside>A subdomain is what fedihost does with our own peertube instance at videos.fedihost.co. </aside>

#### Enter Domain
Enter in the domain that you would like to use into the box. 

#### Update DNS
On your DNS provider update the records to match the table which is displayed below. If you do not have the option for an ALIAS record instead use CNAME. 
Save the record and select verify domain. It is unlikely to work straight away as DNS record record take a long time to propagate, come back in a few hours once your peer tube is up and check again to make sure it is visible.

### Fedihost Domain
If you do not have a domain, you can always use a fedihost sub domain. These deploy instantly and require no extra expense or custom domain.

## Review And Checkout
The next step lets you review your order and if everything looks good place payment. You will be asked for your credit card details through stripe. Once you complete payment, your peer tube instance will be provisioned within minutes.
You will receive an email in your inbox letting you know when this is done.

## Next Steps
TODO - Our guide on configuring a brand new peertube instance for administrators.
TODO - Our guide on setting up and using a peertube account for users.
