# Тестовое задание 

Тестовое задание выполнено с использованием следующих технологий:
- Реактивный javascript фреймворк vuejs
- Material component framework Vuetifyjs
- Google News API

**Сборка и запуск проекта**

**Способ 1:**

Готовый образ выложен на Dockerhub

https://hub.docker.com/r/farex/news/

Скачайте образ

```bash
➜ docker pull farex/news
```
и запустите командой 
```bash
➜ docker run -it -d --name news -p 9090:80 farex/news
```
Перейдите в браузере по ссылке
 http://localhost:9090
 
**Способ 2**:


В корне проекта находится Dockerfile в котором указаны все необходимые параметры сборки образа
```bash $
➜ git clone https://github.com/fgituser/testTask.git
➜ cd testTask
➜ docker build -t news .
```
Докер соберет образ под названием **news**
```bash
➜ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
news                latest              ffbf2f47d0b4        About an hour ago   719MB
➜  
```
Также в корне проекта находится скрипт для запуска контейнера следующего содержания:
```bash
!#bin/bash
docker run -it -d --name news -p 8787:80 news
```
имените параметр **-p** если порт 8787 у вас занать., например так:
```bash
docker run -it -d --name news -p 9090:80 news
```
Запустите его следующей командой:
```bash
➜ chmod +x run.sh
➜ ./run.sh
```
запустите браузер и перейдите по адресу:
http://localhost:8787


