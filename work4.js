function Electrodevice(name, device){
    this.device = 'electric',
    this.name = name
}


function EnergyEfficiency(name, power, efficiency,){
    this.name = name,
    this.power = power,
    this.efficiency = 'A+'
}

function EnergyPower(name, power, battery){
    this.name = name,
    this.power = power,
    console.log(`This ${name} has ${battery} % battery charge`)
}


EnergyEfficiency.prototype = new Electrodevice()
EnergyPower.prototype = new Electrodevice()
  
const computer = new EnergyPower('computer', 65, 50)
const lamp = new EnergyEfficiency('lamp', 50)

console.log(computer)

console.log(lamp)


Electrodevice.prototype.plugIn =function(consum){
    console.log(`This device plugged in and consumes ${consum} W.`)
}

Electrodevice.prototype.plugOut =function(){
    console.log(`This device plugged out.`)
}


computer.plugOut()

lamp.plugIn(5)