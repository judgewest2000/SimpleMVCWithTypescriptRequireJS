module GlobalInterfaces {

    export interface ICalculator {
        Add(num: number): ICalculator;
        Minus(num: number): ICalculator;
        Times(num: number): ICalculator;
        AddMany(numbers: [number]): ICalculator;
        Equals(): number;
    }

}

export = GlobalInterfaces;