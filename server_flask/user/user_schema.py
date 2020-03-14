from server_flask import ma

# User Schema

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'createdAt', 'decks')

# Initialize the Schema
user_schema = UserSchema()