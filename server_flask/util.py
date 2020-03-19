from config import db
from datetime import datetime
from models_schema.card_model_schema import Card
from models_schema.user_model_schema import User
from models_schema.deck_model_schema import Deck, Deck_Cards


def seed_data():
    db.drop_all()
    db.create_all()

    ronny = User(username='Ronny', password='password',
                 createdAt=datetime(2020, 3, 3))
    brandon = User(username='Brandon', password='password',
                   createdAt=datetime(2020, 3, 3))
    db.session.add(ronny)
    db.session.add(brandon)
    db.session.commit()

    cards = []
    decks = []
    deck_of_cards = []
    cards.append(Card(name="Deathrite Shaman",
                      image="https://img.scryfall.com/cards/large/front/d/1/d14f9fc8-e48c-473f-ba6b-9cffce94bb53.jpg?1580015151"))
    cards.append(Card(name="Llanowar Elves",
                      image="https://img.scryfall.com/cards/large/front/7/3/73542493-cd0b-4bb7-a5b8-8f889c76e4d6.jpg?1562302708"))
    cards.append(Card(name="Gaea's Cradle",
                      image="https://img.scryfall.com/cards/large/front/2/5/25b0b816-0583-44aa-9dc5-f3ff48993a51.jpg?1562902898"))
    cards.append(Card(name="Mayael the Anima",
                      image="https://img.scryfall.com/cards/large/front/3/1/316b1fd1-5ec4-4bdc-938b-cbace1bb3f42.jpg?1562702547"))
    cards.append(Card(name="Elvish Archdruid",
                      image="https://img.scryfall.com/cards/large/front/1/e/1eb230a8-08d6-46a8-87fb-3c1614550f16.jpg?1561758897"))

    decks.append(
        Deck(deck_name='Elves', createdAt=datetime(2020, 5, 30), user_id=1))
    decks.append(Deck(deck_name='Goblins',
                      createdAt=datetime(2020, 4, 25), user_id=1))
    decks.append(Deck(deck_name='Death&Taxes',
                      createdAt=datetime(2020, 3, 20), user_id=2))

    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=1, count=4))
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=2, count=4))
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=3, count=4))
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=4, count=4))
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=5, count=4))

    for playset in deck_of_cards:
        db.session.add(playset)

    for deck in decks:
        db.session.add(deck)

    for card in cards:
        db.session.add(card)
    db.session.commit()
    print('DB deleted & reseeded!')
