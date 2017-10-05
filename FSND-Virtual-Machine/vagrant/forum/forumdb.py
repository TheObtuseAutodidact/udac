# "Database code" for the DB Forum.

import datetime
import psycopg2
import bleach

conn = psycopg2.connect("dbname=forum")
cursor = conn.cursor()


# POSTS = [("This is the first post.", datetime.datetime.now())]

def get_posts():
  """Return all posts from the 'database', most recent first."""
  # return reversed(POSTS)
  cursor.execute("SELECT content, time FROM posts ORDER BY time DESC")
  posts = cursor.fetchall()
  # posts = ({'content': str(row[1]), 'time': str(row[0])}
  #          for row in preformatted_posts)
  return posts

def add_post(content):
  """Add a post to the 'database' with the current timestamp."""
  # POSTS.append((content, datetime.datetime.now()))
  cursor.execute("INSERT INTO posts VALUES (%s)", (bleach.clean(content),))
  conn.commit()


