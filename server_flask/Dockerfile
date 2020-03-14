FROM python:latest

WORKDIR /server_flask

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

EXPOSE 3000

CMD ["flask", "run", "--host=0.0.0.0"]