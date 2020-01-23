from database import *
query="select newsdata.newsid,newsdata.newstitle, photo.photoid,photo.photo,newsdata.dateofnews from newsdata INNER JOIN photo on newsdata.newsid=photo.newsid ORDER BY newsdata.newsid DESC"
result=Fetchall(query)
print(result)