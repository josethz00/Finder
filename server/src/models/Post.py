from app import db
from datetime import datetime

class Posts(db.Document):
    city = db.StringField(max_length=200, required=True)
    uf = db.StringField(max_length=3, required=True)
    latitude = db.DecimalField(max_length=60, required=True)
    longitude = db.DecimalField(max_length=60, required=True)
    file = db.URLField(required=True)
    created_at = db.DateTimeField(default=datetime.utcnow(), required=True)