# JHipster 4.0 UAA Preview

This repository shows the microservice setup using JHipster 4.0 with UAA configuration

## How to run

In folder `uaa`, `foo` and `gateway` perform

```
$ ./gradlew build -Pprod buildDocker
```

and in folder `docker` run

```
$ docker-compose up -d
```

*note*: Depending on the performance of the machine, the services `foo` and `gateway` might fail, if they try to fetch the UAAs public key earlier, then it registers itself to the registry. Use `docker logs` and `docker-compose ps` to watch the status of the bootup, and repeat `docker-compose up -d`.


## current state

Currently this repository only consists of a plain generated application state, as it is after generate the apps and adding the `Foo` entity to `foo` and `gateway`.



