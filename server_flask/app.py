from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# Initialize our app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# Run Server
if __name__ == '__main__':
    app.run(debug=True)

# Database
# This will look for a sqlite file in our current folder that we are in
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'db.sqlite')

# This will stop the console from complaining
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)

# Initialize marshmallow
ma = Marshmallow(app)

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

# ADD A SINGLE CARD
@app.route('/card', methods=['POST'])
def add_card():
    name = request.json['name']
    image = request.json['image']

    new_card = Card(name, image)

    db.session.add(new_card)
    db.session.commit()

    return card_schema.jsonify(new_card)

# GET ALL CARDS
@app.route('/cards', methods=['GET'])
def get_cards():
    all_cards = Card.query.all()
    result = cards_schema.dump(all_cards)
    return jsonify(result)

# GET CARD BY ID
@app.route('/card/<id>', methods=['GET'])
def get_card(id):
    found_card = Card.query.get(id)
    return card_schema.jsonify(found_card)

# UPDATE CARD BY ID
@app.route('/card/<id>', methods=['PUT'])
def update_card(id):
    found_card = Card.query.get(id)

    name = request.json['name']
    image = request.json['image']

    found_card.name = name
    found_card.image = image

    db.session.commit()

    return card_schema.jsonify(found_card)

# DELETE CARD BY ID
@app.route('/card/<id>', methods=['DELETE'])
def delete_card(id):
    found_card = Card.query.get(id)
    db.session.delete(found_card)
    db.session.commit()
    return card_schema.jsonify(found_card)
