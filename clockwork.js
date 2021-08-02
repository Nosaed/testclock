// 12 hr clock



let hours = 0;
let minutes = 0;
let seconds = 0;



const numberOfTicks = 200;
const baseUnit = 70;
const wrapValue = 60;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function tick() {
    for (let i = 1; i < numberOfTicks; i++) {
        await sleep(baseUnit);
        console.log (seconds);
        ++seconds;
        if (seconds / wrapValue === 1) {
            seconds = 0;
            ++minutes;
        }
        if (minutes / wrapValue === 1) {
            minutes = 0;
            ++hours;
        }
    }
 }

tick();