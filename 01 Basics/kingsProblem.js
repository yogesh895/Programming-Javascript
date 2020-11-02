let king ="John";

if (true){
    let king="Sam";
    if(true){
        let king="Ram";
        console.log(king);

    }
}

if(true){
    console.log(king);
}

// if we declare king variable without let or var then
//it also get global and can print anywhere
//it is the most dangerous part of java script the scope
//management