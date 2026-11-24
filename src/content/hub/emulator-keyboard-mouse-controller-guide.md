---
title: Keyboard, Mouse and Controller Setup for Mobile Game Emulators
seo_title: Keyboard, Mouse and Controller Setup for Mobile Game Emulato
summary: How to set up keyboard, mouse and gamepad controls in BlueStacks, MuMuPlayer and other emulators, with layouts for shooters, MOBAs, gacha RPGs and MMORPGs.
keyword: Keyboard, Mouse and Controller Setup for Mobile Game Emulators
hub_type: guides
published_at: '2026-11-24T15:00:00Z'
roundup: true
genres: []
platforms:
- pc
- android
sources:
- title: BlueStacks control editor
  url: https://support.bluestacks.com/hc/en-us/articles/360058928871-How-to-create-and-edit-controls-in-BlueStacks-5
  primary: true
- title: BlueStacks gamepad support
  url: https://support.bluestacks.com/hc/en-us/articles/360059482992-Gamepads-on-BlueStacks-5
  primary: true
- title: LDPlayer mapping
  url: https://www.ldplayer.net/support/introduction-to-keyboard-mapping.html
  primary: true
- title: MuMuPlayer input guide
  url: https://www.mumuplayer.com/help/win/key-setting-guide.html
  primary: true
- title: PUBG Mobile matchmaking policy
  url: https://www.pubgmobile.com/webplat/info/news_version3/35372/57705/57706/57821/57822/57823/m22591/201911/836731.shtml
  primary: true
tldr:
- Start from the emulator's built-in layout for your game and only change the keys you need.
- Shooters need aim and fire controls, MOBAs need skill keys over the right spots, and gacha games mostly need a few tap points.
- 'Avoid macros, rapid-fire and recoil scripts in competitive modes: many games treat automated input as cheating.'
image: /assets/img/emulator-keyboard-mouse-controller-guide.jpg
image_url: https://www.gstatic.com/play/games/pc/googleplaygames-gaming-across-devices-cd48db3a.png
image_source: https://play.google.com/googleplaygames
image_credit: Google
image_alt: Official Google Play Games on PC artwork
image_status: candidate
---

Mobile games are built for touchscreens, so emulators translate keys, mouse clicks and gamepad buttons into touches on the screen. Good mapping makes a game feel like it was built for PC. Bad mapping makes it harder than playing on a phone. This guide explains how mapping works, how to set it up in the main emulators, and sensible layouts for different kinds of games.

## How key mapping works

Every mapped key is tied to a spot on the screen. When you press the key, the emulator taps that spot. More advanced controls simulate gestures:

- **Tap**: a single key presses one spot, such as a skill button.
- **D-pad or joystick**: WASD moves an on-screen joystick.
- **Aim or camera**: the mouse drags the camera, usually after locking the cursor to the game window.
- **Fire**: a mouse button taps the shoot button while aiming.
- **Swipe and scroll**: a key or the mouse wheel performs a swipe or zoom.

Because controls are tied to screen positions, changing the game's own button layout or the emulator's resolution can break a mapping. If controls suddenly stop lining up, check whether either changed.

## Setting up controls in BlueStacks 5

BlueStacks handles this through the Game controls menu on the side toolbar.

1. Launch the game and get to the screen where you actually play.
2. Open Game controls and check whether a scheme loaded automatically. Popular games usually have one.
3. Open the controls editor to change it. Drag controls such as tap spots, D-pad, aim and fire onto the screen, then click a control to assign its key.
4. Save, then test in a safe area like a training mode.
5. Before experimenting, make a copy of a working scheme so you can go back.

BlueStacks also supports gamepads. Connect the controller before starting the game, then open the gamepad controls to see or change which button maps to which spot.

## Setting up controls in MuMuPlayer

MuMuPlayer's keyboard mapping tool lives on the side toolbar.

1. Open the game, then open the mapping tool.
2. Use the ready-made layout if one loaded, or add tap points, a joystick and camera controls yourself.
3. Save and test before using the layout in competitive modes.

Controllers connect the same way: plug in or pair before launching the game, then check the button layout in the controller settings.

## Google Play Games on PC

Games on Google Play Games on PC are tested for mouse and keyboard. Some have proper PC controls built in, while others run in a compatibility mode where clicks become taps. You do not draw your own layout as you do in emulators. Check each game's settings menu for control options.

## Recommended layouts by genre

### Shooters

- **WASD** for movement, Shift to sprint.
- **Mouse** to aim, left click to fire, right click to scope or aim down sights.
- **C** or Ctrl to crouch, Z for prone, Space to jump.
- **R** to reload, 1 and 2 for weapons, G for grenades, F to interact or loot.
- Set mouse sensitivity in the game itself, not only in the emulator.

### MOBAs

- Place Q, W, E, R over the skill buttons, or 1 to 4 if you prefer.
- **Right click** to move where the game supports it, or WASD on the joystick.
- **Space** for basic attack, D and F for summoner-style spells.
- Use a key to centre the camera on your hero if the game has a button for it.

### Gacha RPGs

- Turn-based games need only a few tap points: Space for auto-battle, 1 to 5 for character skills, Esc for back.
- Action RPGs work like a lighter shooter layout: WASD movement, mouse camera, number keys for skills, Shift for dodge.

### MMORPGs

- WASD movement, mouse camera, 1 to 0 for skill bar slots.
- Keys for quick menus such as inventory, map and quests, placed where the game's own buttons are.
- A key to toggle auto-quest or auto-battle if the game has an on-screen button for it, so you are not clicking through menus.

## Gamepad tips

- Connect the gamepad before you start the emulator, so it is detected properly.
- Xbox-style controllers are the most widely supported.
- If the stick drifts or feels too sensitive, adjust the dead zone in the emulator's gamepad settings.
- Some games detect controllers natively; others only work through the emulator's mapping layer. If buttons do nothing, check both.

## Macros and automation: where the line is

Emulators often include macro recorders, rapid-fire toggles and multi-instance sync. These are fine for repetitive single-player tasks where a game allows them, but they are a real risk in competitive and online modes:

- **Never** use rapid-fire, recoil compensation or aim assist tools in shooters.
- **Never** use macros in ranked or PvP modes.
- Check the game's rules before automating anything in an MMORPG. Many treat botting as a bannable offence even for simple loops.

In PUBG Mobile, emulator players are matched with other emulator players, and the publisher treats trying to get around that as cheating.

## Fixing control problems

| Problem | What to try |
|---|---|
| Keys tap the wrong spots | Check whether the game's button layout or the emulator resolution changed, then realign the controls |
| Mouse camera does not lock | Toggle the aim or shooting mode key, which is often F1 or a similar shortcut shown in the editor |
| Controller not detected | Connect it before launching the emulator, then restart the game |
| Layout disappeared after an update | Re-import a saved scheme, or reset to the default layout and adjust it again |
| Keys work in menus but not in matches | Some games switch screens; create a layout for each screen if the emulator supports it |
