---
project: scada-flask-factoryio
# No demo clip yet, drop one at /public and set `video` (and optionally
# `videoPoster`) here, same as the ELF Infector writeup. A running FactoryIO
# instance is needed to record it.
# video: /FactoryIO_Flask/demo.webm
# videoPoster: /FactoryIO_Flask/Cover.png
---

## What it is

A short, hands-on look at where SCADA systems go wrong, and how to close the
gap. A sorting line is simulated in [FactoryIO], driven over Modbus, while a
small Flask web interface sits alongside the control driver and can seize
manual control of individual coils. It's a compact demonstration of how an
operator-facing interface can quietly override an industrial process, and a
starting point for thinking about how to secure that path.

## How it works

Two processes run side by side:

- a **Flask web interface**, and
- a **driver** running the sorting algorithm inside FactoryIO.

Through the interface you can take control of an individual coil. Once a coil
is under manual control it defaults to **off**, and the driver is locked out
of it, the automation can no longer touch that output. From there you toggle
the coil **on** or **off** by hand, independently of what the process wants.

## Running it

Install FactoryIO and open `projet.factoryio` from the repository, then start
the system with `main.py`. A successful start prints a Modbus connection
confirmation in the terminal.

> Built as a security study to understand SCADA/Modbus weaknesses and safer
> designs, meant for a lab bench and equipment you own, not live plant.

[FactoryIO]: https://factoryio.com/
