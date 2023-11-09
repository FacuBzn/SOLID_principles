interface Bird {
    eat(): void ;    
}

interface Flyingbird {
    fly(): number ; 
}

interface Runningbird {
    run(): void ;
}

interface Swimmingbird {
    swim():void;
}



class Tucan implements Bird , Flyingbird {
    public fly(){ return 100; }
    public eat(){  }
}

class humminbird implements Bird, Flyingbird {
    public fly(){return 120; }
    public eat(){  }
}

class Ostrich implements Bird, Runningbird {    
    public eat(){ }
    public run(){}
}

class Penguin implements Bird, Swimmingbird {    
    public eat(){ }
    public swim(){}
}



