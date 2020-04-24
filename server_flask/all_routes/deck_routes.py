from flask import request, jsonify
from models_schema.deck_model_schema import Deck, Deck_Cards, deck_schema, decks_schema, deck_card_schema, deck_cards_schema
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
        Deck_Cards.count, Card.name, Card.image, Card.id).filter(Deck_Cards.deck_id == id)
    return deck_cards_schema.jsonify(cards_for_deck)

# WORK IN PROGRESS
# UPDATE A COUNT OF A PARTICULAR CARD WITHIN A DECKLIST BY DECKID/CARDID
@app.route('/decks/<id>', methods=['PUT'])
def update_count(id):
    updated_count = request.json['count']
    card_in_deck = Deck_Cards.query.filter(Deck_Cards.deck_id == id).filter(Deck_Cards.card_id == request.json['id'])
    card_in_deck.count = updated_count
    db.session.commit()
    return deck_card_schema.jsonify(card_in_deck)
