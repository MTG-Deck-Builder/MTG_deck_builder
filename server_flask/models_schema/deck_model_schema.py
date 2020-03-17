from datetime import datetime
from config import app, db, ma

# Deck Class/Model


class Deck(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    deck_name = db.Column(db.String(100), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __init__(self, deck_name, createdAt, user_id):
        self.deck_name = deck_name
        self.createdAt = createdAt
        self.user_id = user_id

# Deck Schema


class DeckSchema(ma.Schema):
    class Meta:
        fields = ('id', 'deck_name', 'createdAt', 'user_id')


# Initialize the Schema
deck_schema = DeckSchema()
decks_schema = DeckSchema(many=True)
