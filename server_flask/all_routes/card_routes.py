from flask import request, jsonify
from models_schema.card_model_schema import Card, card_schema, cards_schema
from config import app, db

# ADD A SINGLE CARD
@app.route('/card', methods=['POST'])
def add_card():
    name = request.json['name']
    image = request.json['image']

    new_card = Card(name=name, image=image)

    db.session.add(new_card)
    db.session.commit()

    return card_schema.jsonify(new_card)

# GET ALL CARDS
@app.route('/cards', methods=['GET'])
def get_cards():
    all_cards = Card.query.all()
    result = cards_schema.dump(all_cards)
    return jsonify(result)

# GET 10 CARDS via PAGINATION
@app.route('/cards', methods=['POST'])
def get_ten_cards():
    page_num = request.json['page']
    upper = page_num * 10
    lower = upper - 9
    cards = Card.query.filter(Card.id >= lower).filter(Card.id <= upper)
    return cards_schema.jsonify(cards)

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
