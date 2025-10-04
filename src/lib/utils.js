export function getLocationUrl(id) {
    return id
        ? `https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=${id}`
        : null;
}

export function flattenData(playerData) {
    return JSON.parse(JSON.stringify(playerData ?? {}));
}
