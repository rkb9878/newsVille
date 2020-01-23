from pymysql import *
class connections:
    def ConnectMe(self):
        con = connect("127.0.0.1", "root", "", "news")
        # con = connect("newsPython.db.7623447.596.hostedresource.net", "newsPython", "VMMEducation@123", "newsPython")
        return con


# con = connect("newsPython.db.7623447.596.hostedresource.net", "newsPython", "VMMEducation@123", "newsPython")
# print(con)