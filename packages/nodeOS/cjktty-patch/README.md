# cjktty-patch

Patch to add support for Unicode BMP plane (Plane 0) on Linux `fbcon` TTY

Patches are extracted from Gentoo-zh
[patched kernel](https://github.com/Gentoo-zh/linux-cjktty). For details on the
extraction process and how to apply them on top of an upstream Linux kernel
refer to https://www.fxhu.tk/2015/09/18/git-format-patch-cjktty

## Patch instructions
Original post was once lost and need to search it again on Google's cache, so
here are the basic instructions to update the patch for upcoming Linux kernel
versions:

1. Get Linux kernel source code. Linux kernel commits history is HUGE, so we
   only fetch the only last one:

   ```sh
   git clone --branch v4.8 --depth 1 https://github.com/torvalds/linux.git
   ```

2. Test the patch:

   ```sh
   cd linux
   git apply --whitespace=warn --stat < /path/to/cjktty.patch
   git apply --whitespace=warn --check < /path/to/cjktty.patch
   ```

4. Fix patch until there's no failures
4. Apply the patch and let it auto-adjust:

   ```sh
   git apply --whitespace=warn < /path/to/cjktty.patch
   ```

5. Commit the changes of the patch:

   ```sh
   git add .
   git commit -m "cjktty patch for Linux 4.8.1"
   ```

6. Extract the patch after applied to the kernel:

   ```sh
   git diff HEAD~1 -- > cjktty.patch
   ```
