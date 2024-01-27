# Лабораторная работа (Kubernetes + Grafana + Prometheus).



## Техническое задание



Поднять kubernetes кластер локально, в нём развернуть свой сервис, используя 2-3 ресурса kubernetes. В идеале разворачивать кодом из yaml файлов одной командой запуска. Показать работоспособность сервиса.

Далее. Сделать мониторинг сервиса, поднятого в кубере (использовать, например, prometheus и grafana). Показать хотя бы два рабочих графика, которые будут отражать состояние системы.


## Kubernetes



Написание Deployment and Service.



<img width="367" alt="lab" src="https://github.com/AmirUr/DevOps/assets/113135168/7d56a2d1-9b3c-45d4-87b6-a73636164244">





<img width="388" alt="service" src="https://github.com/AmirUr/DevOps/assets/113135168/f17f098f-e3b2-4ae6-9d09-1cb14ff6a178">


`kubectl apply -f deployment.yml` - Применение конфигурации deployment.

`kubectl apply -f service.yml` - Применение конфигурации service.


Проверка работоспособности.

`kubectl get pods` - Список и состояние Pods.

`kubectl get services` - Cписок всех сервисов.

<img width="515" alt="nginx" src="https://github.com/AmirUr/DevOps/assets/113135168/63f7cf5d-ffcd-4be2-a855-1a9c9b63a1ec">


<img width="529" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/52845f12-5e98-4fbf-8ab3-938d93e5763d">

Смотрим выделенную строчку, нас интересует наш NodePort.

В данном случае, порт 3000 - это порт сервиса внутри кластера, и порт 32760 - это порт на узле кластера, через который можно обратиться к сервису снаружи кластера.

`minikube ip` - Получение IP-адреса виртуальной машины Minikube

Перейдем в браузер на наш IP minikube, укажем наши IP:Port

<img width="1112" alt="prod" src="https://github.com/AmirUr/DevOps/assets/113135168/8f402b22-d2ce-43b1-a475-581197d485b4">

## Grafana + Prometheus

Установим Prometheus следующими командами.

<img width="811" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/12b919c8-ad67-4c14-aaa8-40b175642b65">

`helm repo add prometheus-community https://prometheus-community.github.io/helm-charts`
`helm install prometheus prometheus-community/prometheus`
`kubectl expose service prometheus-server --type=NodePort --target-port=9090 --name=prometheus-server-np`

Установим Grafana и получим инструкцию получения пароля к admin.

`helm repo add grafana https://grafana.github.io/helm-charts`
`helm install grafana grafana/grafana`
`kubectl expose service grafana --type=NodePort --target-port=3000 --name=grafana-np`

<img width="788" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/fe78b2e7-c1f3-4a94-b07f-0ad4155534b9">


Проверим pods и services

<img width="508" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/b1023604-56d7-4a31-9bf1-bf6417380578">


<img width="473" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/c1693d2a-bd99-407e-92eb-b56bd1acb42a">

Узнаем URL адреса Prometheus и Grafana. Используем инструкцию, которая была в заметках при установке Grafana. Получим пароль к admin.

<img width="770" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/4ebf8485-b8a9-4076-91fc-bb72c8bea311">

Далее укажем источник метрик - Prometheus в Data Sources и законнектим Prometheus URL Server к Grafana.

<img width="1100" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/5988e6c4-2e17-4774-bafc-406adfdfc6b9">

Перейдем во вкладку dashboard и можно увидеть множество различных шаблонов, выбрал Node Exporter, самый популярный, который собирает метрики системы. 

<img width="1240" alt="image" src="https://github.com/AmirUr/DevOps/assets/113135168/7fe7b1e2-4518-4923-a282-8aec310e76dc">

Все работает :)


