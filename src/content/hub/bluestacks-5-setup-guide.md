---
title: 'BlueStacks 5 guide: install, best settings, controls and multi-instance'
seo_title: 'BlueStacks 5 guide: setup, best settings and controls'
summary: How to install BlueStacks 5, pick the right Android instance, set CPU, RAM, FPS and graphics, map keyboard and controller controls, and fix common problems.
keyword: BlueStacks 5 guide
hub_type: guides
published_at: '2026-11-24T15:00:00Z'
roundup: true
genres: []
platforms:
- pc
- android
sources:
- title: 'BlueStacks: System requirements for BlueStacks 5'
  url: https://support.bluestacks.com/hc/articles/360056129211
  primary: true
- title: 'BlueStacks: Requirements on Hyper-V enabled Windows 10 and 11'
  url: https://support.bluestacks.com/hc/en-us/articles/4415238471053
  primary: true
- title: 'BlueStacks: BlueStacks 5 quick-start guide'
  url: https://support.bluestacks.com/hc/en-us/articles/6017725365389
  primary: true
- title: 'BlueStacks: Help Center FAQ (Multi-instance Manager, virtualization, Android 11)'
  url: https://support.bluestacks.com/hc/en-us/sections/360011921732-Frequently-Asked-Questions?page=3
  primary: true
- title: 'BlueStacks: PUBG Mobile on PC with BlueStacks 5'
  url: https://support.bluestacks.com/hc/en-us/articles/37159226387213-PUBG-Mobile-on-PC-with-BlueStacks-5
  primary: true
tldr:
- BlueStacks 5 runs on Windows 7 or newer with 4 GB of RAM, but Windows 10 or 11, 8 GB of RAM and virtualization turned on make a large difference.
- From version 5.20 it works with Hyper-V either on or off, and Android 11 instances run with Hyper-V enabled.
- Set CPU, RAM and FPS in Settings, use the Game controls menu for keyboard mapping, and create a fresh instance instead of deleting one that misbehaves.
image: /assets/img/bluestacks-5-setup-guide.jpg
image_url: https://cdn-www.bluestacks.com/bs-images/OG-Image-.jpg
image_source: https://www.bluestacks.com/
image_credit: BlueStacks
image_alt: Official BlueStacks artwork
image_status: candidate
---

BlueStacks 5 is the most widely used Android emulator on Windows, and it can run almost any mobile game. The defaults are fine for casual play, but a few minutes in the settings menu usually makes it smoother and quieter. This guide covers installation, the settings that matter, controls, multi-instance and the fixes for the most common problems.

## Before you install

Check that your PC meets the requirements BlueStacks publishes.

| | Minimum | Recommended |
|---|---|---|
| Windows | Windows 7 or newer | Windows 10 or newer |
| Processor | Intel or AMD | Intel or AMD multi-core, single-thread benchmark score above 1000 |
| RAM | 4 GB | 8 GB or more |
| Storage | 5 GB free | SSD |
| Graphics | Up-to-date drivers | Onboard or discrete GPU with a benchmark score of 750 or more |
| Other | Administrator account | Virtualization turned on |

Two more things to sort out first:

- **Virtualization**: BlueStacks runs without it, but far slower. Turn it on in your BIOS or UEFI before installing. Our virtualization guide shows how.
- **Hyper-V**: older versions clashed with Hyper-V, the Windows feature used by WSL and some security tools. From BlueStacks 5.20 that is no longer an issue: it runs with Hyper-V on or off. If Hyper-V is on, the installer from the official site gives you the Hyper-V compatible build automatically. With Hyper-V enabled you need Windows 10 version 1903 or newer, or Windows 11.

## Installing BlueStacks 5

1. Download the installer from bluestacks.com. Avoid mirror and "cracked" download sites.
2. Run the installer and choose an install folder on an SSD if you have one. Games are installed inside BlueStacks, so leave plenty of space.
3. Let the installer finish. The first launch takes longer than later ones.
4. Open the Play Store inside BlueStacks and sign in with your Google account on the normal Google sign-in screen.
5. Install your game from the Play Store and log in with the same account you use on your phone.

Before you play seriously, link your game account to Google, Facebook, Apple or the publisher's own login. Progress stored only on a guest account lives inside that instance, and deleting the instance deletes the progress.

## Choosing the right Android version

BlueStacks 5 can run instances with different Android versions, created from the Multi-instance Manager. Most current games run on the default instance. If a game refuses to install, crashes on launch or says your device is not supported, create a fresh instance with a newer Android version, such as Android 11, and try it there.

Do not delete your old instance until the new one works and your account is safely linked. Recent BlueStacks versions have also changed which older Android versions can still be created, so use the options your installed version offers rather than following old tutorials.

## The settings that matter

Open Settings from the gear icon on the side toolbar. These are the tabs worth visiting.

### Performance

- **CPU allocation and memory allocation**: give BlueStacks more cores and RAM if your PC has headroom. On a quad-core PC with 8 GB of RAM, two to four cores and 3 to 4 GB is a sensible start. On 16 GB, 4 GB or more is comfortable. Leave enough for Windows and anything else you run.
- **Performance mode**: options include low memory, balanced and high performance. Use balanced on laptops and older PCs.
- **Frame rate**: 60 FPS suits almost every game. Only go higher if your monitor supports it and the game offers a high frame-rate setting of its own. Turn on the FPS display while you test.

### Display

- **Resolution**: 1600 x 900 or 1920 x 1080 is plenty for most monitors. Higher resolutions cost performance and only help on large screens.
- **Pixel density**: leave it on the default unless text looks too large or too small in a specific game.

### Graphics

- **Graphics renderer**: BlueStacks offers several renderers, including OpenGL, DirectX and Vulkan in recent versions. If a game shows black screens, flickering or crashes, switch the renderer, restart and test again.
- **GPU in use**: on laptops with two graphics chips, make sure BlueStacks uses the dedicated one. You can also set this in Windows Settings under Display, then Graphics.

After any change, restart BlueStacks and test in the same place in the game, so you can tell whether the change helped.

## In-game graphics settings

Emulator settings and in-game settings work together. For a shooter, BlueStacks' own PUBG Mobile guide recommends turning off the game's auto-adjust graphics option for steadier performance. In general, pick the in-game frame-rate option that matches your emulator cap, and lower shadows and effects before lowering resolution.

## Keyboard, mouse and controller controls

BlueStacks maps keys to on-screen touches through the Game controls menu. Many popular games come with a ready-made scheme.

1. Start the game and open the Game controls menu from the side toolbar.
2. Check the existing scheme first. If it works, keep it and only change the keys you dislike.
3. To change it, open the controls editor and drag controls onto the screen: tap spots, a D-pad for movement, aiming and shooting controls for shooters.
4. Save, then test in a safe area such as a training mode.
5. Duplicate a working scheme before you experiment, so you can go back to it.

Gamepads are supported too. Connect the controller before starting the game, then open the gamepad controls to check or change the button layout.

Avoid macros and repeated-input tools in competitive modes. Many games treat automated input as a rules violation, even if the emulator offers it.

## Multi-instance: running several games or accounts

The Multi-instance Manager lets you run several copies of BlueStacks at once, each with its own Android setup and accounts. It is useful for playing two different games, or for games that allow multiple accounts.

- Every extra instance costs RAM and CPU. On 8 GB of RAM, two light instances is a realistic maximum.
- Lower the resolution and frame rate of instances you are not actively watching.
- Check the game's terms on multiple accounts before running alts. Some games forbid it.

Our multi-instance guide covers this in more detail.

## Fixing common problems

| Problem | What to try |
|---|---|
| Very slow or laggy | Turn on virtualization, raise CPU and RAM allocation, close background apps, update graphics drivers |
| Black screen or flickering | Switch the graphics renderer, update graphics drivers, restart BlueStacks |
| Game says device not supported | Create a fresh instance with a newer Android version |
| "Low disk space" | Use BlueStacks' disk cleanup, clear app caches, or move to a larger drive |
| Antivirus warnings or slowdowns | Add BlueStacks as an exception in your antivirus, following BlueStacks' antivirus guides |
| New sign-in alert from Google | Expected the first time you sign in on a new BlueStacks install |

If nothing helps, update BlueStacks to the latest version before reinstalling, and make sure your game account is linked before you remove anything.

## Is BlueStacks safe for your account?

BlueStacks itself is a legitimate program, but game rules vary. Some publishers allow emulators, some restrict them in ranked modes, and a few ban them entirely. Read the game's terms or support pages, avoid modified game files and third-party "boosters", and never use macros in competitive play. Our emulator safety guide explains the risks in more detail.
