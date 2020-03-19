from datetime import datetime
from config import app, db, ma

# Deck of cards Class/Model


class Deck_Cards(db.Model):
    __tablename__ = 'deck_of_cards'
    deck_id = db.Column(db.Integer, db.ForeignKey('deck.id'), primary_key=True)
    card_id = db.Column(db.Integer, db.ForeignKey('card.id'), primary_key=True)
    count = db.Column(db.Integer)

# Deck Class/Model


class Deck(db.Model):
    __tablename__ = 'deck'
    id = db.Column(db.Integer, primary_key=True)
    deck_name = db.Column(db.String(100), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    deck_cards = db.relationship('Deck_Cards', backref='deck', lazy=True)

# Deck Schema


class DeckCardSchema(ma.Schema):
    class Meta:
        fields = ('name', 'image', 'count')


deck_card_schema = DeckCardSchema(many=True)


class DeckSchema(ma.Schema):
    class Meta:
        fields = ('id', 'deck_name', 'createdAt', 'user_id')


# Initialize the Schema
deck_schema = DeckSchema()
decks_schema = DeckSchema(many=True)
