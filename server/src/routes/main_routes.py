from app import app
from flask_cors import cross_origin 
import json

@app.route('/posts', methods=['GET'])
@cross_origin()
def index():
    return json.dumps({"message": "It's working on this multilanguage app"}), 200

@app.route('/posts', methods=['POST'])
@cross_origin()
def store():
    return json.dumps({"message": "It's working on this multilanguage app"}), 201

@app.route('/fetch', methods=['GET'])
@cross_origin()
def fetch():
    return json.dumps({"message": "It's working on this multilanguage app"}), 200