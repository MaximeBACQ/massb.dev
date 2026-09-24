---
project: elf-infector
video: /ELFInfector/demo.webm
videoPoster: /ELFInfector/Cover.png
---

## What it does

ELF Infector takes an existing x86-64 ELF binary, finds its `PT_NOTE`
segment and rewrites it into a `PT_LOAD` segment pointing at an injected
payload. The binary then runs a custom shellcode (here, one that spawns a
`/bin/sh`) before continuing, or replacing, its normal execution. It's a
hands-on study of the ELF format and of how code gets smuggled into a
segment that was never meant to be executable.

The infector has been tested against everyday binaries such as `ls`
(including with arguments like `ls -la`) and works on them. The target ELF
is chosen by the `filename` variable at the top of the data section.

## Bring your own shellcode

To infect with your own shellcode instead of the bundled `/bin/sh` launcher,
end your payload with a blank near-jump (`0xe9`), the infector patches that
jump to hand control back to the original entry point.

## Building it

Compile the throwaway target and the infector:

```
rm -rf elftest && gcc -g -no-pie -fno-pie elftest.c -o elftest \
  && nasm -f elf64 -g -F dwarf elfInfector.s -o elfInfector.o \
  && ld -g elfInfector.o -o elfInfector
```

A blank "hello world" ELF (`elftest`) is included so you can watch the
infector work without touching a system binary.

## Packing

The compiled `elfInfector` is packed with UPX, smaller on disk, and a
little quieter to naive signature matching.

## Stager

A separate stager fetches the payload at runtime rather than shipping it.
Point a throwaway server at the project directory:

```
python3 -m http.server 8080
```

then run the stager: it downloads `elfInfector`, executes it, and deletes it
afterward. An ELF must already be present in the stager's directory for it to
infect.

## Where it's going next

- Run the infector fully in memory, with no temporary file dropped on the
  target.
- Recursively search for an ELF to infect when none is present in the current
  directory.

> Built as a security research proof-of-concept to understand ELF internals
> and defensive detection, not for use against systems you don't own.
