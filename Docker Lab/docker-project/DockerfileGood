FROM nginx:1.24.0


# ОБновляем файлы и устанавливаем пакеты
RUN apt-get update && apt-get install -y nginx curl

# Рабочая директория
WORKDIR /usr/share/nginx/html

# Копируем файлы в контейнер
COPY Files /usr/share/nginx/html


# Nginx конфиг
COPY nginx.conf /etc/nginx/nginx.conf

# Порт
EXPOSE 443

# Запуск
CMD ["nginx", "-g", "daemon off;"]

