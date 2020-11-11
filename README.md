# Vue-Rollup Example

A minimal vuejs project that uses rollup to build a javascript bundle to use in a browser. Could not find full documentation anywhere, and had to figure out parts of the rollup config by trial & error & Google.

To build:

* npm install
* npm run build
* Point browser to index.html file

This index.html file will load directly using Firefox (version 82). For chrome you might need to run an http server. Using python3, for example:

```
python http.server --cgi 8080
```
