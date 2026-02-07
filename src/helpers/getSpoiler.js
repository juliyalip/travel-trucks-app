export function getSpoiler(text) {
    const MAX_TEXT = 50;
    if (text.length <= MAX_TEXT) return text;
    const spoilerSpaceIndex = text.indexOf(' ', MAX_TEXT);
    return `${text.substring(0, spoilerSpaceIndex)}...`

}