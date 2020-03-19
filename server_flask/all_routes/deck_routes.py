from flask import request, jsonify
from models_schema.deck_model_schema import Deck, Deck_Cards, deck_schema, decks_schema, deck_card_schema
from models_schema.card_model_schema import Card, cards_schema, card_schema
from config import app, db

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
    createdAt = request.json['createdAt']

    added_deck = Deck(deck_name, createdAt, user_id)
    db.session.add(added_deck)
    db.session.commit()

    return deck_schema.jsonify(added_deck)

# GET AN ENTIRE DECKLIST BY DECK ID
@app.route('/decks/<id>', methods=['GET'])
def get_deck_by_id(id):
    cards_for_deck = Card.query.join(Deck_Cards, Card.id == Deck_Cards.card_id).add_columns(
        Deck_Cards.count, Card.name, Card.image).filter(Deck_Cards.deck_id == id)
    return deck_card_schema.jsonify(cards_for_deck)
