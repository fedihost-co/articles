---
title: 'Migrating Mastodon Accounts'
description: 'how to migrate your mastodon account from one server to another'
draft: true
---
# Migrating Mastodon

Moving a Mastodon account to a new server is easy as long as you follow the steps in order

## Limitations

There are a few limitations to Mastodon and things you should know about a migration first.

### Things You Can Migrate
* Followers - Automatically
* Bookmarks - CSV Download/Upload
* Follows - CSV Download/Upload
* Lists - CSV Download/Upload
* Mutes - CSV Download/Upload
* Blocks - CSV Download/Upload
* Domain Blocks - CSV Download/Upload
* Hashtags - Manual Data Entry

### Things You Can’t Move
At this point your posts and media are [stuck on the old account](https://github.com/mastodon/mastodon/issues/12423).

**Exception:** If you are already hosted on a custom domain and just want to migrate your hosting (not changing your domain) it is possible to keep everything. Your just need two things:
* A copy of your database data and media from your old host
* A new host that will restore this data for you (such as fedihost)

## Process
### Create New Account
Create a new blank account on your new server.

### Export Old Data
On your old account go to  download each of the CSV files in individually. :icon{icon="Cog6ToothIcon"}`Preferences` > `Import and Export` > `Data Export`


:vid{src="https://cdn.f-h.co/web/video/mastodon/export-data.mp4"}

### Import Data
On your new account go to :icon{icon="Cog6ToothIcon"}`Preferences` > `Import And Export` > `Import`

and upload one by one each of the CSV files that you downloaded from the old server.

### Prepare New Account Alias
On your new account go to :icon{icon="Cog6ToothIcon"}`Preferences` > `Account` > `Moving From A Different Account`

Click on _Create an account alias_ an follow the instructions.
You will need to wait at least 5 minutes before completing the mirrored action of this on your old server. While you wait you can [Move Hashtags](#move-hashtags) and [Change Display Name and Bio](#change-display-name-and-bio) as outlined below.

### Move Hashtags
On your old account go to you profile page and choose the <svg 3 dots> 3 dots beside your profile and select 'followed hashtags' you can also reach this by adding 'followed_tags' to the url of your server.
![the hashtag page](/img/mastodon/migration/migration-hashtags-raw.png)
Then add each of these to your new account by searching the hashtag then choosing "Follow hashtag".

## Set New Display Name and Bio
On your new account copy and paste your display name, bio and links from your old account. You can also set your profile and banner image too.

## Change Display Name and Bio
On your old account make it extra clear that your account is not active by editing the profile and changing the Display Name to _Your Name **(Moved)**_. Change your bio text to add a link to the new account address.
![handle and bio field](/img/mastodon/migration/migration-hashtags-raw.png)


## Move Old Account Followers
_Five minutes should have now passed since you setup the "Account Alias" on your old account._
On your old account go to :icon{icon="Cog6ToothIcon"}`Preferences` > `Account` > `Moving To A Different Account`

Put your new handle in the box and click continue, this will both redirect the account and migrate your followers. It can take several days for the followers to migrate.
