
# 💻 HTTPIE Guide ! 



### Simple guide for [**Httpie for Terminal**](https://duckduckgo.com)  


<p align="center">

![Type](https://img.shields.io/badge/type-guide-brightgreen)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![MIT License](https://img.shields.io/badge/version-1.0-blue)
</p>



## Benefits ✔

- Lower resource consumption
- Fast responses
- It's possible to open it directly from terminal of vscode
- Easy to use


## Install  👩‍💻

* **macOS**
```json
brew update
brew install httpie
```

* **Windows**
```json
choco install httpie
```

* **Linux (Debian and Ubuntu)**

Also works for other Debian-derived distributions like MX Linux, Linux Mint, deepin, Pop!_OS, KDE neon, Zorin OS, elementary OS, Kubuntu, Devuan, Linux Lite, Peppermint OS, Lubuntu, antiX, Xubuntu, etc.

```json
curl -SsL https://packages.httpie.io/deb/KEY.gpg | sudo gpg --dearmor -o /usr/share/keyrings/httpie.gpg
sudo echo "deb [arch=amd64 signed-by=/usr/share/keyrings/httpie.gpg] https://packages.httpie.io/deb ./" > /etc/apt/sources.list.d/httpie.list
sudo apt update
sudo apt install httpie
```

## Getting Started 🖥

*This is a default sintax of  a request using Httpie:*

```http
  http [flags] [METHOD] URL [ITEM [ITEM]]
```
#### **Sinopsis:**

| params  | description                           |
| :---------- |  :---------------------------------- |
| `http` |  protocol type |
| `METHOD` | HTML Method (optional)|
| `URL` | address of api |
| `ITEM` | params or variables (optional) |



## Example :

#### *Simple request*
* Request (**with http method**):
```json
http get localhost:3000/api/users/1
```
* Request (**without http method**):
```json
http  localhost:3000/api/users/1
```
*Result:*
```json
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 46
Content-Type: application/json; charset=utf-8
Date: Tue, 23 May 2023 18:13:26 GMT
ETag: W/"2e-gJJ7c43v+DJhFhKEeSbGT/bJ7SQ"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "email": "example@email.com",
    "name": "John Doe"
}
```

### Body request
* Request:
```http
http POST localhost:3000/api/users/create http email=example@email.com password=password
```
*Result:*
```javascipt
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 46
Content-Type: application/json; charset=utf-8
Date: Tue, 23 May 2023 18:13:26 GMT
ETag: W/"2e-gJJ7c43v+DJhFhKEeSbGT/bJ7SQ"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "User Created!"
}
```

### Header request
* Request:
```http
http get localhost:3000/users/auth email=example@email.com password=password authorization:yourtoken
```
*Result:*
```javascipt
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 46
Content-Type: application/json; charset=utf-8
Date: Tue, 23 May 2023 18:13:26 GMT
ETag: W/"2e-gJJ7c43v+DJhFhKEeSbGT/bJ7SQ"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "token":"92e1d3c40f942d03fe377f8c45471cc068f99a2c9cbcb3ca4504f68925945480"
}
```
## Referencies 📑:

 - [Httpie Oficial Documentation](https://httpie.io/docs/cli)
 - [Httpie Install guide](https://httpie.io/docs/cli/debian-and-ubuntu)



## Author ✏:

[@wenblack](https://www.github.com/wenblack)

