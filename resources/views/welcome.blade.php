<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="height: 100%">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>rafilo_blog</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body style="height: 100%">
        <div id="app">
        </div>
    </body>
</html>
