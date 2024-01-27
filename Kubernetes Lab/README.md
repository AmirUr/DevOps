# Лабораторная работа (Kubernetes).



## Техническое задание



Поднять kubernetes кластер локально, в нём развернуть свой сервис, используя 2-3 ресурса kubernetes. В идеале разворачивать кодом из yaml файлов одной командой запуска. Показать работоспособность сервиса.

Далее. Сделать мониторинг сервиса, поднятого в кубере (использовать, например, prometheus и grafana). Показать хотя бы два рабочих графика, которые будут отражать состояние системы.


## Выполнение работы.



Написание Deployment and Service.



<img width="367" alt="lab" src="https://github.com/AmirUr/DevOps/assets/113135168/7d56a2d1-9b3c-45d4-87b6-a73636164244">





<img width="388" alt="service" src="https://github.com/AmirUr/DevOps/assets/113135168/f17f098f-e3b2-4ae6-9d09-1cb14ff6a178">


`kubectl apply -f deployment.yml` - Применение конфигурации deployment.

`kubectl apply -f service.yml` - Применение конфигурации service.


Проверка работоспособности Pods.

`kubectl get pods` - Список и состояние Pods.

`kubectl get services` - Cписок всех сервисов.

<img width="515" alt="nginx" src="https://github.com/AmirUr/DevOps/assets/113135168/63f7cf5d-ffcd-4be2-a855-1a9c9b63a1ec">


<img width="529" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/52845f12-5e98-4fbf-8ab3-938d93e5763d">

Смотрим выделенную строчку, нас интересует наш NodePort.

В данном случае, порт 3000 - это порт сервиса внутри кластера, и порт 32760 - это порт на узле кластера, через который можно обратиться к сервису снаружи кластера.

`minikube ip` - Получение IP-адреса виртуальной машины Minikube

Перейдем в браузер на наш IP minikube, укажем наши IP:Port

<img width="1112" alt="prod" src="https://github.com/AmirUr/DevOps/assets/113135168/8f402b22-d2ce-43b1-a475-581197d485b4">


