let counter = 0;

function newID(): string {
    ++counter;
    return `${new Date().getTime()}-${Math.random}()}`}