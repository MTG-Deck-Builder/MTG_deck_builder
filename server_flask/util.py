from config import db
from datetime import datetime
from models_schema.card_model_schema import Card
from models_schema.user_model_schema import User
from models_schema.deck_model_schema import Deck, Deck_Cards
import bcrypt


def seed_data():
    db.drop_all()
    db.create_all()

    hashed_password = bcrypt.hashpw(b'secretpassword', bcrypt.gensalt(12))

    ronny = User(username='Ronny', email='Rsalvarado777@gmail.com', password=hashed_password, createdAt=datetime(2020, 3, 3))
    brandon = User(username='Brandon', email='Brandon@example.com', password=hashed_password, createdAt=datetime(2020, 3, 3))
    kaiser = User(username='Kaiser', email='Kaiser@example.com', password=hashed_password, createdAt=datetime(2020, 3, 18))
    db.session.add(ronny)
    db.session.add(brandon)
    db.session.add(kaiser)
    db.session.commit()

    cards = []
    decks = []
    deck_of_cards = []

    cards.append(Card(name="Azorius Charm", image="https://img.scryfall.com/cards/large/front/9/7/9740ceaf-4ef9-48dd-ab7d-cd5eb3be8cec.jpg?1562851619"))
    cards.append(Card(name="Dissolve", image="https://img.scryfall.com/cards/large/front/b/4/b4fb87ab-8595-459a-a5f2-087296d9b120.jpg?1562853056"))
    cards.append(Card(name="Doom Blade", image="https://img.scryfall.com/cards/large/front/9/0/90699423-2556-40f7-b8f5-c9d82f22d52e.jpg?1562851557"))
    cards.append(Card(name="Hero's Downfall", image="https://img.scryfall.com/cards/large/front/5/9/596822f6-dbd4-4cc8-aa50-9331ff42544e.jpg?1562818494"))
    cards.append(Card(name="Sphinx's Revelation", image="https://img.scryfall.com/cards/large/front/0/0/0038ea4d-d0a6-44a4-bee6-24c03313d2bc.jpg?1561759805"))
    cards.append(Card(name="Supreme Verdict", image="https://img.scryfall.com/cards/large/front/a/6/a679cc74-6119-468f-8c64-5dcf216438d1.jpg?1562852509"))
    cards.append(Card(name="Detention Sphere", image="https://img.scryfall.com/cards/large/front/a/f/afee5464-83b7-4d7a-b407-9ee7de21535b.jpg?1562791607"))
    cards.append(Card(name="Elspeth, Sun's Champion", image="https://img.scryfall.com/cards/large/front/f/d/fd5b1633-c41d-42b1-af1b-4a872077ffbd.jpg?1562839369"))
    cards.append(Card(name="Jace, Architect of Thought", image="https://img.scryfall.com/cards/large/front/d/4/d4df3a38-678e-42dc-a3fd-d1d399368f07.jpg?1562793747"))
    cards.append(Card(name="Aetherling", image="https://img.scryfall.com/cards/large/front/9/c/9c93313b-cf43-47e9-a911-717b4d14b0b5.jpg?1562924171"))
    cards.append(Card(name="Blood Baron of Vizkopa", image="https://img.scryfall.com/cards/large/front/5/6/56955e63-db6f-4f1d-b3c4-dd268c902653.jpg?1562848962"))
    cards.append(Card(name="Godless Shrine", image="https://img.scryfall.com/cards/large/front/6/f/6fd672bb-18cf-44e3-8dda-5310b1e0fffe.jpg?1561831123"))
    cards.append(Card(name="Hallowed Fountain", image="https://img.scryfall.com/cards/large/front/a/f/af7091c9-5f98-4078-a42b-c9e057346d9b.jpg?1562791585"))
    cards.append(Card(name="Island", image="https://img.scryfall.com/cards/large/front/9/6/96ad5cbb-b64e-4e18-9aa0-ac076d4b2448.jpg?1583553498"))
    cards.append(Card(name="Plains", image="https://img.scryfall.com/cards/large/front/2/2/2296cffa-be1f-49af-aaca-3166e7043de0.jpg?1583553460"))
    cards.append(Card(name="Temple of Deceit", image="https://img.scryfall.com/cards/large/front/6/8/686559d7-8ac1-496b-a5a6-1467bf8fc7c5.jpg?1562819288"))
    cards.append(Card(name="Temple of Silence", image="https://img.scryfall.com/cards/large/front/0/f/0f14b6b3-5f40-4328-a3be-28fe32dd7cb1.jpg?1562814674"))
    cards.append(Card(name="Watery Grave", image="https://img.scryfall.com/cards/large/front/4/7/47fde349-010e-4a2e-838e-e924dbeec355.jpg?1561825120"))

    decks.append(Deck(deck_name='UW Control', createdAt=datetime(2020, 3, 18), user_id=1))
    decks.append(Deck(deck_name='UW Control', createdAt=datetime(2020, 3, 18), user_id=2))
    decks.append(Deck(deck_name='UW Control', createdAt=datetime(2020, 3, 18), user_id=3))

    # Kaiser's UW Control (RTR Standard)
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=1, count=4))  # Azorius Charm
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=2, count=3))  # Dissolve
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=3, count=3))  # Doom Blade
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=4, count=4))  # Hero's Downfall
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=5, count=3))  # Sphinx's Revelation
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=6, count=4))  # Sphinx's Revelation
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=7, count=3))  # Detention Sphere
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=8, count=2))  # Elspeth, Sun's Champion
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=9, count=4))  # Jace, Architect of Thought
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=10, count=1))  # Aetherling
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=11, count=2))  # Blood Baron of Vizkopa
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=12, count=4))  # Godless Shrine
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=13, count=4))  # Hallowed Fountain
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=14, count=4))  # Island
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=15, count=2))  # Plains
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=16, count=4))  # Temple of Deceit
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=17, count=4))  # Temple of Silence
    deck_of_cards.append(Deck_Cards(deck_id=3, card_id=18, count=4))  # Watery Grave

    for playset in deck_of_cards:
        db.session.add(playset)

    for deck in decks:
        db.session.add(deck)

    for card in cards:
        db.session.add(card)
    db.session.commit()
    print('DB deleted & reseeded!')
