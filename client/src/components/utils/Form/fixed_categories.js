const rates = [
    {
        "_id": 2,
        "name": 2
    },
    {
        "_id": 3,
        "name": 3
    },
    {
        "_id": 4,
        "name": 4
    },
    {
        "_id": 5,
        "name": 5
    },
]

const price = [
    {
        "_id":0,
        "name":"Any",
        "array":[]
    },
    {
        "_id":1,
        "name":"$0 to $9",
        "array":[0,9]
    },
    {
        "_id":2,
        "name":"$9 to $19",
        "array":[9,19]
    },
    {
        "_id":3,
        "name":"$20 to $29",
        "array":[20,29]
    },
    {
        "_id":4,
        "name":"$30 to $39",
        "array":[30,39]
    },
    {
        "_id":5,
        "name":"More than $39",
        "array":[39,1500000]
    }
]


export {
    rates,
    price
}