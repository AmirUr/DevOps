# Используем базовый образ Python
FROM python:3.8-slim

# Устанавливаем зависимости
RUN pip install flask

# Копируем код в контейнер
COPY . /app
WORKDIR /app

# Указываем порт, который приложение будет слушать
EXPOSE 32774

# Команда для запуска приложения
CMD ["python", "app.py"]
