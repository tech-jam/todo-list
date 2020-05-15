<?php

require_once __DIR__.'/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;

$app = new Silex\Application();

$connectionParams = array(
    'dbname' => 'dbname',
    'user' => 'username',
    'password' => 'password',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
    'charset'   => 'utf8',
);
$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => $connectionParams
));

$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});

$app->register(new JDesrosiers\Silex\Provider\CorsServiceProvider(), [
    "cors.allowOrigin" => "*",
]);

$app->get('/', function() use($app) {
    return 'API server 1.0';
});

$app->get('/api/todo', function() use($app) {
    $data = $app['db']->fetchAll("SELECT * FROM todo_list ORDER BY id DESC");
    return $app->json($data, 200);
});

$app->post('/api/todo', function (Request $request) use ($app) {
    $text = $request->request->get('text');
    $id = $app['db']->insert('todo_list', array('text' => $text));
    return $app->json(array('id' => $id), 201);
});

$app->put('/api/todo/{id}',  function ($id, Request $request) use ($app) {
    $text = $request->request->get('text');
    $completed = $request->request->get('completed');

    $sql = "UPDATE todo_list SET text = ?, completed = ? WHERE id = ?";
    $app['db']->executeUpdate($sql, array($text, (int) $completed, (int) $id));

    return $app->json(array('id' => $id, 'text' => $text), 200);
});

$app->delete('/api/todo/{id}', function($id) use($app) {
    $sql = "DELETE FROM todo_list WHERE id = ?";
    $app['db']->executeUpdate($sql, array((int) $id));
    return $id;
});

$app["cors-enabled"]($app);

$app->run();
