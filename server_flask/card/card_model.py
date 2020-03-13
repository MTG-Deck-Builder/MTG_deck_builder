from card import app, db

# Card Class/Model


class Card(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    image = db.Column(db.String(100), unique=True)

    def __init__(self, name, image):
        self.name = name
        self.image = image
