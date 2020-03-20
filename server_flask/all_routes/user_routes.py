from flask import request, jsonify
import bcrypt
import jwt
import datetime
from functools import wraps
from models_schema.user_model_schema import User, user_schema
from config import app, db
from all_routes.auth_middleware import token_required

app.config['SECRET_KEY'] = 'thisismysecretkey'

# ADD A SINGLE USER
@app.route('/register', methods=['POST'])
def add_user():
    username = request.json['username']
    password = request.json['password'].encode('utf-8')
    hashed_password = bcrypt.hashpw(password, bcrypt.gensalt(12))
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return user_schema.jsonify(new_user)

# LOGIN WITH USERNAME & PASSWORD
@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password'].encode('utf-8')
    user = User.query.filter_by(username=username).first()
    if (user):
        if (bcrypt.checkpw(password, user.password)):
            token = jwt.encode({'user': user.username, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
            return jsonify({'token': token.decode('UTF-8')})
        else:
            return jsonify({'success': False, 'message': 'Invalid password'})
    else:
        return jsonify({'success': False, 'message': 'Username does not exist'})


# GET USER BY ID
@app.route('/user/<id>', methods=['GET'])
@token_required
def get_user(id):
    found_user = User.query.get(id)
    return user_schema.jsonify(found_user)

# UPDATE USER BY ID
@app.route('/user/<id>', methods=['PUT'])
def update_user(id):
    found_user = User.query.get(id)

    username = request.json['username']
    # decks = request.json['decks']

    found_user.username = username
    # found_user.decks = decks

    db.session.commit()

    return user_schema.jsonify(found_user)

# DELETE USER BY ID
@app.route('/user/<id>', methods=['DELETE'])
def delete_user(id):
    found_user = User.query.get(id)
    db.session.delete(found_user)
    db.session.commit()
    return user_schema.jsonify(found_user)
