from pymysql import *
from .connection import connections

def Insert(query):
    try:
        con = connections.ConnectMe('')
        cr = con.cursor()
        cr.execute(query)
        con.commit()
        con.close()
        return "success"
    except:
        return "INVALID QUERY"

def Fetchone(query):
    try:
        con = connections.ConnectMe('')
        cr = con.cursor()
        cr.execute(query)
        result = cr.fetchone()
        con.close()
        return result
    except:
        return "INVALID QUERY"

def Fetchall(query):
    try:
        con = connections.ConnectMe('')
        cr = con.cursor()
        cr.execute(query)
        result = cr.fetchall()
        con.close()
        return result
    except:
        return "INVALID QUERY"


def Delete(query):
    try:
        con = connections.ConnectMe('')
        cr = con.cursor()
        cr.execute(query)
        con.commit()
        con.close()
        return "success"
    except:
        return "INVALID QUERY"


def Update(query):
    try:
        con = connections.ConnectMe('')
        cr = con.cursor()
        cr.execute(query)
        con.commit()
        con.close()
        return "success"
    except:
        return "INVALID QUERY"