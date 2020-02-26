'use strict'

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('users','AdminController.index').middleware('auth')
Route.get('user/create','AdminController.addUser').middleware('auth')
Route.post('user','AdminController.store').middleware('auth')
Route.get('register', 'AuthController.showRegisterPage')
Route.post('register', 'AuthController.register')
Route.get('login', 'AuthController.showLoginPage')
Route.post('login', 'AuthController.login')
Route.get('logout', 'AuthController.logout')
Route.post('comment', 'CommentsController.postComment')
Route.get('departments','DepartmentsController.index')
Route.get('departments/create','DepartmentsController.create')
Route.post('departments','DepartmentsController.store')
Route.get('items','ItemsController.index').middleware('auth')
Route.get('items/create','ItemsController.create').middleware('auth')
Route.post('items','ItemsController.store').middleware('auth')
Route.get('items/edit/:item_id','ItemsController.edit').middleware('auth')
Route.get('items/detail/:item_id','ItemsController.show').middleware('auth')
Route.post('items/update','ItemsController.update').middleware('auth')
Route.get('category/add','CategoriesController.add').middleware('auth')
Route.get('categories','CategoriesController.index').middleware('auth')
Route.post('category','CategoriesController.store').middleware('auth')
Route.get('my_tickets', 'TicketsController.index').middleware('auth')
Route.get('new_ticket', 'TicketsController.create').middleware('auth')
Route.post('new_ticket', 'TicketsController.store').middleware('auth')
Route.get('tickets/:ticket_id', 'TicketsController.show').middleware('auth')
Route.group('admin', function () {
  Route.get('tickets', 'TicketsController.index');
  Route.post('close_ticket/:ticket_id', 'TicketsController.close');
}).prefix('admin').middleware(['auth', 'admin'])
