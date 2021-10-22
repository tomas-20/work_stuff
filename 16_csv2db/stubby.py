import sqlite3  # enable SQLite operations
#open db if exists, otherwise create
import csv
db = sqlite3.connect("foo")

c = db.cursor()  # facilitate db ops

#c.execute("CREATE TABLE roster(name TEXT, userid INTEGER)")
#c.execute("INSERT INTO roster VALUES ('whose-it', 2);")
c.execute("INSERT INTO roster VALUES('your mom',0); ")
c.execute("SELECT * FROM roster")
rows = c.fetchall()
for i in range(len(rows)):
    print (rows[i])
    
db.commit()  # save changes
db.close()


def readFile(file):
    # returns file as a dictionary seperated by rows
    return csv.DictReader(open(file))


def printDictioanry(dic):
    for row in dic:
        print(", ".join(row))
