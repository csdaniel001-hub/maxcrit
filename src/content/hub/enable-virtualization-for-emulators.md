---
title: How to Enable Virtualization for Android Emulators on Windows
seo_title: How to Enable Virtualization for Android Emulators on Window
summary: How to check whether virtualization is on, turn on Intel VT-x or AMD SVM in the BIOS, and set up Windows Hypervisor Platform and Hyper-V for Android emulators.
keyword: How to Enable Virtualization for Android Emulators on Windows
hub_type: guides
published_at: '2026-11-24T15:00:00Z'
roundup: true
genres: []
platforms:
- pc
- android
sources:
- title: Microsoft UEFI and virtualization instructions
  url: https://support.microsoft.com/en-us/windows/experience/enable-virtualization-on-windows
  primary: true
- title: Google Play Games requirements
  url: https://support.google.com/googleplay/answer/11358071?hl=en
  primary: true
- title: BlueStacks Hyper-V requirements
  url: https://support.bluestacks.com/hc/en-us/articles/4415238471053-System-requirements-for-BlueStacks-5-on-Hyper-V-enabled-Windows-10-and-11
  primary: true
- title: LDPlayer Hyper-V-compatible release
  url: https://www.ldplayer.net/support/ldplayer-hyper-v-compatible-version.html
  primary: true
- title: Android developer hardware acceleration reference
  url: https://developer.android.com/studio/run/emulator-acceleration
  primary: true
tldr:
- 'Check Task Manager first: under Performance, then CPU, it shows whether virtualization is enabled.'
- Intel calls it VT-x or Intel Virtualization Technology; AMD calls it SVM Mode or AMD-V. It lives in the BIOS or UEFI.
- Google Play Games on PC also needs Windows Hypervisor Platform, and BlueStacks 5.20 or newer runs with Hyper-V on or off.
image: /assets/img/enable-virtualization-for-emulators.jpg
image_url: https://www.gstatic.com/play/games/pc/googleplaygames-gaming-across-devices-cd48db3a.png
image_source: https://play.google.com/googleplaygames
image_credit: Google
image_alt: Official Google Play Games on PC artwork
image_status: candidate
---

Does Task Manager list Virtualization as Disabled? Then the single setting that makes the biggest difference to Android emulators is switched off on your PC. With it, the emulator can run Android almost directly on your processor. Without it, everything is slower, some emulators refuse to start, and Google Play Games on PC will not install at all. Most modern PCs support it, but many ship with it off. Below: how to check, how to turn it on, and how to handle the Windows features that sit on top of it.

## Check whether it is already on

Before going into the BIOS, check Windows:

1. Press Ctrl + Shift + Esc to open Task Manager.
2. Open the Performance tab and select CPU.
3. Look at the details under the graph for Virtualization.

If it says Enabled, you are done with this part and can skip to the Windows features section. If it says Disabled, your processor supports it but it is switched off in the firmware. If the line is missing entirely, your processor may not support it, or a hypervisor is already running and Windows is reporting it differently.

## Find the right setting name

Different makers use different names for the same thing:

| Processor | What the setting is usually called |
|---|---|
| Intel | Intel Virtualization Technology, Intel VT-x, VT-x, Virtualization |
| AMD | SVM Mode, AMD-V, Secure Virtual Machine, Virtualization |

On Intel systems you may also see VT-d. That is a related feature for devices and is not what emulators need, though turning it on does no harm.

## Open the BIOS or UEFI

There are two ways in.

### From Windows (works on most modern PCs)

1. Open Settings, then System (Windows 11) or Update and Security (Windows 10), then Recovery.
2. Under Advanced startup, click Restart now.
3. After the restart, choose Troubleshoot, then Advanced options, then UEFI Firmware Settings, then Restart.

Your PC restarts straight into its firmware settings.

### With a key during startup

Restart and press the setup key repeatedly as soon as the PC turns on. Common keys are Delete or F2 on desktop motherboards, and F2, F10, F12 or Esc on laptops. The correct key is often shown briefly on the startup screen, and it is always in your motherboard or laptop manual.

## Turn virtualization on

Firmware menus vary, but the setting is usually under one of these:

- **Advanced**, then CPU Configuration (common on desktop motherboards)
- **Advanced**, then Processor or Chipset
- **Security** or System Configuration (common on laptops)
- **Overclocking** or Tweaker menus on some gaming boards, where CPU features are grouped

Set the option to Enabled, then save and exit. The save key is usually F10, and the menu will ask you to confirm. Windows starts normally, and Task Manager should now show Virtualization as Enabled.

If you cannot find the setting, search your motherboard or laptop maker's support site for your model name plus "virtualization". Some laptop makers hide it behind an advanced mode in their firmware menu.

## Set up the Windows features

Windows has several features that use virtualization. Which ones you need depends on the emulator.

### Google Play Games on PC

Google requires Windows Hypervisor Platform. The installer usually offers to turn it on. To do it yourself:

1. Search the Start menu for Turn Windows features on or off.
2. Tick Windows Hypervisor Platform.
3. Click OK and restart.

Google dropped support for Intel HAXM in November 2022, so ignore older guides that mention it.

### BlueStacks 5

From version 5.20, BlueStacks runs with Hyper-V either on or off. If Hyper-V is on, the official installer gives you the Hyper-V compatible build automatically. BlueStacks lists Windows 10 version 1903 or newer, or Windows 11, for Hyper-V setups, and Android 11 instances work with Hyper-V enabled.

### Other emulators

Some emulators offer a separate Hyper-V compatible version, and others prefer Hyper-V switched off. Check the emulator's own support pages if it complains about Hyper-V or refuses to start after you enabled other Windows virtualization features.

## Common problems

| Problem | What to try |
|---|---|
| Task Manager still shows Disabled | Make sure you saved the BIOS change; a full shutdown and restart sometimes helps |
| No virtualization option in the BIOS | Update the BIOS from your PC maker's site; some older or locked-down systems do not expose it |
| Emulator still asks for virtualization | Check whether another program is using the hypervisor, and follow the emulator's own guide for this case |
| Two emulators fight each other | Uninstall the one you are not using; they often expect different virtualization setups |
| Work or school PC blocks the setting | Ask your IT department; changing firmware on a managed PC may break its rules |

## Is it safe to turn on?

Yes. Virtualization is a standard processor feature, and Windows itself uses it for security features such as Memory Integrity and for tools like WSL. Turning it on does not slow down your PC in normal use. Only change the setting named above, though: firmware menus contain options for memory, voltage and boot order that can stop a PC from starting if changed by mistake. If something goes wrong, most BIOS menus have a Load optimized defaults option to reset everything.
