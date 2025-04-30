#!/usr/bin/env python3
import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronously generates 10 random floating-point numbers between 0 and 10.
    Each number is yielded after an asynchronous 1-second delay.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
