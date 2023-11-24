
FROM python:3.8-slim

RUN pip install flask

COPY . /app
WORKDIR /app


EXPOSE 32774

CMD ["python", "app.py"]
