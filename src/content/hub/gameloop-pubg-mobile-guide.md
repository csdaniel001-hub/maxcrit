---
title: 'GameLoop guide for PUBG Mobile: install, best settings, controls and matchmaking'
seo_title: 'GameLoop PUBG Mobile guide: setup, settings, matchmaking'
summary: 'How to play PUBG Mobile on PC with GameLoop: installation, graphics and FPS settings, keyboard controls, emulator matchmaking and launch fixes.'
keyword: GameLoop PUBG Mobile
hub_type: guides
published_at: '2026-11-24T15:00:00Z'
roundup: true
genres: []
platforms:
- pc
- android
titles:
- pubg-mobile
sources:
- title: 'GameLoop: official product page'
  url: https://www.gameloop.com/product
  primary: true
- title: 'GameLoop: PUBG Mobile game page'
  url: https://www.gameloop.com/game/action/pubg-mobile
  primary: true
- title: 'PUBG Mobile: emulator matchmaking notice'
  url: https://www.pubgmobile.com/webplat/info/news_version3/35372/57705/57706/57821/57822/57823/m22591/201911/836731.shtml
  primary: true
- title: 'Activision Support: Call of Duty: Mobile FAQ'
  url: https://support.activision.com/au/en/cod-mobile/articles/call-of-duty-mobile
  primary: true
tldr:
- GameLoop is Tencent's emulator and the route PUBG Mobile supports for playing on PC.
- Emulator players are matched with other emulator players, and trying to dodge that is treated as cheating.
- Aim for a steady 60 FPS at 720p or 1080p before trying higher frame-rate modes, and never use macros or recoil scripts.
image: /assets/img/pubg-mobile-4-7-arctic-chronicles-erangel-subzero.jpg
image_url: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7b/f8/44/7bf844a9-267e-a78f-5518-51ccb42b03f7/2.jpg/2600x2600bb.jpg
image_source: https://apps.apple.com/us/app/pubg-mobile/id1330123889
image_credit: Tencent / KRAFTON
image_alt: The Ancient Beast in an official PUBG MOBILE 4.7 App Store screenshot
image_status: candidate
---

GameLoop is Tencent's Android emulator, previously known as Tencent Gaming Buddy, and it is the way PUBG Mobile supports playing on Windows. It installs the game for you, arrives with a keyboard layout ready to go, and puts you in matches with other emulator players. What follows covers installation, the settings behind a steady frame rate, controls, matchmaking and what to do when the game refuses to start.

## Why GameLoop for PUBG Mobile

PUBG Mobile can technically run on several emulators, but GameLoop is the one Tencent builds for it. That matters for two reasons:

- **Support**: GameLoop has a dedicated PUBG Mobile page and installs the game directly, so updates and compatibility fixes arrive with the client.
- **Fair matchmaking**: PUBG Mobile detects emulators and places those players in separate lobbies. Using the expected emulator keeps you on the right side of that system.

If PUBG Mobile is the main reason you want an emulator on PC, GameLoop is where to start, ahead of any general-purpose emulator.

## Before you install

- **Turn on virtualization** in your BIOS or UEFI. Every emulator runs better with it, and some will not run at all without it. Our virtualization guide shows how.
- **Free up space on an SSD**. GameLoop plus PUBG Mobile and its downloadable resources take a good chunk of space, and loading from an SSD is much faster.
- **Update your graphics drivers** from NVIDIA, AMD or Intel.
- **Bind your PUBG Mobile account** to a login you can use anywhere, such as Google, Facebook, Apple or another supported account, so your progress moves with you between phone and PC.

## Installing GameLoop and PUBG Mobile

1. Go to GameLoop's official website and download the installer. Avoid "optimized" or "unlocked" builds from other sites, which can contain malware and can get your account flagged.
2. Install GameLoop and launch it.
3. Open GameLoop's PUBG Mobile page and click to install the game.
4. Check that you are getting the right regional edition for your account.
5. Launch the game, log in with your bound account and let it download its resources.
6. Go into the training ground before your first match to check controls and performance.

## Graphics and FPS settings

Start simple. Push higher only once the basics hold steady.

### In GameLoop

Open GameLoop's settings and look at the engine options. Leave them on their defaults for your first test. If you get black screens, crashes or heavy stutter, try the other rendering option, restart and test again. Give the emulator more memory if your PC has 16 GB of RAM or more.

### In PUBG Mobile

- **Resolution**: 1280 x 720 on low-end PCs, 1920 x 1080 on most others.
- **Graphics preset**: start one step below the highest your PC seems to handle.
- **Frame rate**: aim for a steady 60 FPS. Higher frame-rate modes depend on the current game build and on what the game allows on emulator, and a 120 Hz monitor alone does not unlock them.
- **Lower first**: shadows and anti-aliasing cost the most. Lower these before dropping resolution.

### How to test

Use the training ground for a repeatable test. Run through a built-up area, turn the camera quickly and fire a few magazines, then repeat for ten minutes to catch overheating or stutter that only shows up later. Change one setting at a time. If a lower graphics preset lets you hold a higher frame rate smoothly, that is usually the better trade in a shooter.

## Keyboard and mouse controls

GameLoop ships with a PUBG Mobile key layout already set up. Before your first real match:

1. Open the key mapping view and read through the defaults for movement, aiming, firing, crouching, prone, jumping, reloading and inventory.
2. Change only what you need to. Many players move lean, crouch or prone to keys that suit their hands.
3. Test vehicles, looting, opening doors and throwing grenades in the training ground.
4. Adjust mouse sensitivity in the game's own settings until camera movement feels right.

Stay away from macros, rapid-fire scripts, recoil-compensation tools and anything that automates input or hides the emulator. These break PUBG Mobile's rules and are the quickest way to get an account banned.

## How emulator matchmaking works

PUBG Mobile places emulator players in matches with other emulator players. If you join a squad with friends on phones, the whole squad goes into an emulator lobby, which can make matches noticeably harder for your mobile teammates.

PUBG Mobile has said publicly that trying to get around emulator matchmaking counts as cheating. Accept the lobby the game puts you in. Do not use tools that disguise your platform to get into mobile-only matches, even if queues feel long.

## What about Call of Duty: Mobile?

GameLoop also lists Call of Duty: Mobile. Activision's own Call of Duty: Mobile support FAQ, however, says emulators are not supported. When an emulator's marketing and the publisher's support page disagree, the publisher's rules are the ones that apply to your account. If you play Call of Duty: Mobile, check Activision's current policy for your region, or play on a supported phone or tablet.

## Fixing launch and performance problems

| Problem | What to try |
|---|---|
| Game will not start after an update | Check PUBG Mobile's official channels for maintenance, update GameLoop, then restart Windows |
| Stuck on the loading screen | Check free disk space and your connection, then use GameLoop's repair or reinstall options |
| Low or unstable FPS | Lower shadows and anti-aliasing, close background apps, update graphics drivers |
| Black screen or crash on launch | Switch GameLoop's rendering option and restart |
| Controls not responding | Reopen the key mapping view and reset to the default PUBG Mobile layout |

Never replace anti-cheat files, install "bypass" tools or inject third-party software to fix a problem. If nothing works, contact PUBG Mobile or GameLoop support through their official channels.
