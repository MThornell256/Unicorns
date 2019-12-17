import { Card } from '../model/card';
import { CardType } from '../model/cardType';
import { GameState } from '../model/gameState';
import { Player } from "../model/player";
import { TurnPhase } from '../model/turnPhase';

const STARTING_CARDS = 5

export interface CardDefinition
{
    countInDeck: number,
    card: Card
}

class GameBuilder {

    private cardDefinitionRepository = new Map<string, CardDefinition>()

    registerCardDefinition(cardDefinition: CardDefinition) {

        if(this.cardDefinitionRepository.has(cardDefinition.card.name)) {
            throw Error('Card Definition Already Exists In Repo')
        }

        // Validate Card
        switch(cardDefinition.card.cardType) {

            case CardType.UNICORN_MAGIC:
                if(!cardDefinition.card.magicAbility && !cardDefinition.card.enterStableAbility) {
                    throw Error('Magic Unicorn Has No Abilities')
                }
                break

            case CardType.MAGIC:
                if(!cardDefinition.card.magicAbility) {
                    throw Error('Magic Card Has No Magic Ability')
                }
                break

            case CardType.INSTANT:
                if(!cardDefinition.card.instantAbility) {
                    throw Error('Instant Card Has No Instant Ability')
                }
                break

            case CardType.DOWNGRADE:
            case CardType.UPGRADE:
                if(!cardDefinition.card.modifier) {
                    throw Error('UPGRADE/DOWNGRADE Card Has No Modifier')
                }
                break
        }

        this.cardDefinitionRepository.set(cardDefinition.card.name, cardDefinition)
    }

    createGameState(playerNames: string[]): GameState {
        
        const players = playerNames.map(name => this.createPlayer(name))
        
        const gameState: GameState = {
            isModified: false,
            turn: 0,
            // turnState: { cardsDrawn: 0,
            //     cardsPlayed: 0,
            //     cardsDiscarded: 0},
            turnPhase: TurnPhase.TURN_START,
            deck: this.createDeck(),
            discard: [],
            players,
        }

        // Allocate Starting Cards
        for (let i = 0; i < STARTING_CARDS; i++) {

            players.forEach(player => {
                    const card = gameState.deck.pop() as Card
                    player.hand.push(card)
                })
            }

        return gameState
    }

    private createPlayer(name: string): Player {

        return {
            name,
            hand: [],
            stable: [],

            requiredActions: {
                draw: 0,
                drawNursery: 0,
                play: 0,
                discard: [],
                destroy: [],
                sacrifice: [],
            }
        }
    }

    private createDeck(): Card[] {

        let cardId = 1
        const deck: Card[] = []

        Array.from(this.cardDefinitionRepository, ([key, value])=> {

            for (let i = 0; i < value.countInDeck; i++) {
                deck.push(
                    {
                        ...value.card,
                        id: cardId++
                    }
                )
            }
        })

        return deck
    }

}

export const gameBuilder = new GameBuilder()