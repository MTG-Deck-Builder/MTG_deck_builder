from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_talisman import Talisman
import os

# Initialize our app
app = Flask(__name__)
CORS(app)
Talisman(app)
basedir = os.path.abspath(os.path.dirname(__file__))

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
