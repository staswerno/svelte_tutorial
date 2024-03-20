export async function getRandomNumber() {
    // Fetch a random number between 0 and 100
    // (with a delay, so that we can see it)
    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
    if (response.ok) {
        return await response.text();
    } else {
        // Sometimes the API will fail!
        throw new Error('Request failed');
    }
}