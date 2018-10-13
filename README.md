# <p align="center">Decided Title for App </p>

## <p align="center">Created by: Peoples & Claire </p>

#### <p align="center">VetHacks Hackathon by Patriot Boot Camp in Seattle, WA (October 11th, 2018-October 13th, 2018)</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<App Name> is a social media platform designed specifically for veterans and veteran spouses. <App Name> allows veterans and veteran spouses to connect with other veterans/veteran spouses in real time, enhaning their support network and allowing them to connect with other veteran affiliated individuals over their personal experiences.

---

# Requirements:

### Node

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Node](http://nodejs.org/) is really easy to install & now includes [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

```
$ node --version
v0.10.24

$ npm --version
1.3.21
```

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

# Installation:

```
$ git clone https://github.com/clarisaleu/veteran-logs.git
$ cd veteran-logs
$ npm install
```

## Start

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Run Application

```
$ cd veteran-logs
$ npm start
```

## Update sources

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To run those 3 commands you can just do

    $ npm run pull

---

# Built With:

- #### HTML, NodeJS, JavaScript ([ReactJS](http://facebook.github.io/react) is used for UI), CSS, & MongoDB

---

# Acknowledgements:

- #### Thank you to [Patriot Boot Camp](http://patriotbootcamp.org/) and other [partners/sponsors](https://www.vethacks.org/) for hosting an unforgettable 36 hour hackathon!
