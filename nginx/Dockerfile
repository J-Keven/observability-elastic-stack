FROM nginx

USER root

RUN rm -rf /var/log/nginx/access.log && rm -rf /var/log/nginx/error.log

COPY ./default.conf ./etc/nginx/conf.d/

RUN curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.13.1-amd64.deb
RUN dpkg -i filebeat-7.13.1-amd64.deb

COPY ./my-filebeat.yml /etc/filebeat/

RUN cat /etc/filebeat/my-filebeat.yml > /etc/filebeat/filebeat.yml

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh 

EXPOSE 80

ENTRYPOINT [ "./entrypoint.sh" ]