from datetime import datetime
from config import app, db, ma

# User Class/Model


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    # decks = db.relationship('Deck', backref='user', lazy='select')

    def __init__(self, username, password, createdAt):
        self.username = username
        self.password = password
        self.createdAt = createdAt

# User Schema


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'createdAt')


# Initialize the Schema
user_schema = UserSchema()
