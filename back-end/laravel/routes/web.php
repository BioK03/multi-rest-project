<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/events', ['middleware' => 'cors', function () {
    if(DB::connection()->getDatabaseName())
    {
        $events = DB::table('events')->get();
    }
    return response()->json([
        'events' => $events
    ]);
}]);
