class Electrodevice{
    constructor(name, device){
    this.device = 'electric';
    this.name = name
}

plug(){
    console.log(`This ${this.name} plugged out.`)
}

}

class EnergyEfficiency extends Electrodevice{
    constructor(name, power, consum, plugIn, efficiency){
    super(name);
    this.power = power;
    this.consum = consum;
    this.plugIn = plugIn;
}
plug(){
    if (this.plugIn){
        console.log (`This ${this.name} plugged in and consumes ${this.consum} W.`)
    } else {
        return super.plug();
    }
}
}

class EnergyBattery extends Electrodevice{
    constructor(name, power, battery, plugIn){
    super(name);
    this.power = power;
    this.battery = battery;
    this.plugIn = plugIn
}
plug(){
    if (this.plugIn){
        console.log(`This ${this.name} plugged in and has ${this.battery} % battery charge.`)
    } else {
        return super.plug();
    }
}
}

const computer = new EnergyBattery('computer', 65, 50, true)
const lamp = new EnergyEfficiency('lamp', 50, 5, true)