<div align="center"> <h1> InCaptcha </h1> </div>

<div align="center"> <p> Thank you for adding <b>InCaptcha Bot</b> and by configure your server, you'll be guaranteed a safety servers againt raiders and alts. <br><br><br> <b>Powered By:</b> <a href="https://www.npmjs.com/package/eris">Eris</a> <br> <b>This Bot Currently Inspired From</b> <a href="https://top.gg/bot/captcha">Server Captcha Bot</a> </p> </div>

---

>  <div align="center"> <b>Setting Up The Bot</b> <br><br> To get a full detailed setup of the bot, scroll down to the <b>Configuration Setup</b> and follow its instruction. <br><br><br> Need help or dealing with any issues? Join our <a href="https://discord.gg/78RyqJK">Official Discord Support Server</a> </div>

---

<div align="center"> Before you're heading to the <b>Configuration Setup</b>, lets start by knowing each and every function of the commands. It's useful so you won't have any trouble configuring the bot. </div>

---

> <div align="center"> <b>Commands</b> </div>

<div align="center"> These below are the commands that <b>InCaptcha</b> has. Feel free to join our <a href="https://discord.gg/78RyqJK">Official Support Server</a> and ask in the <code>#ask-for-support</code> channel. <br> </div>

---

<table>
<thead>
<tr>
<th style="text-align:center"><strong>Category</strong></th>
<th style="text-align:center"><strong><code>commands</code></strong></th>
<th style="text-align:center"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">User</td>
<td style="text-align:center"><code>!verify</code></td>
<td style="text-align:center">Sends a new Captcha incase users failed to attempt, DMs are locked,  or errors occured</td>
</tr>
<tr>
<td style="text-align:center">General</td>
<td style="text-align:center"><code>!help</code></td>
<td style="text-align:center">Gives the help embeds.</td>
</tr>
<tr>
<td style="text-align:center">Owner</td>
<td style="text-align:center"><code>!configlist</code></td>
<td style="text-align:center">Give the list of the remaining required actions to configure.</td>
</tr>
<tr>
<td style="text-align:center">Owner</td>
<td style="text-align:center"><code>!config</code></td>
<td style="text-align:center">Configure the server and also display the current configuration.</td>
</tr>
<tr>
<td style="text-align:center">Owner</td>
<td style="text-align:center"><code>!archive</code></td>
<td style="text-align:center">Delete the current configuration</td>
</tr>
<tr>
<td style="text-align:center">Owner</td>
<td style="text-align:center"><code>!prefix</code></td>
<td style="text-align:center">Change the current default prefix in guild to a custom prefix.</td>
</tr>
</tbody>
</table>

---

> <div align="center"> <b>Configuration Setup</b> </div>
<div align="center"> You either can follow the <code>Simple Instructions</code> or the <code>Detailed Instructions</code> one.</div>

---

# Basic Configuration Instructions
**1st.** [Invite InCaptcha](https://bit.ly/InviteInCaptcha) <br>
**2nd.** Run `!configlist` and check the required actions for you to fully configured your server. <br>
**3rd.** Run `!config` and follow what the bot have provided and type the correct field in the configuration mode. <br>
**4rd.** To let only verified users can access the server contents, denied the permission of `@everyone` if you did not configurate the unverified role or denied the permission of `unverifiedRole` if you configurate one. And make sure to always allowed the permission of the `verifiedRole` to view and send messages. <br>
- Configuration Completed

---

# Detailed Configuration Instructions
**Firstly,**  [Invite InCaptcha](https://bit.ly/InviteInCaptcha)

- Invite **InCaptcha** and it'll open a Discord OAuth.
- Make sure to also invite the bot with the `Manage Roles` and `Manage Channels` permissions as it's needed in the configuration.

<img src="https://i.imgur.com/4aN6P7M.png" style="width:265px;height:285px;">

---

**Secondly,** Run `!configlist` <br>
When you first invited **InCaptcha**, it should looks like this when you run `!configlist`.

<img src="https://i.imgur.com/xzFWDCA.png" style="width:550px;height:495px;"> <br>
This is to display the remaining required actions for you to configure your server before **InCaptcha** bot is ready to be use. <br> You'll need to configure the server by using `!config` and includes with either `waitingRoom` or `verifiedRole`. Those 2 are required actions for configuration. `unverifiedRole` isn't a required actions, instead it's a additional features for some servers if they need it.

---

**Thirdly, Configuring The Server.** <br>
<br>
By configuring your server completely, it set up the bot to run in your server automatically and send a Captcha for new joined users. <br>
| `!config` | Configuration's Level | Description For Each Configurations 
| :---: | :---: | :---:
| `!config waitingRoom [Channel]`| `Required` | Configure the verification channel or the waiting room for users incase if their DMs are locked or they failed the Captcha.
| `!config verifiedRole [Role]` | `Required` | Given when users successfully solved the Captcha and verified.
| `!config unverifiedRole [Role]` | `Not Required` | Given when users joined and before solving the Captcha. This role will be taken away and exchanged with the `verifiedRole` once they completed the Captcha.

---

Currently, if you wanted to set the `waitingRoom`, you can type `!config waitingRoom [Channel]`, replace `[Channel]` with the channel's name and not included with the bracket. So as the role. <br><br>
And make sure that the `waitingRoom` channel is only a verification channel for unverified users. <br>
To ensure that you configured the bot correctly, type `!config` and check the remaining actions with `!configlist`.

---

**Lastly, Editing The Permissions**
<br><br><br>
There'll be 2 method for this, you may choose either one of them but keep in mind that both method works in the same result. <br><br>
**Method 1:**
Within the `Category` and the `Channel`, you surely wanted to deny the permission of read and send messages for `@everyone` and also allow to read and send messages in the `waitingRoom` channel. This is done so new joined users will see nothing but the `waitingRoom` channel incase users failed attempting the Captcha or DMs are off. If you're configuring `unverifiedRole`, simply do the same but it's required for you to deny the `unverifiedRole` instead of `@everyone`.

---

**Method 2:** <br>
View the `Server Settings` -> `Roles`. <br>
Set `@everyone`'s `Read Text Channels & Voice Channels`, `Send Messages` to `Disabled` and allow for `waitingRoom`'s `Read Messages` and `Send Messages` permission. <br>
Set `verifiedRole`'s `Read Text Channels & Voice`, `Send Messages` to `Enabled` and deny for `waitingRoom`'s `Read Messages` and `Send Messages` permission. <br><br>
If you configured the `unverifiedRole`, simply do the same as `@everyone` but edit the `unverifiedRole` permissions instead.

---

<div align="center"> <b>Congratulations, Your Server's Configuration Completed!</b> </div>

---

> <div align="center"> <b>How Does InCaptcha Bot Works?</b> </div>
<div align="center"> <b>InCaptcha</b> bot will noticed and immediately sends the users a Captcha and told them to solve it before accessing the rest of the server's content whenever new users joined into a configured server. <br> When users solved the Captcha and gained the verified role, they're able to access the server's channels. </div>

<center>
  <p><img src="https://imgur.com/067aEKW.png" alt="Imgur"> 
<img src="https://imgur.com/8AxYvRq.png" alt="Imgur"></p>
</center>

<div align="center">Below are the exmaple of how users solving their captcha. They just need to type the code of what they saw and that's it! </div> <br>

<div align="center"> <img src="https://imgur.com/8RfFB6M.png"> </div>

<div align="center"> <b>Simple, isn't it!</b> - This is not required any admin or owner to interact with the unverified users! </div>

---

> <div align="center"> <b>Archiving The Configuration</b> </div>

 <div align="center"> With this way, you can delete the configuration or unconfigured your server so <b>InCaptcha</b> won't work anymore, but keep in mind that you still can configure it. Let us start with knowing the usage in the command. It's basically the same as <code>!config</code> but use <code>!archive</code> and not include with mentioning channel or role. </div>
 
 | `!archive` | Description |
 | :---: | :---: | 
 | `!archive waitingRoom` | Delete the `waitingRoom` and set to none. |
 | `!archive verifiedRole` | Delete the `verifiedRole` and set to none. |
 | `!archive unverifiedRole` | Delete the `unverifiedRole` and set to none.
 
 ---
 
- By archiving `waitingRoom` and `verifiedRole`, new users who joined your server won't receive any Captcha as your configuratino isn't fully set up. To configure back, scroll up to check the instruction or directly head to your server if you had already know it. <br><br>
Need help about **InCaptcha**? Join our [Support Server](https://discord.gg/78RyqJK)
 
 ---
 
 > <div align="center"> <strong>FAQ's / Frequently Asked Questions</strong> </div>
 
- These below are the `FAQ`. Please read before you taking some actions to report of an issues.

## What If Users DMs Are Locked?
This is when the `waitingRoom` is helpful. **InCaptcha** will immediately ping the users and warning them that the bot cannot access and send the Captcha to users DMs as it was locked.
![Example](https://i.imgur.com/m3Ih7dF.png)

---

## How Do I Configure The Bot?
Scroll up and search for the **Configuration Setup**. Make sure to follow every instructions as it might be important in the configuration.

---

## What If The Users Failed The Captcha?
Every each new joined users that obtain the Captcha are told to fill it out and given unlimited attempts for a limited time of `2 Minutes`. If their 2 minutes ran out, they're told to run `!verify` in `waitingRoom` to obtain a new Captcha.

![Example](https://imgur.com/Dlg4WsK.png)

---

## Do Users Get The Same Captcha?
Nope, all users will get a unique Captcha that generated by bot randomly. Sending the same Captcha will just ruin the security. 

---

## My DMs Are Opened But Why The Bot Won't Detect My Correct Code?
It's a chance that the bot can't send messages into your DMs for some reason that currently I'm investigating it further. If that's the case you got, run `!verify` in `waitingRoom`.

---

> <div align="center"> <b>Are There Any Future Features Planned?</b> </div>

- There are some that I've planned currently but this is enough for now and future features planned will be considered in **2021**.

---
