import { Card } from "../gameEngine/model/card"

export const AddCard = (collection: Card[], card: Card) => {

    collection.push(card)
}

export const RemoveCard = (collection: Card[], cardId: number): Card | undefined => {

    const card = collection.find(card => card.id == cardId)
    if(card) {

        collection = collection.filter(card => card.id == cardId)
    }
    return card
}

export const TransferCard = (collectionFrom: Card[], collectionTo: Card[], cardId: number): Card | undefined => {

    const targetCard = RemoveCard(collectionFrom, cardId)
    if(targetCard) {
        AddCard(collectionTo, targetCard)
    }
    return targetCard
}