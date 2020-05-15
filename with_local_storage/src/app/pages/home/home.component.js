import swal from 'sweetalert';
import _ from 'lodash';

export default {
	template: require('./home.html'),
	controller: ContactController,
	controllerAs: 'vm'
};

ContactController.$inject = ['$localStorage'];

function ContactController($localStorage){
	// init
	const vm = this;
	vm.$onInit = onInit;

	vm.save = save;
	vm.onRemove = onRemove;
	vm.filterByStatus = filterByStatus;

	vm.todoListForm = null;
	vm.todoList = [];

	function onInit(){
		vm.todoList = _.get($localStorage, 'todoList') || [];
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
		vm.todoList.unshift({text: value, completed: false});
		vm.todoListForm.reset();
	}

	function onRemove(index){
		if(confirm('Are you sure you want to delete?')){
			_.pullAt(vm.todoList, index);
		}
	}

	function filterByStatus(completed){
		return _.filter(_.clone(vm.todoList), {completed});
	}
}
