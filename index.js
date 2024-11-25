class UniqueIdGenerator {
    /**
     * Generates all unique IDs of a given length from the provided set of characters.
     * @param {string} letters - A string of characters to generate IDs from.
     * @param {number} length - The length of each generated ID.
     * @returns {string[]} - An array of unique IDs.
     */
    static generateUniqueIds(letters, length) {
        if (length < 1 || length > letters.length) {
            throw new Error("Invalid length: must be between 1 and the number of unique letters.");
        }

        const ids = [];
        const generate = (currentId, remainingLetters) => {
            if (currentId.length === length) {
                ids.push(currentId);
                return;
            }

            for (let i = 0; i < remainingLetters.length; i++) {
                generate(currentId + remainingLetters[i], remainingLetters.slice(0, i) + remainingLetters.slice(i + 1));
            }
        };

        generate("", letters);
        return ids;
    }

    /**
     * Searches for a specific ID in an array of generated IDs.
     * @param {string[]} ids - The array of generated IDs.
     * @param {string} idToFind - The specific ID to search for.
     * @returns {boolean} - Whether the ID was found.
     */
    static findId(ids, idToFind) {
        return ids.includes(idToFind);
    }
}

module.exports = UniqueIdGenerator;