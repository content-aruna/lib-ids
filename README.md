
### Custom unique ids generator

Unique-id-generator is a simple and efficient library for generating unique IDs from a set of characters. It supports creating IDs of custom lengths and provides functionality to search for specific IDs in the generated list.

#### Features

- Generate unique IDs of any specified length.
- Customizable input character sets.
- Efficient and reusable.
- Lightweight and easy to use.


#### Installation

Install the package using npm

```bash
npm install unique-id-generator
```

#### Usage

Here's an example of how to use unique-id-generator

#### Import the Library

```javascript
const UniqueIdGenerator = require('unique-id-generator');
```

#### Generate Unique IDs

```javascript
const letters = "acemnorsuvwx";
const idLength = 4;

// Generate all unique IDs
const uniqueIds = UniqueIdGenerator.generateUniqueIds(letters, idLength);
console.log("Generated IDs:", uniqueIds);
```

#### Find a Specific ID

```javascript
const idToFind = "acvo";

if (UniqueIdGenerator.findId(uniqueIds, idToFind)) {
    console.log(`Found ID: ${idToFind}`);
} else {
    console.log(`Can't find ID: ${idToFind}`);
}
```
#### Example Output

```bash
Generated IDs: ['acem', 'acen', 'aceo', ...]
Found ID: acvo
```
#### API Reference

#### A. Generates all unique IDs of the specified length from the given characters.

`generateUniqueIds(letters, length)`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `letters` | `string` | A string of characters to use for ID generation. |
| `length`  | `number` | The length of each generated ID. |

#### Example

Array of generated unique IDs.

```javascript
const ids = UniqueIdGenerator.generateUniqueIds("abc", 2);
console.log(ids); // ['ab', 'ac', 'ba', 'bc', 'ca', 'cb']
```

#### B. Searches for a specific ID in the array of generated IDs.

`findId(ids, idToFind)`



| Parameter   | Type     | Description                |
| :--------   | :------- | :------------------------- |
| `ids`       | `array`  | The list of generated IDs. |
| `idToFind`  | `string` | The ID to search for. |

#### Example

Returns `true` if the ID is found, `false` otherwise.

```javascript
const found = UniqueIdGenerator.findId(['ab', 'ac', 'ba'], 'ac');
console.log(found); // true
```

#### Error Handling

If the `length` parameter is invalid, the library will throw an error

```javascript
const letters = "abc";
try {
    const ids = UniqueIdGenerator.generateUniqueIds(letters, 10); // Invalid length
} catch (error) {
    console.error(error.message); // "Invalid length: must be between 1 and the number of unique letters."
}
```
#### Contribution

Contributions are welcome! Please follow these steps

- Fork the repository. 
- Create a new branch for your feature/fix.
- Submit a pull request with a detailed explanation.


#### License

[This project is licensed under the **MIT** License.](https://choosealicense.com/licenses/mit/)


#### Author

- [@content-aruna](https://github.com/content-aruna/)
- aruna.contac@gmail.com
