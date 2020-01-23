text="All text from our RSS feed must displayed in the manner in which we provide the text.  You may not edit, translate, or reformat the content that we provide.  You must retain all links to the original Washington Post article on washingtonpost.com, as well as any other hyperlinks or notices in the feed."
lists=text.split(" ")
newline=[]
for word in lists:
    newline.append(word)
    if len(newline)>8:
        newline.append("......")
        break
lists2=" ".join(newline)

print(lists)
print(lists2)


# query=f"selet * from newsdata where (newstitle Like CONCAT('%','{}','%'}) or catname LIKE CONCAT('%','{}','%') or description LIKE CONCAT('%','{}','%')"