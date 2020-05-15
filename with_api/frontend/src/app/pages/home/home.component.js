import swal from 'sweetalert';
import _ from 'lodash';

export default {
	template: require('./home.html'),
	controller: ContactController,
	controllerAs: 'vm'
};

ContactController.$inject = ['$localStorage', '$http', 'HttpService'];

function ContactController($localStorage, $http, HttpService){
	// init
	const vm = this;
	vm.$onInit = onInit;

	vm.save = save;
	vm.onRemove = onRemove;
	vm.onChange = onChange;
	vm.filterByStatus = filterByStatus;

	vm.todoListForm = null;
	vm.todoList = [];

	function onInit(){
		init();
	}

	function init(){
		HttpService.get('todo').then((data) => {
			vm.todoList = data;
			_.map(vm.todoList, (row) => {
				row.completed = !!_.parseInt(row.completed);
				return row;
			});
		});
	}

	function save(){
		const value = _.get(vm.todoListForm, 'text.value', null);
		if(!value){
			return swal({
				title: 'Error',
				text: 'Text cannot be empty!',
				type: 'error',
				html: true,
				showConfirmButton: false
			});
		}

		return HttpService.post('todo', {text: value}).then(() => {
			vm.todoListForm.reset();
			init();
		});
	}

	function onChange(todo){
		return HttpService.put('todo', todo.id, {
			text: todo.text,
			completed: todo.completed
		}).then(() => {
			vm.todoListForm.reset();
			init();
		});
	}

	function onRemove(id){
		if(confirm('Are you sure you want to delete?')){
			return HttpService.delete('todo', id).then(() => {
				vm.todoListForm.reset();
				init();
			});
		}
	}

	function filterByStatus(completed){
		return _.filter(_.clone(vm.todoList), {completed});
	}
}
