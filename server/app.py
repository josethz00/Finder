from flask import Flask, Response
import pymongo
from flask_cors import CORS
from flask_mongoengine import MongoEngine

app = Flask(__name__)
CORS(app)


app.config['MONGODB_SETTINGS'] = {
    'db': 'finder',
    'host': 'mongodb+srv://username:password@clustername.u6g0p.mongodb.net/password?retryWrites=true&w=majority'
}

db = MongoEngine()
db.init_app(app)

from src.routes.main_routes import *

if __name__ == "__main__":
    app.run(host='192.168.15.6',port=3333, debug=True)
