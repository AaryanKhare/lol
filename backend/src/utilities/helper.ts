export function stringifyToJSON(data: any) {
    const json = JSON.stringify(data, (key, value) => (typeof value === 'bigint' ? value.toString() : value));
    return JSON.parse(json);
}

export function exclude<T extends Record<string, any>, K extends keyof T>(obj: T, keysToRemove: K[]): Omit<T, K> {
    const newObj = { ...obj }; // Create a new object by spreading the original object
    keysToRemove.forEach(key => {
        delete newObj[key]; // Delete each specified key from the new object
    });
    return newObj; // Return the modified object
}