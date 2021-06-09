const shoppingLists = [
    {
        id: 1, userId: 1, listItems: [{ description: "First item" }]
    },
    {
        id: 2, userId: 1, listItems: [{ description: "Another item" }, { description: "One more" }]
    },
]

export default {
    Query: {
        shoppingLists: () => shoppingLists,
        shoppingList: () => shoppingLists[0]
    },
    Mutation: {
        createShoppingList: () => shoppingLists[1]
    }
}