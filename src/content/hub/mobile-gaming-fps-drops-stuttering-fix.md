---
title: "How to fix FPS drops and stuttering in mobile games"
seo_title: "How to Fix FPS Drops in Android and iPhone Games"
summary: "Work out why a mobile game stutters, why a 120Hz phone can still run games at 60 FPS, and which settings to change first on Android and iPhone."
keyword: "fix FPS drops mobile games"
published_at: 2026-11-26T19:59:00Z
hub_type: guides
tier: 2
review_by: 2027-02-26
genres: [hardware]
platforms: [ios, android]
titles: []
tldr:
  - "Match the fix to the symptom: slowdown that grows over a session points to heat, slowdown in busy fights to rendering load, and teleporting enemies to the network."
  - "Android 15 runs games at <b>60Hz by default</b> unless the game asks for more, and battery saver or heat can still hold it there."
  - "On ProMotion iPhones, Low Power Mode caps the display at 60Hz, and Adaptive Power can switch it on by itself."
  - "Lower the FPS target and render resolution first, then test the same scene again."
sources:
  - { title: "Android Developers: Optimize display refresh rate for games", url: "https://developer.android.com/games/optimize/display-refresh-rate-change", primary: true }
  - { title: "Android Developers: Slow sessions", url: "https://developer.android.com/topic/performance/issues/slow-session" }
  - { title: "Android Developers: Thermal API (ADPF)", url: "https://developer.android.com/games/optimize/adpf/thermal" }
  - { title: "Apple Support: Use Game Mode", url: "https://support.apple.com/en-mide/105118" }
  - { title: "Apple Support: iPhone User Guide, power modes (iOS 27)", url: "https://support.apple.com/en-gb/guide/iphone/iphcab9aecd1/27/ios/27" }
  - { title: "Apple Support: If your iPhone or iPad gets too hot or too cold", url: "https://support.apple.com/en-us/118431" }
image: "/assets/img/mobile-gaming-fps-drops-stuttering-fix.jpg"
image_url: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large_2x.jpg"
image_source: "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/"
image_credit: "Apple"
image_alt: "Official Apple press image of the iPhone 17 Pro colour lineup"
image_status: "candidate"
---

A game that runs smoothly for ten minutes and then turns sluggish in every fight has a different problem from one that stutters the moment a battle fills the screen, or one that looks smooth while enemies jump around. Each needs a different fix, so work out which one you have before you drop every setting to Low.

Google's guidance for game developers names the same three causes of slow sessions: the game is CPU- or GPU-bound, the phone has overheated and throttled, or the game's frame rate doesn't match the display's refresh rate. Network lag is the fourth thing that feels like stutter but isn't a rendering problem at all.

## Match the fix to the symptom

| What you see | Likely cause | First thing to try |
|---|---|---|
| Smooth at first, worse after a long session | Heat or power limits | Repeat the same scene with a lower FPS target |
| Slow whenever a fight fills the screen | Rendering or simulation load | Lower render resolution, then effects |
| Short hitches when entering new areas | Loading or shader work | Run the same route twice and compare |
| Smooth motion but enemies teleport | Network latency or packet loss | Compare Wi-Fi with mobile data |
| Stuck at 30 or 60 FPS on a 120Hz screen | A game, device or system cap | Check the game's settings, then power modes |

Several of these can happen at once. A crowded online fight can load the renderer and the connection together.

Frame pacing matters as much as the average. At 60 FPS each frame has about 16.7 milliseconds; at 30 FPS it has 33.3. A game can average 60 FPS and still feel rough if some frames take much longer, which shows up as small freezes when you turn the camera. A steady lower cap often feels better than a higher one that keeps dipping.

## Why a 120Hz phone can still run at 60 FPS

On Android, a 120Hz display doesn't mean 120 FPS in games. Android 15 sets games to 60Hz by default to save power, and a game has to ask for a higher rate to get one. Even when it does, Android can hold it at 60Hz when battery saver is on or the phone is thermally throttled. If a game's 120 FPS option does nothing, turn battery saver off and test again on a cool phone.

On iPhones with ProMotion, Low Power Mode limits the display to 60Hz. On iPhone 15 Pro and later, Adaptive Power can turn Low Power Mode on by itself at 20% battery, so you can hit the cap without switching anything on. Check Settings > Battery > Power Mode.

Game Mode on iOS 18 and later turns on by itself when a supported game goes full screen; you can check or switch it in Game Overlay under Controls. It gives the game priority on the CPU and GPU and doubles the Bluetooth sampling rate, which cuts controller and AirPods latency. The game's own frame-rate cap still applies.

If a higher FPS option never appears, the game may not support it on your phone. Unofficial config editors and modified clients can break the game and may break its rules.

## Change settings in this order, top to bottom

- **FPS target**: pick one your phone can hold for a whole session. Start at 60, or 30 on older phones, and only go higher once a long session stays steady.
- **Render resolution or resolution scale**: drop it one step. The picture gets softer, so check you can still read the action.
- **Shadows, reflections and effects**: lower the expensive ones. In competitive games, keep the effects that show enemy attacks.
- **View distance and crowd density**: lower these if the worst drops happen in busy cities. They can load the CPU as well as the GPU.
- **Textures**: keep them as high as your phone handles. Lower them only if the game pauses when loading new areas or runs out of memory.

Change one setting at a time and test the same route or fight after each change, so you know which one helped.

## When it gets worse over a session

If a frame-rate target works on a cold phone and fails after twenty minutes, the phone is throttling. Both Apple and Android reduce performance when the device gets hot, and lowering the FPS target reduces the heat the game produces over time. Our guides on [stopping your phone overheating while gaming](/hub/guides/stop-phone-overheating-while-gaming.html) and [bypass charging](/hub/guides/bypass-charging-mobile-gaming-guide.html) cover the cooling, charging and power-mode side in full.

## Test it properly

Pick a 10 to 15 minute route or activity you can repeat. Keep brightness, charging, connection and settings the same between runs, and let the phone cool to the same starting point. If the game or phone has an FPS counter, note the number near the start and the end; otherwise note when hitches begin and whether touch response slows.

RAM cleaners and force-closing every app don't fix a game's renderer, and some background services need to keep running. If a download or screen recorder is running, stop it for the test.

If stutter starts right after a patch, it may be a client problem. Confirm you can recover your account before you clear data or reinstall. When you report it, include your phone model, OS version, game version, settings, server region and a short screen recording.
