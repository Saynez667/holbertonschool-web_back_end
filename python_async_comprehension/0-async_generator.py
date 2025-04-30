#!/usr/bin/env python3
import asyncio
import random

async def async_generator():
    """Asynchronously yield 10 random numbers between 0 and 10, one every second."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
