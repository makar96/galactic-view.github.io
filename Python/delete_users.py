import sqlite3

# Подключаемся к базе
conn = sqlite3.connect("users.db")
cur = conn.cursor()

# Показываем всех пользователей
print("Список пользователей:")
for row in cur.execute("SELECT id, username FROM users"):
    print(row)

# Пример: удалить по username
#username_to_delete = input("Введите имя пользователя для удаления: ")
#cur.execute("DELETE FROM users WHERE username = ?", (username_to_delete,))
#conn.commit()
#print(f"Пользователь '{username_to_delete}' удалён.")

conn.close()
