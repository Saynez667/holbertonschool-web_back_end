from typing import List
from async_generator import async_generator

async def async_comprehension() -> List[float]:
    """
    Collects 10 random numbers using async comprehension over async_generator.
    Returns:
        List[float]: List of 10 random floats.
    """
    return [i async for i in async_generator()]