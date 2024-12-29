/*  hash table
    -----------
    A hash table, also known as hash map, is a data structure that is used to store key-value pairs
    Given a key, you can associate a value with that key for very fast lookup
    Javascript's Object is a special implementation of the hash table data structure.
    However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properrties
    Maps which were introduced in 2015 allow you to store key value pairs
    Writing your own hash table implementation is a very popular javascript interview question
   
    Hash table store key value pairs
    1.  'in' => 'india'
    2.  'au' => 'Astralia'
    3.  'fr' => 'France'
    4.  'it' => 'Italy'

    We store the key value pairs in a fixed array
    Arrays have a numeric index
    How do we go from using a string as an index, to a number as an index
    A hashing function accepts the string key, converts it into a hash code using a defined logic
        and then maps it into a numeric index that is within the bounds of the array

    Using the index, store the value
    The same hashing function is reused to retrieve the value given a key
        Set to store a key - value pair
        Get to retrieve a value given its key
        Remove to delete a key value pair

    Hash table usage
    ----------------->
    Hashtables are typically implemented where constant time lookup and insertion are required e.g
        Database Indexing
        Caches

    Hash Table Implementation/ Usage
    --------------------------------
    Set to retrieve a key-value pair
    get to retrieve a value given its key
    remove to delete a key value pair
    hashing function to convert a string key to a numeric index
*/

class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]

            }
        }
    }

    remove(key) {
        const index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50)
table.set('name', 'Bruce')
table.set('age', '25')
table.display()

console.log(table.get('name'))

table.set('mane', 'Clark')
table.set('name', 'Diana')
table.remove('name')
table.display()

