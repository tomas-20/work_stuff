from csv import DictReader
from sqlite3 import connect
def copy_data(table_name, data_name, file_name):
    with open(file_name) as file, connect(data_name) as data:
        reader = file.DictReader()
        cursor = data.cursor()
        cursor.execute("CREATE TABLE " + table_name + " (" + 
