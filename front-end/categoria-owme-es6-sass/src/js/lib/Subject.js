class Subject {

    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data) {
        if(this.observers.length > 0) {
            this.observers.forEach(observer => observer.update(data));
        }
    }

}

export default Subject;