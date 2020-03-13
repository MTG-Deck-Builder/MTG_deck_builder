from card import ma

# Card Schema


class CardSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'image')


# Initialize the Schema
card_schema = CardSchema()
cards_schema = CardSchema(many=True)
