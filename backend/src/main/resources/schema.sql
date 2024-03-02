CREATE DATABASE IF NOT EXISTS defaultdb;
Use defaultdb;

CREATE TABLE if not exists request(
    id varchar(255) primary key,
    description varchar(1000),
    servicetype varchar(32) not null,
    latitude decimal(25,22) not null,
    longitude decimal(25,22) not null
);

CREATE TABLE if not exists user(
    id integer primary key auto_increment,
    email varchar(255) not null unique,
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    password varchar(255) not null,
    role varchar(255) not null
);

-- javart assistConnect_db_password="assist"

-- export assistConnect_jwt_secret="992bdf1ee9906e49610f8bc71c78274a202c73f749084e6d08799aace4a00547"
-- export assistConnect_db_url=
-- export assistConnect_db_username=
-- export assistConnect_db_password=
-- export assistConnect_jwt_secret=

-- docker volume create mysql_data
-- docker run -d \
--   --name assistdb \
--   -e MYSQL_ROOT_PASSWORD=assist \
--   -p 3306:3306 \
--   --memory 500m \
--   -v mysql_data:/var/lib/mysql \
--   mysql

-- sudo docker exec -it assistdb mysql -u root -p
