from config import app, db, ma

# Card Class/Model


class Card(db.Model):
    __tablename__ = 'card'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    image = db.Column(db.String(100), unique=True)
    deck_cards = db.relationship('Deck_Cards', backref='card', lazy=True)

# Card Schema


class CardSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'image')


# Initialize the Schema
card_schema = CardSchema()
cards_schema = CardSchema(many=True)
