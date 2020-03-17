from config import app, db, ma

# Card Class/Model


class Card(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    image = db.Column(db.String(100), unique=True)

    def __init__(self, name, image):
        self.name = name
        self.image = image

# Card Schema


class CardSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'image')


# Initialize the Schema
card_schema = CardSchema()
cards_schema = CardSchema(many=True)
