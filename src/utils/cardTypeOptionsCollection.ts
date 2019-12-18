import { CardTypeOptions } from "../gameEngine/model/player"
import { CardType } from "../gameEngine/model/cardType"


export const matchCardTypeOptions = (cardTypeOptions: CardTypeOptions[], cardType: CardType ): CardTypeOptions | null => {

    switch(cardType) {

        // Unicorns
        case CardType.UNICORN_BABY:
            return first(cardTypeOptions, [ CardTypeOptions.UNICORN_BABY, CardTypeOptions.UNICORN, CardTypeOptions.ANY ])
        case CardType.UNICORN_BASIC:
            return first(cardTypeOptions, [ CardTypeOptions.UNICORN_BASIC, CardTypeOptions.UNICORN, CardTypeOptions.ANY ])
        case CardType.UNICORN_MAGIC:
            return first(cardTypeOptions, [ CardTypeOptions.UNICORN_MAGIC, CardTypeOptions.UNICORN, CardTypeOptions.ANY ])

        // Upgrade Downgrade
        case CardType.UPGRADE:
            return first(cardTypeOptions, [ CardTypeOptions.UPGRADE, CardTypeOptions.ANYGRADE, CardTypeOptions.ANY ])
        case CardType.DOWNGRADE:
            return first(cardTypeOptions, [ CardTypeOptions.DOWNGRADE, CardTypeOptions.ANYGRADE, CardTypeOptions.ANY ])

        case CardType.MAGIC:
            return first(cardTypeOptions, [ CardTypeOptions.MAGIC, CardTypeOptions.ANY ])

        case CardType.INSTANT:
            return first(cardTypeOptions, [ CardTypeOptions.INSTANT, CardTypeOptions.ANY ])
    }
    
    throw Error('Invalid Type')
}

const first = <T>(cardTypeOption: Array<T>, matches: Array<T>): T | null => {

    cardTypeOption.forEach(item => {
        
        if(matches.some(m => m === item)) {
            return item
        }
    })

    return null
}