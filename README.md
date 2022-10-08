# StealifyOS
Tooling to build Operating Systems as also offers a universal api for existing common wide used Operating Systems that is Typescript Compatible.
This level of Abstraction allows you to create so called platform indipendent software while StealifyOS also offers a reference Platform that can be build for every device to create GUI's this uses @stealify/gui as backend for @stealify/webplatform as default you can as always compose something diffrent and use this simple as example Stealify Build Definition for software that delivers its own Platform or uses a common api on a wide set of web interop able runtimes like browsers that run on a already installed different OS like IOS, Android, Linux / WSL.

StealifyOS is Mainly Build out of the following Stack
- Linux Kernel
- bootloaders
- initramfs

## History
- There was NodeOS it was not perfect but it was a good starting point.
- There are Tons of Unmaintained Unupgraded Code Parts that are highly reuseable.
- We Take Over the Complet NodeOS Org update it and also will integrate Support for other Kernels.

## Roadmap
- [ ] - Wait till runner/posix, runner/fifo-fileHandle runner/fifo-dirHandle pm2 can be used until then for development! 
  - [ ] - Wait till b8g component builds work with justjs 
- [ ] - Minimal Bootable System
  - [ ] - Minimal Bootable SystemD (UEFI Support and other Stuff is integrated into SystemD its part of the Kernel)
  - [ ] - Stealify Component Manager using Scheduler / Tasks / Runner
    - [ ] - linux posix Systemd/dbus bindings, Windows Bindings, macOs-bindings ios-runner, android-runner (GraalVM)
