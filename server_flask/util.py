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

    # UW Control (RTR Standard)
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

    # Combo Elves (Legacy)
    cards.append(Card(name="Birchlore Rangers", image="https://img.scryfall.com/cards/large/front/8/c/8ce3a3a1-3569-4909-a604-f78d4888781e.jpg?1562928197"))
    cards.append(Card(name="Heritage Druid", image="https://img.scryfall.com/cards/large/front/a/7/a726acbd-724e-46c5-a4cf-4aee7c2abb16.jpg?1562880575"))
    cards.append(Card(name="Elvish Mystic", image="https://img.scryfall.com/cards/large/front/d/6/d618c3ea-f823-4fe0-8e11-65d5965528d3.jpg?1561759745"))
    cards.append(Card(name="Elvish Reclaimer", image="https://img.scryfall.com/cards/large/front/3/9/39c431d7-d94b-46c4-bb89-f3db56214ab4.jpg?1563899381"))
    cards.append(Card(name="Elvish Visionary", image="https://img.scryfall.com/cards/normal/front/f/a/faccfa5f-4d89-4a86-92d7-36cb5a16c5c9.jpg?1562711018"))
    cards.append(Card(name="Fyndhorn Elves", image="https://img.scryfall.com/cards/large/front/4/5/45718e96-c7e4-45ef-9196-d3a1eea878fb.jpg?1562909070"))
    cards.append(Card(name="Llanowar Elves", image="https://img.scryfall.com/cards/large/front/7/3/73542493-cd0b-4bb7-a5b8-8f889c76e4d6.jpg?1562302708"))
    cards.append(Card(name="Multani's Acolyte", image="https://img.scryfall.com/cards/large/front/4/e/4e5fdecb-bca0-48ea-b5bb-d0886c7d3316.jpg?1562862815"))
    cards.append(Card(name="Nettle Sentinel", image="https://img.scryfall.com/cards/large/front/f/9/f9f21681-fd36-4106-8395-3153599a08a6.jpg?1562947879"))
    cards.append(Card(name="Quirion Ranger", image="https://img.scryfall.com/cards/large/front/5/6/56efe72c-6d7f-44f6-ac74-01af9305c4b6.jpg?1562277667"))
    cards.append(Card(name="Wirewood Symbiote", image="https://img.scryfall.com/cards/large/front/4/9/49488b76-abaf-4dba-b01f-7b418e4ff295.jpg?1562528525"))
    cards.append(Card(name="Craterhoof Behemoth", image="https://img.scryfall.com/cards/large/front/a/2/a249be17-73ed-4108-89c0-f7e87939beb8.jpg?1561879555"))
    cards.append(Card(name="Natural Order", image="https://img.scryfall.com/cards/large/front/0/8/0845f0b0-9413-4ddd-861d-9607636bebc6.jpg?1562276959"))
    cards.append(Card(name="Glimpse of Nature", image="https://img.scryfall.com/cards/large/front/1/d/1ddcd76b-a7a1-4ae6-bf4a-f929c6574bdc.jpg?1562757977"))
    cards.append(Card(name="Green Sun's Zenith", image="https://img.scryfall.com/cards/large/front/0/2/02335747-54e3-4827-ae19-4e362863da9b.jpg?1562609284"))
    cards.append(Card(name="Gaea's Cradle", image="https://img.scryfall.com/cards/large/front/2/5/25b0b816-0583-44aa-9dc5-f3ff48993a51.jpg?1562902898"))
    cards.append(Card(name="Misty Rainforest", image="https://img.scryfall.com/cards/large/front/2/4/24a5cc2c-0fbf-4a5f-b175-6e0ffd0d0787.jpg?1562610639"))
    cards.append(Card(name="Verdant Catacombs", image="https://img.scryfall.com/cards/large/front/7/a/7abd2723-2851-4f1a-b2d0-dfcb526472c3.jpg?1562613630"))
    cards.append(Card(name="Windswept Heath", image="https://img.scryfall.com/cards/large/front/7/a/7a7c5941-9c8a-4a40-9efb-a84f05c58e53.jpg?1562923899"))
    cards.append(Card(name="Bayou", image="https://img.scryfall.com/cards/normal/front/1/7/17db2b6a-eaa8-4a08-9e86-370bbd058574.jpg?1559591871"))
    cards.append(Card(name="Cavern of Souls", image="https://img.scryfall.com/cards/large/front/1/3/1381c8f1-a292-4bdf-b20c-a5c2a169ee84.jpg?1561857492"))
    cards.append(Card(name="Dryad Arbor", image="https://img.scryfall.com/cards/large/front/8/c/8cee476d-42e1-4997-87af-73e18f542167.jpg?1562923491"))
    cards.append(Card(name="Forest", image="https://img.scryfall.com/cards/large/front/1/2/12a035fe-8847-4678-84f7-01bac77ae011.jpg?1583553465"))

    decks.append(Deck(deck_name='UW Control', createdAt=datetime(2020, 3, 18), user_id=1))
    decks.append(Deck(deck_name='Combo Elves', createdAt=datetime(2020, 3, 18), user_id=1))
    decks.append(Deck(deck_name='UW Control', createdAt=datetime(2020, 3, 18), user_id=2))
    decks.append(Deck(deck_name='UW Control', createdAt=datetime(2020, 3, 18), user_id=3))

    # UW Control (RTR Standard)
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=1, count=4))  # Azorius Charm
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=2, count=3))  # Dissolve
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=3, count=3))  # Doom Blade
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=4, count=4))  # Hero's Downfall
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=5, count=3))  # Sphinx's Revelation
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=6, count=4))  # Sphinx's Revelation
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=7, count=3))  # Detention Sphere
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=8, count=2))  # Elspeth, Sun's Champion
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=9, count=4))  # Jace, Architect of Thought
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=10, count=1))  # Aetherling
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=11, count=2))  # Blood Baron of Vizkopa
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=12, count=4))  # Godless Shrine
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=13, count=4))  # Hallowed Fountain
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=14, count=4))  # Island
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=15, count=2))  # Plains
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=16, count=4))  # Temple of Deceit
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=17, count=4))  # Temple of Silence
    deck_of_cards.append(Deck_Cards(deck_id=1, card_id=18, count=4))  # Watery Grave

    # Combo Elves (Legacy)
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=19, count=2))  # Birchlore Rangers
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=20, count=4))  # Heritage Druid
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=21, count=1))  # Elvish Mystic
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=22, count=4))  # Elvish Reclaimer
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=23, count=4))  # Elvish Visionary
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=24, count=1))  # Fyndhorn Elves
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=25, count=1))  # Llanowar Elves
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=26, count=1))  # Multani's Acolyte
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=27, count=4))  # Nettle Sentinel
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=28, count=4))  # Quirion Ranger
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=29, count=4))  # Wirewood Symbiote
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=30, count=2))  # Craterhoof Behemoth
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=31, count=3))  # Natural Order
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=32, count=4))  # Glimpse of Nature
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=33, count=4))  # Green Sun's Zenith
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=34, count=4))  # Gaea's Cradle
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=35, count=3))  # Misty Rainforest
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=36, count=3))  # Verdant Catacombs
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=37, count=2))  # Windswept Heath
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=38, count=2))  # Bayou
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=39, count=1))  # Cavern of Souls
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=40, count=2))  # Dryad Arbor
    deck_of_cards.append(Deck_Cards(deck_id=2, card_id=41, count=3))  # Forest

    for playset in deck_of_cards:
        db.session.add(playset)

    for deck in decks:
        db.session.add(deck)

    for card in cards:
        db.session.add(card)
    db.session.commit()
    print('DB deleted & reseeded!')
