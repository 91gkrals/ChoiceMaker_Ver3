import { observable, action, computed, makeObservable, toJS } from 'mobx';
//코맨트: toJS는 observable 형태의 객체를 일반 JS객체로 변환해준다. 

class ChoiceStore {


    constructor() {
        makeObservable(this);
        //mobx 6환경에서는 이게 있어야 데이터가 변경이 반영이 된다. 
    }

    @observable
    _todo = { scoreScale: 5, extraScore: 0 }  // id, title, date, 그리고 gachi, scoreScale, extraScore

    @observable
    _todos = [];

    @observable
    _searchText = '';

    @observable
    _resultNum = 0;

    get todo() {
        return this._todo;
    }

    @computed //캐싱된 걸 반환하기에 성능이 더 좋음. 
    get todos() {
        //return this._todos ? this._todos.slice() : [];
        return toJS(this._todos);
    }

    get searchText() {
        return this._searchText;
    }

    @computed
    get resultNum() {
        return this._resultNum;
    }


    @action //observable 데이터를 변경할 때 action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name]: value
        }
        console.log(this._todo);
    }

    @action
    setSearchText(searchText) {
        this._searchText = searchText;
    }

    @action
    addTodo(todo) {
        this._todos.push(todo);
    }


    @action
    selectedTodo(todo) {
        this._todo = todo;
    }

    @action
    updateTodo() {
        let foundTodo = this._todos.find((todo) => todo.id === this._todo.id);
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;
        foundTodo.gachi = this._todo.gachi;
        foundTodo.scoreScale = this._todo.scoreScale;
        foundTodo.extraScore = this._todo.extraScore;
        this._todo = {};
    }

    @action
    removeTodo() {
        let index = this._todos.findIndex(todo => todo.id === this._todo.id);
        if (index > -1) {
            this._todos.splice(index, 1);//index부터 1개를 제거하겠다.
        }

        this._todo = {};
    }

    @action
    submitDecision() {
        let sum = 0;
        let todos = this._todos;

        for (let i = 0; i < todos.length; i++) {
            sum += (Number(todos[i].scoreScale) + Number(todos[i].extraScore));
        }

        let resultScore = (sum * 1.0) / todos.length;
        this._resultNum = resultScore.toFixed(1);
    }


}


export default new ChoiceStore();