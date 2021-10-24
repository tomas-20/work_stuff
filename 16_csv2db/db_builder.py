#Clyde "Thluffy" Sinclair
#SoftDev
#skeleton/stub :: SQLITE3 BASICS
#Dec 2020 -- The Time of the Rona

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

#==========================================================


# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >

#code to read in roster info

def get_dict_items(dic, keys):
    def get_item(key):
        return dic[key]
    return map(get_item, keys)

def list_to_string(lst):
    return "(" + ", ".join(lst) + ")"

def append(a, b):
    return a + " " + b

def add_format(value, field_type):
    if field_type == "TEXT":
        return "'" + value + "'"
    return value

#all dicts will have the same headers since both csv files have the same headers
def dict2SQ(dict_reader, db, table_name, field_types):
    c = db.cursor()
    field_names = dict_reader.fieldnames;
    headers = map(append, field_names, field_types)
    header_string = list_to_string(headers)
    c.execute("CREATE TABLE IF NOT EXISTS " + table_name + " " + header_string)

    for dic in dict_reader:
        items = get_dict_items(dic, field_names)
        formatted_items = map(add_format, items, field_types)
        item_string = list_to_string(formatted_items)
        c.execute("INSERT INTO " + table_name + " VALUES " + item_string)

    db.commit()


    # for item in dict:
    #     item_string = "('" + dict[item][dict_loop[0]] + "', "
    #     + dict[item][dict_loop][1]+ "," + dict[item][dict_loop][2] +")"
    #     if debug:
    #         print(item_string)
        #c.execute("INSERT INTO roster VALUES ('whose-it', 2);")

    #c.execute("CREATE TABLE [IF NOT EXISTS] " + table_name + table_headers)g

def printDB(db, tableName):
    c = db.cursor()
    c.execute("SELECT * FROM " + tableName)
    rows = c.fetchall()
    for item in rows:
        print(item)

def dbExistence(db, table_name):
    c = db.cursor()
    c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='" + table_name + "'")
    return(bool(c.fetchone()))
#command = ""          # test SQL stmt in sqlite3 shell, save as string
#c.execute(command)    # run SQL statement

#==========================================================

if __name__ == "__main__":
    discobandit = sqlite3.connect("discobandit.db") #open if file exists, otherwise create
    with open("students.csv") as students:
        rosterDict = csv.DictReader(students)
        dict2SQ(rosterDict, discobandit, "roster", ["TEXT", "INTEGER", "INTEGER"])
    #db.commit()  # save changes
    printDB(discobandit, "roster")
    print(dbExistence(discobandit, "roster"))
    print(dbExistence(discobandit, "cheese"))
    # coursesDict = readFile('courses.csv')
    # dict2SQ(coursesDict, "courses")
    # db.commit()  # save changes
    # printDB("courses")
    discobandit.close()  # close database
