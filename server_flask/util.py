from config import db
from datetime import datetime
from models_schema.card_model_schema import Card
from models_schema.user_model_schema import User


def seed_data():
    db.drop_all()
    db.create_all()

    ronny = User('Ronny', 'password', datetime(2020, 3, 3))
    db.session.add(ronny)
    db.session.commit()

    cards = []
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

    for card in cards:
        db.session.add(card)
    db.session.commit()
    print('DB deleted & reseeded!')
