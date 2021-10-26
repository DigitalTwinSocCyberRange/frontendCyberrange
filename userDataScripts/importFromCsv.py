import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import csv

# Use a service account
cred = credentials.Certificate('serviceAccount.json')
firebase_admin.initialize_app(cred)

db = firestore.client()


with open('usernames.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    for row in csv_reader:
        userID=row[0];
        username = row[1];
        round= row[2];
        doc_ref = db.collection(u'cyberrangeVisualProgramming').document(userID)
        doc_ref.set({
    u'userID': userID,
    u'username': username,
    u'round': int(round),
    u'points': 0,
    u'level': 0

 })



