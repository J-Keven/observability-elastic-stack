FROM nginx

RUN rm -rf /var/log/nginx/access.log && rm -rf /var/log/nginx/error.log

COPY ./default.conf ./etc/nginx/conf.d/

EXPOSE 80