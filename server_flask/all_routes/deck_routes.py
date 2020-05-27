from flask import request, jsonify
from models_schema.deck_model_schema import Deck, Deck_Cards, deck_schema, decks_schema, deck_card_schema, deck_cards_schema
from models_schema.card_model_schema import Card, cards_schema, card_schema
from config import app, db
from pprint import pprint

# GET ALL DECKS BY USER ID
@app.route('/user/<id>/decks', methods=['GET'])
def get_decks(id):
    all_decks_of_user = Deck.query.filter_by(user_id=id).all()
    return decks_schema.jsonify(all_decks_of_user)

# ADD A DECK (NO CARDS YET)
@app.route('/user/<id>/decks', methods=['POST'])
def add_deck(id):
    deck_name = request.json['deck_name']
    user_id = request.json['user_id']

    added_deck = Deck(deck_name=deck_name, user_id=user_id)
    db.session.add(added_deck)
    db.session.commit()

    return deck_schema.jsonify(added_deck)

# GET AN ENTIRE DECKLIST BY DECK ID
@app.route('/decks/<id>', methods=['GET'])
def get_deck_by_id(id):
    cards_for_deck = Card.query.join(Deck_Cards, Card.id == Deck_Cards.card_id).add_columns(
        Deck_Cards.count, Card.name, Card.id).filter(Deck_Cards.deck_id == id)
    return deck_cards_schema.jsonify(cards_for_deck)

# UPDATE A COUNT OF A PARTICULAR CARD WITHIN A DECKLIST BY DECKID/CARDID
@app.route('/decks/<id>', methods=['PUT'])
def update_count(id):
    updated_count = request.json['count']
    card_in_deck = Deck_Cards.query.filter_by(deck_id=id).filter_by(card_id=request.json['id']).first()
    card_in_deck.count = updated_count
    db.session.commit()
    return jsonify({'message': 'Card count updated'})

# DELETE AN ENTIRE CARD FROM YOUR DECK
@app.route('/decks/<deck_id>/<card_id>', methods=['DELETE'])
def delete_card_in_deck(deck_id, card_id):
    card_in_deck = Deck_Cards.query.filter_by(deck_id=deck_id).filter_by(card_id=card_id).first()
    db.session.delete(card_in_deck)
    db.session.commit()
    return jsonify({'message': 'Card deleted'})

# ADD A NEW CARD TO YOUR DECK
@app.route('/decks/<id>', methods=['POST'])
def add_new_card_to_deck(id):
    add_new_card = Deck_Cards(deck_id=int(id), card_id=request.json['id'], count=1)
    db.session.add(add_new_card)
    db.session.commit()
    return jsonify({'message': 'Card added'})

# DELETE A DECK
@app.route('/decks/<id>', methods=['DELETE'])
def delete_deck(id):
    deleted_deck = Deck.query.filter_by(id=id).first()
    db.session.delete(deleted_deck)
    db.session.commit()
    return jsonify({'message': 'Deck deleted'})
