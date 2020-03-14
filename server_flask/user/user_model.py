from datetime import datetime
from __init__ import app, db

# User Class/Model

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullablle=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, username, password, createdAt):
        self.username = username
        self.password = password
        self.createdAt = createdAt
