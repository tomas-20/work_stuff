#Clyde "Thluffy" Sinclair
#SoftDev
#skeleton/stub :: SQLITE3 BASICS
#Dec 2020 -- The Time of the Rona

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events
debug = False
#==========================================================


# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >

#code to read in roster info

def readFile(file):
    # returns file as a dictionary seperated by rows
    return csv.DictReader(open(file))

def get_dict_items(dic, fieldnames):
    output = []
    for i in fieldnames:
        output.append(dic[i])
    return output
#all dicts will have the same headers since both csv files have the same headers
def dict2SQ(dict_reader, table_name):
    dict_headers = " (name TEXT, num0 INTEGER, num1 INTEGER)"
    c.execute("CREATE TABLE IF NOT EXISTS " + table_name + dict_headers)
    
    for dict in dict_reader:
        item_string = "('" + ", ".join(get_dict_items(dic, dict_reader.fieldnames)) + ")"
        c.execute("INSERT INTO "+ table_name +" VALUES "+item_string+";")
        if debug:
            print(item_string)

    db.commit()


    # for item in dict:
    #     item_string = "('" + dict[item][dict_loop[0]] + "', "
    #     + dict[item][dict_loop][1]+ "," + dict[item][dict_loop][2] +")"
    #     if debug:
    #         print(item_string)
        #c.execute("INSERT INTO roster VALUES ('whose-it', 2);")

    #c.execute("CREATE TABLE [IF NOT EXISTS] " + table_name + dict_headers)

def printDB(tableName):
    c.execute("SELECT * FROM " + tableName)
    rows = c.fetchall()
    for item in rows:
        print(item)

def dbExistence(table_name):

    c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='" + table_name + "'")
    return(bool(c.fetchone()))
#command = ""          # test SQL stmt in sqlite3 shell, save as string
#c.execute(command)    # run SQL statement

#==========================================================

if __name__ == "__main__":
    rosterDict = readFile('students.csv')
    #dict2SQ(rosterDict, "roster")
    #db.commit()  # save changes
    printDB("roster")
    print(dbExistence("roster"))
    print(dbExistence("cheese"))
    # coursesDict = readFile('courses.csv')
    # dict2SQ(coursesDict, "courses")
    # db.commit()  # save changes
    # printDB("courses")
    db.close()  # close database
