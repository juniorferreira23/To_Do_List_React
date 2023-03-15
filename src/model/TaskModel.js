class Task {
    
    static id = 0

    constructor(text){
        this.id = Task.id++
        this.text = text
        this.done = false
    }
}

export default Task