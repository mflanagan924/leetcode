function memLeak(memory1, memory2){
    let memory = 1;
    while (memory <= memory1 || memory <= memory2){
        if (memory1 >= memory2){
            memory1 -= memory;
            memory++;
        } else if (memory2 > memory1){
            memory2 -= memory;
            memory++;
        }
    }
    return [memory, memory1, memory2];
}