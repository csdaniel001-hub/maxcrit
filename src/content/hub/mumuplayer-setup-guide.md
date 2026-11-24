---
title: 'MuMuPlayer guide: setup, best settings and controls on Windows and Mac'
seo_title: 'MuMuPlayer guide: setup and best settings on PC and Mac'
summary: How to install MuMuPlayer on Windows or an Apple Silicon Mac, check the requirements, tune performance and graphics, map controls and use multi-instance.
keyword: MuMuPlayer guide
hub_type: guides
published_at: '2026-11-24T15:00:00Z'
roundup: true
genres: []
platforms:
- pc
- android
sources:
- title: 'MuMuPlayer: official site, features and Windows requirements'
  url: https://mumuglobal.com/index.html
  primary: true
- title: 'MuMuPlayer: FAQ (virtualization, installation, display issues)'
  url: https://mumuglobal.com/faq
  primary: true
- title: 'NetEase Games: MuMuPlayer Pro for Apple Silicon Macs announcement'
  url: https://gamedeveloper.com/press-release/introducing-mumuplayer-pro-a-game-changer-for-android-gaming-on-mac
  primary: true
tldr:
- On Windows, MuMuPlayer needs Windows 7 or newer with DirectX 11.0 or OpenGL 4.x, 4 GB of RAM and GTX 950 level graphics or better.
- The Mac version is a separate app for Apple Silicon with a free trial, then a paid membership.
- Turn on virtualization, give it enough CPU and RAM, and match its frame-rate cap to the game's own setting.
image: /assets/img/mumuplayer-setup-guide.jpg
image_url: https://www.mumuplayer.com/pc/gw/20250122155220/img/mumuplayer_2f689b73.jpg
image_source: https://www.mumuplayer.com/
image_credit: NetEase Games
image_alt: Official MuMuPlayer artwork showing Android games on PC and Mac
image_status: candidate
---

MuMuPlayer is NetEase's Android emulator. It is popular with gacha and MMORPG players, and it is one of the few emulators with a dedicated version for Apple Silicon Macs. This guide covers both versions: what they need, how to install them, the settings worth changing and how to fix the usual problems.

## Windows or Mac: which version you need

MuMuPlayer comes as separate apps:

- **MuMuPlayer for Windows** is the main version and is free to use.
- **MuMuPlayer for Mac** (launched as MuMuPlayer Pro) is built for Apple Silicon Macs. New users get a free trial, after which a paid membership is needed. Check the current price on the official site before you rely on it.
- A Windows on ARM version for Snapdragon laptops has also been released, built with Qualcomm.

Download only from MuMuPlayer's official website. Search results often show older builds on third-party download sites.

## Windows requirements

MuMuPlayer lists these as its Windows requirements:

| Part | Requirement |
|---|---|
| Windows | Windows 7 or newer, with DirectX 11.0 or OpenGL 4.x |
| Graphics | GTX 950 level or above |
| RAM | 4 GB or more |
| Storage | At least 2 GB free on the installation drive and 1.5 GB free on the system drive |
| Virtualization | Turned on in the BIOS or UEFI |

The storage figures cover the emulator only. Games add several gigabytes each, and large gacha games and MMORPGs can take 20 GB or more with their downloads, so install to a drive with room to spare. An SSD helps loading times a lot.

## Installing on Windows

1. Turn on virtualization first. MuMuPlayer's FAQ has guides for this, including what to do if the emulator still asks for it after you enabled it in the BIOS.
2. Download the Windows installer from the official site and run it.
3. Choose an install folder on your fastest drive with enough free space.
4. Open MuMuPlayer, then open the built-in app store or Google Play and sign in.
5. Install your game and log in with the account you use on your phone.

Link your game account to a proper login, such as Google, Apple, Facebook or the publisher's account, before you start playing seriously. A guest account stored only inside the emulator is lost if the emulator is removed.

## Installing on a Mac

1. Check that your Mac has an Apple Silicon chip. Open the Apple menu, choose About This Mac and look for an M-series chip.
2. Download the Mac version from MuMuPlayer's official site and move it to your Applications folder.
3. Open it and follow the first-run steps, including any macOS permission prompts.
4. Sign in to the store, install your game and log in.

If installation fails on an Apple Silicon Mac, MuMuPlayer's FAQ has a dedicated entry for it. Remember the trial: if you plan to keep playing on Mac, budget for the membership.

## Settings worth changing

Open the settings menu from the top-right of the emulator window. Names can shift between versions, but these are the options to look for.

### Performance

- **CPU and RAM**: give the emulator more cores and memory if your PC has headroom. On 8 GB of RAM, around 3 to 4 GB for the emulator leaves room for Windows. On 16 GB, 4 to 6 GB is comfortable for a single instance.
- **Frame rate**: 60 FPS suits almost every game. Set the game's own frame-rate option to match. Higher caps only help if your monitor supports them and the game offers them.

### Display

- **Resolution**: 1920 x 1080 for most monitors, 1280 x 720 on low-end PCs or when running several instances.
- **Orientation**: most gacha games and MMORPGs run in landscape. Some portrait games look better in a phone-shaped window, which you can choose in the display options.

### Graphics

- **Graphics rendering mode**: if a game shows a black screen, flickers or crashes on launch, switch the rendering mode and restart. MuMuPlayer's FAQ covers screen display issues in detail.
- **Graphics enhancement**: MuMuPlayer offers an option to sharpen visuals. It costs some performance, so try it only if you have headroom.

Change one setting at a time and test in the same spot in the game, so you know what made the difference.

## Keyboard, mouse and controller

MuMuPlayer maps keys to touch points, with ready-made layouts for many popular games.

1. Start the game and open the keyboard mapping tool from the side toolbar.
2. Check whether a layout loaded automatically. If it did, test it before changing anything.
3. Add or move tap points, a movement joystick and camera controls as needed, then save.
4. Test in a safe area before using the layout in ranked or competitive modes.

Controllers work too. Connect the gamepad before starting the game and check the button mapping in the controller settings. Avoid macro tools in competitive modes, since many games count automated input as cheating.

## Multi-instance

MuMuPlayer's multi-instance manager lets you run several emulator copies at once, each with its own accounts and settings. It is useful for playing two games side by side, or for games that allow alternate accounts.

- Each instance needs its own RAM and CPU. Lower the resolution and frame rate on background instances.
- On 8 GB of RAM, two light instances is realistic. Heavy MMORPGs may only manage one.
- Check the game's rules on multiple accounts before running alts.

## Fixing common problems

| Problem | What to try |
|---|---|
| Emulator asks for virtualization even though it is on | Follow MuMuPlayer's FAQ entry for this case; on some PCs other Windows features also need adjusting |
| Black screen or flickering | Switch the graphics rendering mode and update graphics drivers |
| Emulator stops responding | Restart it, lower CPU and RAM allocation slightly, close other heavy apps |
| Not enough disk space during installs | Free up space or install to a larger drive; MuMuPlayer's FAQ has a guide |
| Mac installation fails | See the Apple Silicon installation entry in the FAQ |
| Payment fails on the Mac membership | See the payment entry in the FAQ |

## Is MuMuPlayer the right choice?

MuMuPlayer is a strong pick for gacha games and MMORPGs, and the obvious one if you play on an Apple Silicon Mac. On Windows, try it alongside BlueStacks if your game runs poorly on one of them. For PUBG Mobile, use GameLoop, and for Clash of Clans and Clash Royale, Google Play Games on PC.
