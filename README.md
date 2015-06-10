#Vilnius Self-service bicycle map

The map was made using Leaflet.js mapping library and JCDecaux self-service bicycle API data and thus requires an API key, that can be requested at https://developer.jcdecaux.com.
To retrieve the API data, a small backend server has been written in Flask that makes the API call and caches the data.

Although this application is tailored to display bicycle data for Vilnius, it is trivial to change the backend so that other cities with JCDecaux self-service bicycle scheme, such as Paris, Brussels or Dublin, could be shown.
